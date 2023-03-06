module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'eol-last': 0,
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    'object-curly-newline': 'off',
  },

};
