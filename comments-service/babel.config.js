module.exports = {
    plugins: [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread",
        [
            "module-resolver",
            {
                alias: {
                    "src": "./src"
                }
            }
        ]
    ],
    presets: [
        [
            "@babel/env",
            {
                targets: {
                    node: "current"
                }
            }
        ],
        "@babel/typescript",
    ]
}