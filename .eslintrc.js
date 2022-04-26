// .eslintrc.js
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['airbnb-base', 'prettier'],
    parser: '@typescript-eslint/parser',
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json'
            }
        }
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    ignorePatterns: ['node_modules/', 'lib/', 'coverage/'],
    rules: {
        'import/extensions': ['error', 'never'],
        'import/prefer-default-export': 'off',
        'import/first': 'off',
        'linebreak-style': ['error', 'unix'],
        indent: ['error', 4, { SwitchCase: 1, ignoredNodes: ['PropertyDefinition'] }],
        'comma-dangle': ['error', 'never'],
        'class-methods-use-this': 'off',
        semi: ['error', 'always'],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.test.ts',
                    '**/*.test.js',
                    'serverless/**/*.ts',
                    'jest.config.js',
                    'serverless.ts',
                    '.eslintrc.js',
                    'prettier.config.js'
                ]
            }
        ]
    }
};