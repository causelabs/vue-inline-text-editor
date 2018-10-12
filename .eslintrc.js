// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    },
    env: {
      browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: [
      'eslint:recommended',
      'plugin:vue/recommended'
    ],
    globals: {
      require: true,
      process: true
    },
    // add your custom rules here
    rules: {
      // allow paren-less arrow functions
      'arrow-parens': 1,
      // allow async-await
      'generator-star-spacing': 0,
      // allow console during development
      'no-console': 0,
      // allow debugger during development
      'no-debugger': 2,
      // do not enforce attribute order
      'vue/attributes-order': 0,
      // do not get picky over indentation
      'vue/html-indent': 0,
      // do not require self-closing tags
      'vue/html-self-closing': 0,
      // allow multiple attributes per line
      'vue/max-attributes-per-line': 0,
      // do not require a default value for properties
      'vue/require-default-prop': 0,
      // do not require a type for properties
      'vue/require-prop-types': 0
    }
  }
  