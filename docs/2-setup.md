# Installation and Setup

## Prerequisites

- [Docker](https://docs.docker.com/engine/install)
- [Docker Compose](https://docs.docker.com/compose/install)

Use the following commands to test:

```sh
docker version
docker compose version
```

## Setup

1. Clone or download this repository.

2. Make a copy of the example configuration file, `config.json.example` and change the `userId`, `username`, and other variables as desired.

```sh
cp config.json.example config.json
sed -i "s/RANDOMLY_GENERATED_STRING/$(openssl rand -base64 12)/" config.json
```

3. Run background services. This command will start Docker containers for the framework components: [SergeantSocket](https://github.com/CorsairCoalition/SergeantSocket), [ArmadaAssault](https://github.com/CorsairCoalition/ArmadaAssault), [Redis](https://redis.io/).

```sh
docker compose up
```

4. Ignore the Redis-related warnings. When you see "READY TO PLAY", continue to the next step.

5. Open another terminal window and navigate to the same directory.

6. Execute the following command:

```sh
docker compose run commander-cortex
```

The Commander Cortex UI should appear. You are now ready to play against other bots or humans.

## Development

1. Get the component that you want to modify and place it in the same directory.
2. Edit `docker-compose.yaml` - replace `image:` with `build:`.
3. Make desired changes and build a fresh image using `docker compose build`.

See [GIO developer documentation](https://dev.generals.io/).

## Testing

- Use the [GIO bot server](https://bot.generals.io/) to create custom games.
- Human against [Flobot](https://github.com/CorsairCoalition/Flobot) (1x speed) - [custom game: floatbot](https://bot.generals.io/games/floatbot)
- Bot against [Flobot](https://github.com/CorsairCoalition/Flobot) (4x speed) - [custom game: cortex](https://bot.generals.io/games/cortex)