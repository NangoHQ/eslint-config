module.exports = {
  extends: [
    "plugin:@typescript-eslint/strict",
    "plugin:@typescript-eslint/strict-type-checked",
  ],
  rules: {
    // --- Typescript
    // Recommended
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-unsafe-enum-comparison": "error",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowNumber: true,
        allowBoolean: true,
      },
    ],

    // Strict
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/only-throw-error": "error",
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      {
        ignoreVoidOperator: true,
        ignoreArrowShorthand: true,
      },
    ],

    // Stylistic
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-empty-function": "error",
  },
};
