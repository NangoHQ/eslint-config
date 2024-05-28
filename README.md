# @nangohq/eslint-config

A reusable eslint config for your CLI installation

```sh
npm i -D @nangohq/eslint-config
````

```js
// Basic linter
{
    "extends": [
        "@nangohq/eslint-config/base"
    ]
}

// Strict
{
    "extends": [
        "@nangohq/eslint-config/base",
        "@nangohq/eslint-config/strict"
    ]
}
```

## How to release?

```sh
npm publish
```
