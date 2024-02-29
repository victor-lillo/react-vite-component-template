# react-vite-component-template

Template for building a **React component library**, with **Vite**, **TypeScript** and **Storybook**.

## 🤖 Scripts

|      Script       | Function                                                |
| :---------------: | ------------------------------------------------------- |
|      `build`      | Build the `dist`, after checking types with TypeScript. |
|    `storybook`    | Starts a Storybook development server.                  |
| `build-storybook` | Builds the Storybook `dist`.                            |
|      `lint`       | Lint the project with `Eslint`.                         |
|    `lint:fix`     | Lint and fix the project with `Eslint`.                 |
|     `format`      | Check the project format with `Prettier`.               |
|   `format:fix`    | Format the project code with `Prettier`.                |
|    `stylelint`    | Lint the styles code with `Stylelint`.                  |
|  `stylelint:fix`  | Lint and fix the styles code with `Stylelint`.          |

## 🏛️ Exposing library entry points

Remember to align `fileName` value in `lib` object within `vite.config.ts`...

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

## 🌐 Exposing types entry point

If you modify the structure or naming, update they `types` key in `package.json`.

```json
"types": "./dist/main.d.ts",
```
