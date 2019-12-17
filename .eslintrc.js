module.exports = {
  env: {
    browser: true,
    es6: true,
    "react-native/react-native": true,
  },
  extends: [
    'eslint-config-react-native',
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
  ],
  settings: {
    'react-native/style-sheet-object-names': ['EStyleSheet', 'OtherStyleSheet', 'PStyleSheet']
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-consistent-return': 'off',
    'no-console': 'off',
    'no-prototype-builtins': 'off',
    'no-param-reassign': ["error", {
      "props": false,
    }],
    'arrow-parens': ["error", "as-needed"],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
  },
};
