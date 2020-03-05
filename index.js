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
    'mocha'
  ],

  extends: [
    'eslint:recommended',
    'plugin:mocha/recommended',
    'plugin:prettier/recommended'
  ],

  rules: {
    'mocha/no-hooks-for-single-case': 0,
    'mocha/no-mocha-arrows': 0,
    'mocha/no-pending-tests': 0,
    'mocha/no-skipped-tests': 0,
    'mocha/prefer-arrow-callback': 2,

    "prettier/prettier": ["error", { "singleQuote": true }],

    'arrow-spacing': 2,
    'keyword-spacing': 2,
    'constructor-super': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 1,
    'prefer-const': 1,
    'prefer-spread': 2,
    'prefer-template': 2,

    'array-bracket-spacing': [2, 'never'],
    'block-scoped-var': 2,
    'block-spacing': 2,
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    'consistent-return': 2,
    curly: 2,
    'dot-notation': 2,
    'dot-location': [2, 'property'],
    eqeqeq: 2,
    'handle-callback-err': 2,
    'guard-for-in': 2,
    indent: ['error', 2, {
      FunctionDeclaration: {
        parameters: 2,
        body: 1
      },
      FunctionExpression: {
        parameters: 2,
        body: 1
      }
    }],
    'linebreak-style': [2, 'unix'],
    'new-cap': 2,
    'new-parens': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-catch-shadow': 2,
    'no-console': 0,
    'no-else-return': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': [2],
    'no-extra-bind': 2,
    'no-implied-eval': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-return-assign': 2,
    'no-self-compare': 2,
    'no-spaced-func': 2,
    'no-sync': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef-init': 2,
    'no-unneeded-ternary': 2,
    'no-unused-expressions': 2,
    'no-unused-vars': [2, { args: 'after-used', argsIgnorePattern: '^_' }],
    'no-use-before-define': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-void': 2,
    'object-curly-spacing': [2, 'always'],
    'operator-linebreak': [2, 'before'],
    // 'quotes' adjusted to work well with prettier
    // https://github.com/prettier/eslint-config-prettier#quotes
    // https://eslint.org/docs/rules/quotes
    'quotes': [
      'error',
      'single',
      { 'avoidEscape': true, 'allowTemplateLiterals': false }
    ]
    'quote-props': [2, 'as-needed'],
    radix: 2,
    semi: [2, 'always'],
    'semi-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    strict: [2, 'global'],
    'wrap-iife': [2, 'outside'],
    yoda: 2
  }
};
