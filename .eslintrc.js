module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:prettier/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "prettier"
    ],
    'rules': {
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'no-console': 0,
        'no-unused-vars': 1,
        'no-empty': 1,
        'no-unreachable': 1,
        'no-constant-condition': 1,
        'no-implicit-globals': 1,
        'no-throw-literal': 1,
        'prefer-promise-reject-errors': 1,
        'no-extra-bind': 1,
        'require-atomic-updates': 1,
        'no-template-curly-in-string': 1,
        'no-prototype-builtins': 1,
        'no-misleading-character-class': 1,
        'no-await-in-loop': 1,
        'no-async-promise-executor': 1,
        'no-var': 1,
        'prefer-rest-params': 1,
        'prefer-destructuring': 1,
        'no-useless-call': 1,
        'prefer-spread': 1,
        'no-multi-spaces': 1,
        'no-trailing-spaces': 1,
        "prettier/prettier": "error",
        'eqeqeq': 1,
        'vue/order-in-components': 0,
        'vue/max-attributes-per-line': [2, {
              'singleline': 2,
              'multiline': {
                'max': 2,
                'allowFirstLine': false
              }
        }]
    },
}
