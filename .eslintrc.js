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
        project: ["tsconfig.json"],
        createDefaultProgram: true,
        tsconfigRootDir: __dirname,
      },
      rules: {
        "max-len": ["error", { code: 120 }],
      },
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
