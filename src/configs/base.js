module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "tsconfig.json",
  },
  env: {
    es6: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/recommended",
  ],
  rules: {
    "no-console": 1,
    "no-constant-condition": "off",
    "prettier/prettier": 2,

    // --- Typescript
    // Recommended
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-redundant-type-constituents": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-enum-comparison": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-base-to-string": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],

    // Stylistic
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-empty-function": "warn",

    // Others
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        fixStyle: "separate-type-imports",
      },
    ],

    // --- Import
    "import/extensions": [
      "error",
      "always",
      {
        json: "always",
        js: "always",
        ts: "never",
        ignorePackages: true,
      },
    ],
    "import/no-unresolved": "off",
    "import/no-duplicates": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-empty-named-blocks": "error",
    "import/no-absolute-path": "error",
    "import/no-self-import": "error",
    "import/newline-after-import": "error",
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
  },
};
