# JavaScript Studio ESLint Config

The [sharable eslint config][docs] for all JavaScript Studio projects.

## Install

```bash
$ npm install @studio/eslint-config eslint eslint-plugin-mocha eslint-plugin-jsdoc eslint-plugin-node --save-dev
```

## Usage

Make sure this is in your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@studio"
  }
}
```

This configuration works great with [`@studio/tsconfig`][tsconfig].

__Pro tip™:__ Check out [eslint_d][] for faster editor integration.

## License

MIT

<div align="center">Made with ❤️ on 🌍</div>

[docs]: http://eslint.org/docs/developer-guide/shareable-configs
[tsconfig]: https://github.com/javascript-studio/tsconfig
[eslint_d]: https://www.npmjs.com/package/eslint_d
