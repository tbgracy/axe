module.exports = {
  root: truee,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "@electron-toolkit/eslint-config-ts/recommended",
    "@electron-toolkit/eslint-config-prettier",
    "plugin:storybook/recommended",
    "prettier",
  ],
  ignorePatterns: [
    "node_modules",
    "dist",
    "out",
    ".eslintrc.cjs",
    ".gitignore",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
