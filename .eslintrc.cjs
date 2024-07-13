module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    React: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs, tsconfig.app.json"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "react-compiler",
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    ecmaVersion: "latest",
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "react-compiler/react-compiler": "error",
    "prettier/prettier": ["error"],
    "no-empty-function": "error",
    "no-console": ["warn", { allow: ["error"] }],
    // "no-unused-vars": "error",
    "no-duplicate-imports": "error",
    "no-empty": "error",
    "no-undef": "error",
    "require-await": "error",
    "no-undefined": "error",
    "no-implicit-coercion": "warn",
  },
};