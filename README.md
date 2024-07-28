# JavaScript Studio ESLint Config

The [sharable eslint config][docs] for all JavaScript Studio projects.

## Install

```bash
❯ npm i @studio/eslint-config -D
```

## Usage

Configure in `eslint.config.js`:

```js
import studio_eslint_config from '@studio/eslint-config';

export default [
  ...studio_eslint_config,
  {
    /* Project specific overrides */
  }
];
```

This configuration works great with [`@studio/tsconfig`][tsconfig].

**Pro tip™:** Check out [eslint_d][] for faster editor integration.

## License

MIT

<div align="center">Made with ❤️ on 🌍</div>

[docs]: http://eslint.org/docs/developer-guide/shareable-configs
[tsconfig]: https://github.com/javascript-studio/tsconfig
[eslint_d]: https://www.npmjs.com/package/eslint_d
