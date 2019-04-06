module.exports = {
  "package.json": ["yarn lint:prettier", "git add"],
  "*.scss": ["yarn lint:stylelint", "yarn lint:prettier", "git add"],
  "*.md": ["yarn lint:markdownlint", "yarn lint:prettier", "git add"],
  "*.{png,jpeg,jpg,gif,svg}": ["imagemin-lint-staged", "git add"]
};
