# @jxa/types

TypeScript definition for JXA core.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @jxa/types

## Usage

This library is just TypeScript definition files.
In other words, this library only used for importing.

If you want to modify `global`, see [@jxa/global-type](../global-type).

### Use with custom Application type

`Application` support [generics type](https://www.typescriptlang.org/docs/handbook/generics.html) that return `T & Application`

Example: `GoogleChrome` Application

```ts
import { Application } from "@jxa/types";
import { GoogleChrome } from "./fixtures/GoogleChrome";
// Pass Custom Application type as generics
const chrome = Application<GoogleChrome>("Google Chrome");
const frontWindow: GoogleChrome.Window = chrome.app.windows[0];
```

### Update Core d.ts

1. Update `tools/sdefs/*.sdefes`
2. Update d.ts with follows command:
    
    yarn run dts:update

## Running tests

    yarn test

## Changelog

See [Releases page](https://github.com/JXA-userland/JXA/releases).

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/JXA-userland/JXA/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
