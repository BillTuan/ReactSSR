module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
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
