module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    'no-unused-vars': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': [
      2,
      {
        allow: ['warn', 'error']
      }
    ]
  }
}
