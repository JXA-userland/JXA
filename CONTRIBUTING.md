# CONTRIBUTING

This contributing guide is how to development `@jxa` packages.

This repository is monorepo using [lerna/lerna: A tool for managing JavaScript projects with multiple packages.](https://github.com/lerna/lerna).

## Requirement

- [Yarn](https://yarnpkg.com/docs/install)
- Node.js LTS

## Installation for development

```shell-session
yarn install
yarn run bootstrap
```

## Tests

Run all tests of packages by following command:

```shell-session
yarn test
```

## Release Flow

1. Version up each packages
2. Relase each packages

```
npm run versionup
npm run release
```