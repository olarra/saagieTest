module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  globals: {
    document: true,
    window: true,
    fetch: true
  },
  rules: {
    "class-methods-use-this": [0],
    quotes: [2, "double", {avoidEscape: true}],
    "arrow-parens": [true, "ban-single-arg-parens"],
    "comma-dangle": [2, "always-multiline"],
    "default-case": [0],
    "func-names": [0],
    "function-paren-newline": [0],
    "implicit-arrow-linebreak": [0],
    "import/no-extraneous-dependencies": [0],
    "import/prefer-default-export": [0],
    indent: [1, 2],
    "jsx-a11y/label-has-for": [0],
    "max-len": [1],
    "no-console": [0],
    "no-multiple-empty-lines": [1],
    "no-trailing-spaces": [1],
    "no-underscore-dangle": [0],
    "no-unused-vars": [1],
    "no-use-before-define": [1],
    "react/destructuring-assignment": [0],
    "react/forbid-prop-types": [0],
    "react/jsx-filename-extension": [1, {extensions: [".js", ".jsx"]}],
    "react/jsx-one-expression-per-line": [0],
    "react/prefer-stateless-function": [0],
    "jsx-a11y/label-has-for": [
      2,
      {
        components: ["Label"],
        required: {
          every: ["id"]
        },
        allowChildren: false
      }
    ],
    "jsx-a11y/label-has-associated-control": [0]
  }
};
