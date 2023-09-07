module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jest-dom/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh", "testing-library"],
  rules: {
    // "react-refresh/only-export-components": [
    //   "warn",
    //   { allowConstantExport: true },
    // ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "{}": false,
        },
        extendDefaults: true,
      },
    ],
    // "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    // "no-empty-pattern": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/non-nullable-type-assertion-style": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    // "@typescript-eslint/no-confusing-void-expression": "warn",
  },
};
