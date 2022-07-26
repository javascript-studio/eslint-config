/*
 * Copyright (c) Maximilian Antoni <max@javascript.studio>
 *
 * @license MIT
 */
'use strict';

module.exports = {

  root: true,

  env: {
    node: true,
    es6: true
  },

  plugins: [
    'mocha',
    'jsdoc'
  ],

  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:jsdoc/recommended'
  ],

  settings: {
    jsdoc: {
      mode: 'typescript',
      preferredTypes: {
        object: 'Object'
      }
    }
  },

  overrides: [{
    files: [
      '**/*.test.js',
      '**/*-test.js',
      '**/*.integration.js'
    ],
    env: {
      mocha: true
    }
  }],

  // Formatting should be handled by prettier.
  rules: {
    // https://github.com/lo1tuma/eslint-plugin-mocha
    'mocha/no-async-describe': 2,
    'mocha/no-exclusive-tests': 2,
    'mocha/no-identical-title': 2,
    'mocha/no-return-and-callback': 2,
    'mocha/prefer-arrow-callback': 2,

    // https://github.com/gajus/eslint-plugin-jsdoc
    'jsdoc/no-undefined-types': 'error',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-property-description': 'off',
    'jsdoc/check-indentation': 'warn',
    'jsdoc/check-line-alignment': 'warn',
    'jsdoc/require-hyphen-before-param-description': 'warn',

    // https://github.com/mysticatea/eslint-plugin-node
    'node/handle-callback-err': 2,
    'node/no-callback-literal': 2,
    'node/no-new-require': 2,
    'node/global-require': 2,
    'node/no-mixed-requires': 2,
    'node/no-sync': 2,
    'node/prefer-global/buffer': 2,
    'node/prefer-global/console': 2,
    'node/prefer-global/process': 2,
    'node/prefer-global/text-decoder': 2,
    'node/prefer-global/text-encoder': 2,
    'node/prefer-global/url-search-params': 2,
    'node/prefer-global/url': 2,
    // node default tweaks
    'node/no-unpublished-require': 0, // fails for @sinonjs/referee-sinon
    'node/no-missing-require': [2, {
      'tryExtensions': ['.js', '.json']
    }],
    'node/shebang': 0,
    'no-process-exit': 0,

    // eslint default tweaks
    'no-unused-vars': [2, { args: 'after-used', argsIgnorePattern: '^_' }],

    // Possible Errors (not in recommended)
    'no-template-curly-in-string': 2,
    'no-unreachable-loop': 2,
    'no-useless-backreference': 2,
    'require-atomic-updates': 2,

    // Best Practices (not in recommended)
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'complexity': 2,
    'consistent-return': 2,
    'curly': 2,
    'default-case': 2,
    'default-case-last': 2,
    'default-param-last': 2,
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-constructor-return': 2,
    'no-else-return': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-restricted-properties': 2,
    'no-return-assign': 2,
    'no-return-await': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-return': 2,
    'no-void': 2,
    'prefer-promise-reject-errors': 2,
    'prefer-regex-literals': 2,
    'radix': 2,
    'require-await': 2,
    'yoda': 2,
    'strict': 2,

    // Variables
    'no-label-var': 2,
    'no-restricted-globals': 2,
    'no-shadow': 2,
    'no-use-before-define': [2, "nofunc"],

    // Stylistic Issues
    'comma-dangle': 2,
    'max-depth': 2,
    'max-nested-callbacks': 2,
    'new-cap': 2,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-lonely-if': 2,
    'no-new-object': 2,
    'no-unneeded-ternary': 2,
    'semi': 2,

    // ECMAScript 6
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-spread': 2,
    'prefer-template': 2
  }
};
