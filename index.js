module.exports = {
  "extends": ["airbnb", "prettier"],
  "ignorePatterns": [".css", ".svg"],
  "env": {
    "browser": true,
    "es2021": true
  },
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],
    "no-param-reassign": "off",
    "class-methods-use-this": "off"
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "extensions": [".ts", ".tsx"]
      }
    }
  }
}