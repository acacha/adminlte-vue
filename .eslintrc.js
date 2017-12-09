module.exports = {
    root: true,
    extends: 'standard',
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    plugins: [
        'html',
        'standard',
        'promise',
        'you-dont-need-lodash-underscore'
    ],
    rules: {
        'you-dont-need-lodash-underscore/for-each': 1,
        'you-dont-need-lodash-underscore/concat': 1
    }
};