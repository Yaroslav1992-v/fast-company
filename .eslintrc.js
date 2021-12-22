module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "react/prop-types": ["error"],
        indent: ["error", 4],
        "multiline-ternary": "off",
        semi: [2, "always"],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        "padded-blocks": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        quotes: ["error", "double", { allowTemplateLiterals: true }]
    }
};
