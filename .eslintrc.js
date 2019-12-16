module.exports = {
  env: {
    browser: true,
    es6: true,
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
  rules: {
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
