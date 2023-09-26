module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        "project": [
          "tsconfig.json",
          "e2e/tsconfig.json"
        ],
        "createDefaultProgram": true,
        tsconfigRootDir: __dirname,
      },
      rules: {},
    },
    {
      files: ["*.html"],
      extends: [
        "plugin:@angular-eslint/template/recommended",
        "./eslintrc-html-rules",
      ],
    },
  ],
};
