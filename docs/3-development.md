# Python Bot Development

Below, you will learn how to configure a 1-on-1 match between two python bots. This tutorial assumes that you have completed the [Setup](/setup) instructions. Begin by cloning or downloading the [PyBot repository](https://github.com/CorsairCoalition/PyBot). The remainder of this guide will show you how to update your `docker-compose.yml` and setup your bots' `config.json` files.

```sh
git clone https://github.com/CorsairCoalition/PyBot
```

The directory structure should look like this when you are finished following this guide:
```sh
├── workspace/
│ ├── docs/
│ │ ├── images/
│ │ ├── ...
│ │ └── docker-compose-examples
| | | └── docker-compose.pybot.on.pybot.yml
│ ├── PyBot/
│ │ ├── ggbot/
| | └── example_randombot.py
│ ├── config.pybot1.json
│ ├── config.pybot2.json
│ └── docker-compose.yml
```

## Configuration
You will need to create a config for each bot and reference them in `docker-compose.yml`.

### Bot configuration (config.pybot*.json)
Each bot needs its own configuration file. These config files are in JSON format and provide the bot several important pieces of information, namely how to connect to Redis, unique user Id, unique user name, and the game server URL.

Here is an example configuration from `config.pybot1.json` (c.f. [GitHub](https://github.com/CorsairCoalition/docs/blob/main/config.example.json)):

```json
{
	"gameConfig": {
		"GAME_SERVER_URL": "wss://botws.generals.io/",
		"GAME_WEBAPP_URL": "https://bot.generals.io/",
		"MAX_TURNS": 5000,
		"BOT_ID_PREFIX": "cortex",
		"userId": "RANDOMLY_GENERATED_STRING",
		"username": "[Bot] UNIQUE_DISPLAY_NAME",
		"customGameId": "pybot",
		"customGameSpeed": 4,
		"warCry": [
			"Beep bop blop!",
			"Learn more at CorsairCoalition.github.io"
		]
	},
	"redisConfig": {
		"HOST": "localhost",
		"PORT": 6379,
		"TLS": false,
		"EXPIRATION_TIME": 31536000,
		"USERNAME": "",
		"PASSWORD": ""
	}
}
```

> Note: You must provide a unique `userId` and `username` for each bot! According to the GIO official developer documentation, bot names must start with `[Bot]` and cannot be changed once set.

#### gameConfig section
The game configuration parameters are as follows:
- `GAME_SERVER_URL`: the server to which you are connecting. Unless you use a local server
- `MAX_TURNS`: The GG Framework will terminate the game if it lasts this many turns.
- `BOT_ID_PREFIX`: Redis will store all messages from this bot in a key-value store with this prefix
- `userId`:  The UUID for this bot. This string must be unique across all bots and is paired with a unique username
- `username`: The (unique) bot name displayed during matches on the GIO servers. This MUST begin with the "[Bot] " tag.
- `customGameId`: This is the name of the custom room your bot will join. By default, you can spectate at https://bot.generals.io/games/customGameId
- `customGameSpeed`: An number from \[0.25, 0.5, 0.75, 1, 2, 3, 4]. The server tick rate will be mulitplied by this factor. By default, the servers execute 2 game ticks per second. For instance, if `customGameSpeed` is set to 4, the server will process 8 ticks per second.

> Note: Only the lobby Host can change the custom game speed. If a human joins before a bot, the default game speed (1x) is used. You can adjust this by selecting 'Game' on the lobby screen, and choosing the desired Game Speed.

#### redisConfig section
This section of the config should only be changed if you are connecting to a remote instance of Redis. For local connections, the `USERNAME` and `PASSWORD` fields must be blank (as shown above). These config variables can be overriden using environment variables.

### Configuring Docker services (docker-compose.yml)
[Docker Compose](https://docs.docker.com/get-started/08_using_compose) is a tool that helps define and share multi-container applications. The docker compose file included with the GG Framework defines the services available and with a single command, you can spin up everything, spin up only certain services, or tear it all down.

In the GG Framework, Sergeant-Socket, Commander-Cortex, and Redis are all spun-up according to the configuration in the docker compose file. See `docker-compose.pybot.on.pybot.yml` from the [documentation repository](https://github.com/CorsairCoalition/docs) for an example suitable for running two python bots against one another. Copy it to your working directory and rename to `docker-compose.yml` for convenience.

Although a deep-dive into [Docker Compose file format](https://docs.docker.com/compose/compose-file/) is outside the scope of this guide, a few points are helpful for beginners:
- Unlike other formats that define key:value pairs, [docker compose volumes](https://docs.docker.com/compose/compose-file/05-services/#volumes) use value:key ordering. For instance, the CommanderCortex looks for a `/config.json` (the key), and the services look to `../config.pybot*.json` for its content (the value).
- It is best to run CommanderCortex in a separate terminal, since it is a UI application whose interface would be disturbed by terminal outputs from Redis and SergeantSocket. By adding `profiles: - ui`  to the CommanderCortex services, docker will not start those services when we run `docker compose up`; it will wait until we explicitly use `docker compose run commander-cortex-1` or `docker compose run commander-cortex-2`, which we can do from a separate terminal.

### Testing your configuration
You will now test your configuration by starting a match between a random bot and Flobot.

Assuming your folder structure matches the one above (see [[# Configuring for Development]]), open a terminal, navigate to the `CommanderCortex/docs/` directory, and run the following to start Redis and start one instance of SergeantSocket for each of your bots:
   ```sh
   docker compose up
```
You can safely ignore the Redis-related warnings. When you see `READY TO PLAY`, continue to the next step.

Now run each of the following commands in their own terminal:

1. Terminal 1:
   ```sh
   docker compose run commander-cortex-1
   ```
2. Terminal 2:
   ```sh
   docker compose run commander-cortex-2
   ```

Finally, navigate to the `CorsairCoalition/PyBot/` directory and run the following commands in their own terminals:

3. Terminal 3:
   ```sh
   python example_randombot.py -c config.pybot1.json
   ```

4. Terminal 4:
   ```sh
   python example_flobot.py -c config.pybot2.json
   ```

## Implementing your own bot

Implementing your own bot begins by subclassing PythonBot from ggbot.core.
The only method you **must** override is `do_turn()`.
For example:

```python
from ggbot.core import PythonBot

class MyFirstBot(PythonBot):

	def do_turn(self) -> None:
		# implement your bot's code below
```

You can safely ignore the Redis-related warnings. When you see `READY TO PLAY`, continue to the next step.

Access game state via your bot's `self.game` field. See the source code comments for more details.

To connect your bot to the rest of the framework, you will need to configure it properly. The easiest way to do this is to read in the `config.json`, and there are two utility methods to accomplish this: `ggbot.utils.get_config_from_file(file_path)` designed to help run bots from within an IDE, and `ggbot.utils.get_config_from_cmdline_args()` designed to help run bots from the command line.

### Running from an IDE
The `ggbot.utils.get_config_from_file(file_path)` method uses a path string to read the config file. This is helpful when actively debugging within an IDE.

```python
if __name__ == "__main__":
    config = ggbot.utils.get_config_from_file('config.json')
    MyFirstBot().with_config(config).run()
```

### Running from the terminal
The `ggbot.utils.get_config_from_cmdline_args()` method allows you to specify the path to the config via command line arguments.

```python
if __name__ == "__main__":
    config = ggbot.utils.get_config_from_cmdline_args()
    MyFirstBot().with_config(config).run()
```

Then run your bot from the terminal with:

```sh
python example_randombot.py -c config.json
```

## Example bots
The GG Framework comes with several example bots that can help users get started.
They are defined in several `example_*.py` files, discussed below

### Random Bot (example_randombot.py)
The Random Bot chooses a valid army at random and moves it to a randomly selected adjacent tile. It will issue movements using the `move()` method. For your own bots, know that multiple calls to `move()` can be issued in a single turn, and the moves will be handled in the order they arrive.

### PathFinderBot Bot (example_pathfinderbot.py)
The PathFinder Bot demonstates how to use the multi-target aStar algorithm to obtain a sequence of moves along a path. At regular intervals (every 12 game ticks) it picks its largest army and moves it to a randomly selected tile on the board. It also performs some simple checks to ensure a previous move is not still underway and that it is moving an army with a strength >1.

For convenience, a PythonBot can enqueue the entire path selected by aStar using the `queue_moves()` method. This will treat neighboring tile indices in the list as the start and end of consecutive moves. For instance, `queue_moves([1, 2, 3, 19])` is equivalent to:
```python
move(1,2)
move(2,3)
move(3,19)
```
### Flobot (example_flobot.py)
This is a Python port of [Flobot](https://github.com/CorsairCoalition/Flobot), an example of a much more complex bot. The `do_turn()` method is remarkably simple because its logic is relegated to a `Strategy` class whose `pick_strategy()` method determines which actions to take:

```python
def pick_strategy(bot: 'FloBot'):
	if bot.game.enemy_general != -1: # enemy general is visible!
		Strategy.end_game(bot)
	elif bot.is_infiltrating:
		Infiltrate.infiltrate(bot)
	elif Strategy.is_spread_needed(bot):
		Spread.spread(bot)
	elif bot.game.tick < Strategy.REINFORCEMENT_INTERVAL:
		Strategy.early_game(bot, bot.game.tick)
	else:
		Strategy.mid_game(bot, bot.game.tick)
```

In addition to exploring Flobot's strategy classes (i.e., `Collect`, `Discover`, `Infiltrate`, `RushGeneral`, and `Spread`), new users of the GG Framework should also explore its `Heuristics` and `FloAlgorithm` classes. These classes showcase many ways to interact with the bot's `GameInstance` field via `self.game`.
