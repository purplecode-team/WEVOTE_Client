module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
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
    'import/extensions': [
      0,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none'],
        allowSeparatedGroups: false,
      },
    ],
  },
};
