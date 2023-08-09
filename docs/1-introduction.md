---
title: Introduction

---


# Generally Genius (GG) Bot Framework

[Generals.io (GIO)](https://generals.io/) is a fast-paced real-time strategy game with imperfect information within a 2D grid world. Players expand their land and battle with enemies in attempt to capture each others' generals. Capturing an opponent's general gives a player full control of their territory.

GIO presents an excellent testbed for AI agents through its simple set of action (up, down, left, right) in a complex state space. A gameplay supports up to 12 players, which makes it particularly challenging to select an appropriate strategy.

We present an agent development and data collection framework for GIO:
- highly modular framework using [microservices architecture](https://microservices.io/)
- language agnostic - use anything with a [Redis client](https://redis.io/resources/clients/)
- supports rapid development and testing of AI agents
- uses [Redis](https://redis.io/) message broker for all communication
- enables real-time data collection and analysis of agent performance
- includes example notebooks ([here](https://github.com/CorsairCoalition/docs/blob/main/gg-analysis.ipynb) and [DeepNote](https://deepnote.com/workspace/insights-island-2232debf-8efe-49d0-80d9-20d155a36301/project/generalsio-analysis-51d1567e-7054-4223-9aa2-98354e1dc291/notebook/fetch-and-plot-f69012bef9f04e27aae6a600cd811276)) for interactive data analysis


## Support

- [Discord: generals.io](https://discord.com/invite/QP63V5Y) -> #botting

# Architecture

## Components

- [CommanderCortex](https://github.com/CorsairCoalition/CommanderCortex) - UI to control and monitor bots
- [SergeantSocket](https://github.com/CorsairCoalition/SergeantSocket) - IO module to relay data between game server and backend
- [ArmadaAssault](https://github.com/CorsairCoalition/ArmadaAssault) - bot components that generate action recommendations
- [StrategySentinel](https://github.com/CorsairCoalition/StrategySentinel) - bot component that selects appropriate action
- [ReplayRanger](https://github.com/CorsairCoalition/ReplayRanger) -  replay GIO game events on Redis for bot development
- [Flobot](https://github.com/CorsairCoalition/Flobot) - highly capable bot that serves as a baseline adversary for testing

## Framework Design

![Framework Architecture](/img/gg-architecture.png)

# User Interface

![Commander Cortex](/img/commandercortex.png)
