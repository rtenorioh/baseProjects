module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                '@controlller': '.src/controller',
                '@services': '.src/services'
            }
        }
        ]
    ],
    ignore:[
        '**/*.spec.ts'
    ]
}