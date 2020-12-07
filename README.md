# Human-Backend

As a backend for frontend APP [Human](https://moonyan.github.io/human)

[DEMO](https://owen-human-backend.herokuapp.com/)

## Feature

- Human Born as first stage.
- Scheduler handle human's life cycle each time
  - Born
  - Growing
  - Dead
  - Reborn
- Client query human's stage.

## API

- POST  /human
- GET   /human
- GET   /human/:id

## Skill

- [nestjs-cli](https://nestjs.com/) version 7.5
- [docker image postgres](https://hub.docker.com/_/postgres) version 12.5
- TypeOrm
- Task Scheduling

## Installation

- node 12.18
```bash
$ yarn
```

## Running the app
```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production
$ yarn start:prod
```

## Running the app in Docker

```bash
$ docker-compose up
$ yarn start
```

## Todo
- Fix scheduling issue on Heroku

## Architecture

![](/Image/Human-Backend.svg)