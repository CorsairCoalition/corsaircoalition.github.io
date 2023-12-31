# Installation and Setup

To run the bot, assemble the bot components discussed in the previous section. This can be accomplished in many ways, but in this section, we will cover the simplest option of running these components using [Docker Compose](https://docs.docker.com/compose/).

> Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.


We wrapped each service in [OCI-compatible images](https://opencontainers.org/) using [Alpine Linux](https://alpinelinux.org/about/), which keeps the overhead to a minimum.

<details><summary>Non-Docker Option</summary>
<p>

Running these components without Docker requires executing each service individually using its individual instructions. This is typically a simple one-line command but requires [NodeJS](https://nodejs.org/en) installed in your environment. Launch separate terminals for each process and run the services starting with your instance of Redis. Use the same configuration file for all components to enable them to communicate using Redis.

Ensure that you are running the latest version of `node` and `npm`. We developed and tested all components with NodeJS version 20.

Warning: Do not install NodeJS directly from Ubuntu repositories, since they often tend to be out of date. Use the [NodeSource](https://github.com/nodesource/distributions) as instructed in the NodeJS official guide.
</p></details>

## Prerequisites

- [Docker](https://docs.docker.com/engine/install)
- [Docker Compose](https://docs.docker.com/compose/install)

Warning: Do not install Docker directly from Ubuntu repositories, since they often tend to be out of date. An older version of Docker will cause compatibility issues that are difficult to address. Use the official instructions given at the links above.

Use the following commands to test:

```sh
docker version
docker compose version
```

## Docker Compose Notes

The following list of `docker compose` commands serves as a quick reference:

- `docker compose config`: validates and display the parsed contents of the compose file
- `docker compose pull`: grab the latest version of images referenced in the compose file
- `docker compose build`: locally build services from folders specified in the `build` property
- `docker compose up`: brings up all services except the ones that contain a `profile` property
- `docker compose up --abort-on-container-exit`: stops all containers if anything crashes
- `docker compose start SERVICE_NAME`: start SERVICE_NAME in foreground and required services in background
- `docker compose down --remove-orphans`: stop running services and remove associated containers
- `docker compose ps`: show all running containers
- `docker system prune -a`: delete all docker artifacts and start fresh

## Setup

1. Clone or download the [documentation repository](https://github.com/CorsairCoalition/docs).

```sh
git clone https://github.com/CorsairCoalition/docs
```

2. `docker-compose-examples` directory has several examples of docker-compose files that you can use to bring up individual components as a single unit. Select the one or mix-and-match to meet your intended use. Place the docker compose file in your working directory and rename it to `docker-compose.yml` for convenience.

For Python bot development, use `docker-compose.pybot.on.flobot.yml` or `docker-compose.pybot.on.pybot.yml`. This will require you to run [PyBot](https://github.com/CorsairCoalition/PyBot/) separately to provide the bot logic. See the next section for detailed instructions.

To run the example implementation in TypeScript, use `docker-compose.typescript.yml`. This includes a rudimentary bot that uses [ArmadaAssault](https://github.com/CorsairCoalition/ArmadaAssault) to generate actions and [StrategySentinel](https://github.com/CorsairCoalition/StrategySentinel) to select the appropriate action.

```sh
cp docs/docker-compose-examples/docker-compose.typescript.yml docker-compose.yml # TypeScript Bot Development
```

```sh
cp docs/docker-compose-examples/docker-compose.pybot.on.flobot.yml docker-compose.yml # Python Bot Development
```

3. Make a copy of the example configuration file, `config.example.json` and change the `userId` and `username` at a minimum. Change the `customGameId` to your desired room.

Note:  According to the GIO official developer documentation, bot names must start with `[Bot]` and cannot be changed once set.

```sh
cp docs/config.example.json config.json

# use sed to replace RANDOMLY_GENERATED_STRING with a randomly generated string in config.json
sed -i "s/RANDOMLY_GENERATED_STRING/$(cat /dev/random | tr -cd [:alnum:] | head -c 12)/" config.json

# NOTE: manually change UNIQUE_DISPLAY_NAME in your config file to your desired display name
```

4. Start background services. This command will start Docker containers for your framework components except CommanderCortex. CommanderCortex is a terminal-based application that requires total access to the current terminal and is incompatible with `docker compose up`.

```sh
docker compose up

# Ignore the Redis-related warnings. When you see "READY TO PLAY", continue to the next step.
```

5. Open another terminal window and navigate to your working directory.

6. Execute the following command to start CommanderCortex. Ensure that the last part of the command matches the name of the service that you defined in the `docker-compose.yml` file.

```sh
docker compose run commander-cortex
```

The Commander Cortex UI should appear. You are now ready to play against other bots or humans.

7. In a browser window, navigate to the game lobby, typically at `https://bot.generals.io/games/YOUR_CUSTOM_ROOM_NAME`, and click on *Spectator* to observe the game while in progress.

## Development: Python

To develop the brains of the bot using Python, ensure you use the appropriate docker compose file, e.g. `docker-compose.pybot.on.flobot.yml`, and then continue to the [Python Bot Development guide](/development) on the next page.

## Development: TypeScript

1. Get the component that you want to modify and place it in the same directory.
2. Edit `docker-compose.yaml` - replace `image:` with `build:`.
3. Make desired changes and build a fresh image using `docker compose build`.

## Development: Any Other Language

1. Parse the config file and use the `userId` string to compute the bot's unique hash, `botId`. The last seven characters of the SHA256 checksum in base64 format represent the hash. The following command will print the unique `botId`.

```sh
printf YOUR_RANDOMLY_GENERATED_USER_ID | sha256sum | cut -d ' ' -f 1 | xxd -r -p | base64 | head -c 43 | tail -c 7
```

2. See the TypeScript [type declaration file](https://github.com/CorsairCoalition/common/blob/master/src/types.d.ts) to understand the underlying data structures. Use a Redis inspector such as [RedisInsight](https://redis.com/redis-enterprise/redis-insight/) to interactively inspect PubSub event streams and key store.

3. Use a [Redis client](https://redis.io/resources/clients/) to communicate with your Redis instance. Framework components use the following channels to broadcast their updates:

- `cortex-{botId}-command`: game start/end instructions to SergeantSocket
- `cortex-{botId}-state`: game start/win/loss events
- `cortex-{botId}-turn`: turn-by-turn tick updates to synchronize the bot
- `cortex-{botId}-gameUpdate`: low-level turn-by-turn game updates; use game state key instead
- `cortex-{botId}-recommendation`: ArmadaAssault uses this to broadcast generated actions
- `cortex-{botId}-action`: **bot logic sends actions here**
- Game state is published at each tick to a hash key `cortex-{botId}-{gameReplayId}`.
