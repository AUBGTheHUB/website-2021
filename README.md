# The HUB Fullstack Website

## Dependencies
For the whole project you need:
- [NodeJS](https://nodejs.dev)
- [Yarn](https://yarnpkg.com)

## Project Structure
```
.
└── packages
    ├── api
    │   └── src
    │       ├── controllers
    │       ├── models
    │       └── routes
    └── web
        ├── public
        └── src
```
Essentially the API package is the backend of the website which uses `ExpressJS` and `MongoDB` and is written in Typescript.
The Web package includes the frontend of the website which utilizes `ReactJS` and is also written in Typescript.

---
## Setup
To install all dependencies, simply run `yarn` in the root directory of the project.
For the API package, you need to have a `.env` file containing the needed environmental variables for the backend to work. (Needs to be located in `packages/api/src`)

---
## Useful Yarn commands
**NOTE**: These are package specific commands, so for example, `cd` into the `packages/api` directory to run the API specific commands.
### API Package
For linting or autimatically formatting your code according to the style guide, you can use `yarn lint` and `yarn format` respectively.
To run a dev environment, you can use `yarn start:dev`.
### Web Package
Same as the API, `yarn lint` and `yarn lint --fix` are available. You also have access to `yarn start` and `yarn test` which should be pretty self-explanatory.

---
### Setting up your editor
#### VS Code
For convenience, you should get the following extensions.
- ESLint (`dbaeumer.vscode-eslint`)
- EditorConfig for VS Code (`editorconfig.editorconfig`)
- Prettier ESLint (`rvest.vs-code-prettier-eslint`)

You can also get some packages for ES6 snippets or anything else you need.
