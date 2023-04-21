module.exports = {
  env: {
    browser: false,
    es6: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
    'plugin:mocha/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: '*.test.js',
    }
  ],
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module',
  },
  plugins: ['mocha'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
};
