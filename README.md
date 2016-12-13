# JavaScript Studio ESLint Config

The [sharable eslint config][docs] for all JavaScript Studio projects.

## Install

```bash
$ npm install @studio/eslint-config eslint --save-dev
```

## Usage

Make sure this is in your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@studio"
  },
  "devDependencies": {
    "@studio/eslint-config": "^1.0.0",
    "eslint": "^3.3.0"
  }
}
```

__Pro tip™:__ Check out [eslint_d][] for faster editor integration.

## License

MIT

<div align="center">Made with ❤️ on 🌍</div>

[docs]: http://eslint.org/docs/developer-guide/shareable-configs
[eslint_d]: https://www.npmjs.com/package/eslint_d
