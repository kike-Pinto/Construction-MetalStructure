// import globals from 'globals'
// import pluginJs from '@eslint/js'
// import pluginReact from 'eslint-plugin-react'

// export default [
//   { files: ['**/*.{js,mjs,cjs,jsx}'] },
//   { languageOptions: { globals: globals.browser } },
//   pluginJs.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ]

import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: '@babel/eslint-parser', // Opcional: Si estás usando Babel
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Desactiva la regla que requiere React en el scope
    },
    settings: {
      react: {
        version: 'detect', // Detecta automáticamente la versión de React
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
]
