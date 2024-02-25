# react-vite-component-template

Vite template for building a React library component. TypeScript, SASS and Storybook.

## Exposing entry points

Remember align `fileName` value in `lib` in `vite.config.ts`...

```js
lib: {
  entry: resolve(__dirname, 'src/main.ts'),
  name: 'MyLib',
  fileName: 'my-lib',
}
```

With `import` and `require` values in `exports`, in `package.json`

```json
"exports": {
  ".": {
    "import": "./dist/my-lib.js",
    "require": "./dist/my-lib.umd.cjs"
  }
}
```
