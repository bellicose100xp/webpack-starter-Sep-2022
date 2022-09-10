module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "commonjs": true,
        "node": true,
        "greasemonkey": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "linebreak-style": ["error", "unix"],
        "semi": ["warn", "always"],
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-explicit-any": "off",
        '@typescript-eslint/no-non-null-assertion': 'off',
    }
};
