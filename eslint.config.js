/*
 * Copyright (c) Maximilian Antoni <max@javascript.studio>
 *
 * @license MIT
 */
import js from '@eslint/js';
import globals from 'globals';
import plugin_n from 'eslint-plugin-n';
import plugin_jsdoc from 'eslint-plugin-jsdoc';
import plugin_mocha from 'eslint-plugin-mocha';
import rules from './lib/rules.js';

export default [
  js.configs.recommended,
  plugin_n.configs['flat/recommended'],
  plugin_jsdoc.configs['flat/recommended'],
  {
    settings: {
      jsdoc: {
        mode: 'typescript',
        preferredTypes: {
          object: 'Object'
        }
      }
    },

    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.es5,
        ...globals.node
      }
    },

    rules
  },
  {
    files: ['**/*.test.js', '**/*-test.js', '**/*.integration.js'],

    plugins: {
      mocha: plugin_mocha
    },

    languageOptions: {
      globals: {
        ...globals.mocha
      }
    },

    rules: {
      // https://github.com/lo1tuma/eslint-plugin-mocha
      'mocha/no-async-describe': 2,
      'mocha/no-exclusive-tests': 2,
      'mocha/no-identical-title': 2,
      'mocha/no-return-and-callback': 2,
      'mocha/prefer-arrow-callback': 2
    }
  }
];
