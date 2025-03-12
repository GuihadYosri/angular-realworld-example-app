import js from "@eslint/js";
import angular from "@angular-eslint/eslint-plugin";

export default [
  js.configs.recommended,
  angular.configs["recommended"],
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    rules: {
      "@angular-eslint/directive-selector": ["error", { "type": "attribute", "prefix": "app", "style": "camelCase" }],
      "@angular-eslint/component-selector": ["error", { "type": "element", "prefix": "app", "style": "kebab-case" }],
      "@angular-eslint/template/alt-text": "warn",
      "@angular-eslint/no-output-native": "warn"
    },
  },
];

