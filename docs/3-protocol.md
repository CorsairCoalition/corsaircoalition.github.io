# Network Protocol

## Channels / Topics

The framework uses [Redis](https://redis.io/) message broker for all communication. The following channels are used:

- **command**: Send high-level commands to the bot (e.g. play, stop).
- **state**: Broadcast the current state of the game (e.g. joined, playing, won, lost).
- **gameUpdate**: Broadcast turn-by-turn game update deltas.
- **action**: Actions taken by the bot sent to the IO adapter (game server).
- **recommendation**: Action recommendations to communicate intended actions.
- **deconflict**: Used to prevent multiple instances of a singleton component (e.g. IO adapter).
- **turn**: Clock signal during a game to enable other components to synchronize.
- **discovery**: Discover components for plug-and-play components (currently unused).

## Data Structures

The following data structures are used:

- **Game**: Data types related to the game, such as the current phase and type of game, and the current state of the game.
- **GeneralsIO**: Data types used for Generals.io server communication defined by the game developers.
- **RedisData**: Redis events and persistent data, such as commands, actions, recommendations, and game state.
- **Config**: Bot configuration elements, such as game and Redis settings.

See details for each type in the [types definition file](https://github.com/CorsairCoalition/common/blob/main/src/types.d.ts).


## Persistent Data in Redis

The framework computes the game state at each turn and stores this information persistently in Redis during a game to enable components to access the shared state on demand. The following information is persisted during the game and overwritten when a new game starts.

- `replay_id`: The unique ID of the game used to retrieve the replay data.
- `turn`: The current turn number.
- `width`, `height`, `size`: Dimensions of the game grid.
- `playerIndex`: The player's index.
- `teams`: Team assignments for all players.
- `scores`: Scoreboard of all players.
- `usernames`: List of usernames of all players.
- `chat_room`: Unique ID for the chat room associated with this game.
- `armies`: Location of armies at each tile.
- `ownGeneral`: Location of player's own general.
- `enemyGeneral`: Location of enemy's general.
- `terrain`: The terrain of the game grid.
- `cities`: Location of cities on the game grid.
- `ownTiles`: List of tiles owned by the player.
- `enemyTiles`: List of tiles that belong to other players.
- `discoveredTiles`: List of tiles that have been discovered.

The framework also aggregates turn-by-turn data for later analysis that is maintained after the game ends. The following lists contain aggregated data:

- `scores`: The scores of the players.
- `maxArmyOnTile`: The maximum army anywhere on the map.
- `moveCount`: The count of moves made thus far.
- `replays`: Replay IDs of all games played.


## Performance Considerations

The framework is designed to be highly performant, but several factors can impact performance:

- **Network Latency**: As the framework uses a Redis message broker for communication, network latency can affect the responsiveness of the bot. It is recommended to use a Redis server that is geographically close to the bot and game server.
- **Concurrency**: The framework supports concurrent execution of actions through topic-based channels. However, care must be taken to avoid conflicting actions that can overwhelm the game server.
- **Redis Performance**: The performance of the Redis server directly impacts the performance of the framework. Host Redis on a machine with sufficient memory to ensure minimal latency.
- **AI Complexity**: More complex AI algorithms can take longer to compute actions. Consider the game speed and the impact of the latency on the responsiveness of the bot.
