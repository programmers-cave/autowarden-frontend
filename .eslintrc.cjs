module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react/recommended",
    "prettier",
  ],
  "ignorePatterns": [".eslintrc.cjs", "vite.config.ts"],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 'latest',
    "sourceType": 'module',
    "project": ['./tsconfig.json', './tsconfig.node.json'],
    "tsconfigRootDir": __dirname,
  },
  "plugins": [
    "@typescript-eslint",
    "react"
  ],
  "rules": {
  }
}
