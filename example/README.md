# Example

A example code for `@jxa` packages. 

## Usage

```ts
import "@jxa/global-type";
import "@jxa/global-type";
import { run } from "@jxa/run";

/**
 * get safari version
 * This function execute JXA code
 */
export const safariVersion = () => {
    return run(() => {
        const Safari = Application("Safari");
        return Safari.version();
    });
};

/**
 * get current mac system user
 * This function execute JXA code
 */
export const currentUserName = () => {
    return run(() => {
        const sys = Application("System Events");
        return sys.currentUser().name();
    });
};

// This main is just a Node.js code
export const example = async () => {
    const version = await safariVersion();
    const userName = await currentUserName();
    return `User: ${userName}, Safari: ${version}`;
};
```

## Run example

```shell-session
yarn 
yarn run build
node lib/cli.js
```

## Changelog

See [Releases page](https://github.com/JXA-userland/JXA/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

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
