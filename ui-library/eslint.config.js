import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'indent': ['error', 2],
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      '@typescript-eslint/no-explicit-any': 'error'
    }
  }
)