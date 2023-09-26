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
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["*.ts"],
      rules: {},
    },
  ],
};
