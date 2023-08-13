# Contribution Guide

## Future Work Opportunities

### Offline Play

This framework relies on the Generals.io allowing access the game server. The game engine is not open source and there is no guaranteed availability over the long run. There are several free and open source projects that aim to create a version of the game engine suitable for offline play. [Gennia](https://github.com/GenniaApp/GenniaServer2) is the best available game engine as of this writing. Integration with an offline game engine would allow ML model training and development at scale.

### Reinforcement Learning

Most of the example bots are driven by heuristics. An RL bot can adjusts its moves based on the adversary and terrain, which presents a great research opportunity.

### Adapters or IO modules for other games

Our framework is highly modular. While [SergeantSocket](https://github.com/CorsairCoalition/SergeantSocket) connects directly to the GIO servers, the rest of the framework is decoupled from the data format and inner workings GIO. Any map-based game that follows similar rules can be played using this framework by developing an IO module (adapter) for that game.

## Getting Started

See [Setup](/setup) and [Development](/development) sections.

## Support

Join us on [Discord: generals.io](https://discord.com/invite/QP63V5Y) (#botting channel) or contact us through [GitHub](https://github.com/CorsairCoalition).
