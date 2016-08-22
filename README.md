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
    "@studio/eslint-config": "*",
    "eslint": "^3.3.0"
  }
}
```

[docs]: http://eslint.org/docs/developer-guide/shareable-configs
