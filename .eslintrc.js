module.exports = {
  env: {
    es6: "true",
    node: "true"
  },
  extends: "airbnb",
  rules: {
    'no-console': 1,
    'no-unused-vars': [1, {argsIgnorePattern: 'resolve|reject|res|next|^err'}]
  }
}