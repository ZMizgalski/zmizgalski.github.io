const typescriptParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const angularPlugin = require('@angular-eslint/eslint-plugin');
const angularTemplateParser = require('@angular-eslint/template-parser');


module.exports = [
    {
        ignores: [
            '.cache/',
            '.angular/',
            '.vscode/',
            'dist/',
            '.git/',
            '.github/',
            'node_modules/',
            '**/*.spec.ts'
        ]
    },
    {
        files: [ '**/*.ts' ],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: [
                    './tsconfig.json',
                    './tsconfig.app.json',
                    './tsconfig.spec.json'
                ]
            }
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            '@angular-eslint': angularPlugin
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...angularPlugin.configs.recommended.rules,
            '@angular-eslint/directive-selector': [
                'error',
                {
                    'type': 'attribute',
                    'prefix': 'zm',
                    'style': 'camelCase'
                }
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    'type': 'element',
                    'prefix': 'zm',
                    'style': 'kebab-case'
                }
            ],
            'eol-last':[
                'error'
            ],
            '@typescript-eslint/consistent-type-definitions': [
                'off'
            ],
            'arrow-parens': [
                'error',
                'as-needed'
            ],
            '@typescript-eslint/array-type': [
                'error',
                {
                    'default': 'array-simple',
                    'readonly': 'array-simple'
                }
            ],
            'indent': [
                'error',
                4,
                { 'MemberExpression': 1 }
            ],
            '@typescript-eslint/no-explicit-any': [
                'error',
                {
                    'fixToUnknown': true
                }
            ],
            'array-bracket-spacing': [
                'error',
                'always',
                {
                    'singleValue': true
                }
            ],
            '@typescript-eslint/no-non-null-assertion': 'off',
            'quotes': [
                'error',
                'single'
            ],
            'semi': [
                'error',
                'always',
                {
                    'omitLastInOneLineClassBody': true
                }
            ],
            'no-multiple-empty-lines': [
                'error',
                {
                    'max': 2,
                    'maxEOF': 1,
                    'maxBOF': 0
                }
            ],
            'comma-dangle': [
                'error',
                'never'
            ],
            '@typescript-eslint/member-ordering': [
                'error',
                {
                    'default': [
                        'signature',
                        'call-signature',
                        'public-decorated-set',
                        'protected-decorated-set',
                        'private-decorated-set',
                        'decorated-set',
                        'public-decorated-get',
                        'protected-decorated-get',
                        'private-decorated-get',
                        'decorated-get',
                        'public-decorated-field',
                        'protected-decorated-field',
                        'private-decorated-field',
                        'decorated-field',
                        'public-static-field',
                        'public-instance-field',
                        'public-abstract-field',
                        'public-field',
                        'protected-static-field',
                        'protected-instance-field',
                        'protected-abstract-field',
                        'protected-field',
                        'private-static-field',
                        '#private-static-field',
                        'private-instance-field',
                        '#private-instance-field',
                        'private-field',
                        '#private-field',
                        'static-field',
                        'instance-field',
                        'abstract-field',
                        'field',
                        'static-initialization',
                        'public-static-get',
                        'public-instance-get',
                        'public-abstract-get',
                        'public-get',
                        'protected-static-get',
                        'protected-instance-get',
                        'protected-abstract-get',
                        'protected-get',
                        'private-static-get',
                        'private-instance-get',
                        '#private-instance-get',
                        '#private-static-get',
                        'private-get',
                        '#private-get',
                        'static-get',
                        'instance-get',
                        'abstract-get',
                        'get',
                        'public-static-set',
                        'public-instance-set',
                        'public-abstract-set',
                        'public-set',
                        'protected-static-set',
                        'protected-instance-set',
                        'protected-abstract-set',
                        'protected-set',
                        'private-static-set',
                        '#private-static-set',
                        'private-instance-set',
                        '#private-instance-set',
                        'private-set',
                        '#private-set',
                        'static-set',
                        'instance-set',
                        'abstract-set',
                        'set',
                        'public-constructor',
                        'protected-constructor',
                        'private-constructor',
                        'constructor',
                        'public-static-method',
                        'public-decorated-method',
                        'public-instance-method',
                        'public-abstract-method',
                        'public-method',
                        'protected-static-method',
                        'protected-decorated-method',
                        'protected-instance-method',
                        'protected-abstract-method',
                        'protected-method',
                        'private-static-method',
                        'private-decorated-method',
                        '#private-static-method',
                        'private-instance-method',
                        '#private-instance-method',
                        'private-method',
                        '#private-method',
                        'static-method',
                        'instance-method',
                        'abstract-method',
                        'decorated-method',
                        'method'
                    ]
                }
            ]
        }
    },
    {
        files: [ '**/*.html' ],
        languageOptions: {
            parser: angularTemplateParser,
        },
        plugins: {
            '@angular-eslint': angularPlugin,
            '@angular-eslint/template': angularPlugin
        }
    }
];
