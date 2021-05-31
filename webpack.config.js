const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'pingfest-theme.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer']
                            }
                        }
                    },
                    {loader: 'sass-loader'}
                ],
            },
        ]
    }
};

