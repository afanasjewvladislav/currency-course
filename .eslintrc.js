// https://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    browser: true,
    es6: true,
    "react-native/react-native": true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    parserOptions: {
      parser: 'babel-eslint'
    },
  },
  plugins: [
    'jest',
    'react',
    "react-native",
  ],
  rules: {
    'import/extensions': 'never',
     "react-native/no-unused-styles": 2,
     "react-native/split-platform-components": 2,
     "react-native/no-inline-styles": 2,
     "react-native/no-color-literals": 2,
     "react-native/no-raw-text": 2,
     "react-native/no-single-element-style-arrays": 2,
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-consistent-return': 'off',
      'no-console': 'off',
      'no-prototype-builtins': 'off',
      'no-param-reassign': ["error", {
        "props": false,
      }],
      'arrow-parens': ["error", "as-needed"],
  },
};
