# @jxa/run

Run JXA code and get result.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install @jxa/run

Requirement:

- macOS 10.10 or later.

## Usage

### `export declare function run<R>(jxaCodeFunction: (...args: any[]) => void, ...args: any[]): Promise<R>`

Illustration of usage

```js
const resultPromise = run(JSXFn, argumentsOfJSXFn);
```

- `JSXFn`: This function is run as JXA.
    - :memo: This `JSXFn` is serialized(`toString`) and pass to JXA environment.
    - :waring: **Warning:** function cannot close over variables in a parent's scope.
    - Pass data as arguments explicitly instead. 
- `argumentsOfJSXFn`: An arguments of `JSXFn`

**OK:**

```ts
// OK
(async () => {
    // `name` is "nodejs"
    const result = await run(name => {
        return "Hello there, " + name + "!"
    }, "nodejs");
    assert.strictEqual(result, "Hello there, nodejs!");
})();
```

**NG:**

```ts
// NG
(async () => {
    const name = "nodejs"
    const result = await run(name => {
        return "Hello there, " + name + "!"; // can not access to `name` from JXA enviroment
    });
    assert.strictEqual(result, "Hello there, nodejs!");
})();
```

## Example

```ts
(async () => {
    const result = await run(
        // run this function as JXA code
        () => {
            return Application("System Events")
                .currentUser()
                .name()
        }
    );
    assert.strictEqual(result, process.env.USER);
})();
```

## Changelog

See [Releases page](https://github.com/JXA-userland/JXA/releases).

## Running tests

    yarn test

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


## Related

- [wtfaremyinitials/osa2: Interact with Apple's Open Scripting Architecture in node.js](https://github.com/wtfaremyinitials/osa2 "wtfaremyinitials/osa2: Interact with Apple's Open Scripting Architecture in node.js")
- [sindresorhus/run-jxa: Run JXA code and get the result](https://github.com/sindresorhus/run-jxa "sindresorhus/run-jxa: Run JXA code and get the result")

## License

MIT © azu
