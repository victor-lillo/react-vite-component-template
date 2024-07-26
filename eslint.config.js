import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactRefresh from 'eslint-plugin-react-refresh'
import eslintConfigPrettier from 'eslint-config-prettier'

// Wait till this is published: https://github.com/storybookjs/eslint-plugin-storybook/pull/156
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    ignorePatterns: ['dist', 'postcss.config.cjs'],
  }
)
