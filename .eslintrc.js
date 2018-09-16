module.exports = {
  extends: "airbnb",
  rules: {
    "import/extensions": 0,
    "no-console": 0,
    "no-unused-vars": 1,
    "react/jsx-one-expression-per-line": 0
  },
  env: {
    "jest": true,
    "browser": true
  }
};