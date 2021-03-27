module.exports = {
  // 사전 정의된 전역 변수 사용을 정의
  env: {
    browser: true,
    es2021: true,
  },
  // Javascript 언어 옵션
  parser: 'babel-eslint',
  parserOptions: {
    // ECMAScript의 언어 확장 기능
    ecmaFeatures: {
      jsx: true,
    },
    // 사용할 ECMAScript 버전
    ecmaVersion: 12,
    // parser의 export 형태
    sourceType: 'module',
  },
  plugins: ['react'],
  // 추가한 플러그인에서 사용할 규칙. 역순으로 우선
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  // 프로젝트에서 사용하는 규칙. 0:해당 규칙 사용X, 1:경고, 2:오류 (== off/warn/error)
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-indent': 0,
    'react/jsx-wrap-multilines': 0,
    'linebreak-style': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'comma-dangle': 0,
    'object-curly-newline': 0,
    'array-callback-return': 0,
    'arrow-body-style': 0,
    'function-call-argument-newline': 0,
    'function-paren-newline': 0,
    'import/no-duplicates': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'no-unused-vars': 1,
    'prettier/prettier': [2, { endOfLine: 'auto' }],
    'react/jsx-props-no-spreading': 0,
  },
};
