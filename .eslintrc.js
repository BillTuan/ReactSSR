module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  parser: "babel-eslint",
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx"]
      }
    ]
  }
};
