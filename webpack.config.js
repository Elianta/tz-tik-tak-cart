/* eslint no-undef: "error" */
/* eslint-env node */

const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false,
                                sourceMap: true,
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                sourceMap: true,
                                plugins: () => [
                                    autoprefixer({
                                        browsers: ['>1%', 'last 2 versions']
                                    })
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                // {
                //     test: /\.s?css$/,
                //     use: [
                //         MiniCssExtractPlugin.loader,
                //         {
                //             loader: 'css-loader',
                //             options: {
                //                 sourceMap: true
                //             }
                //         },
                //         {
                //             loader: 'sass-loader',
                //             options: {
                //                 sourceMap: true
                //             }
                //         }
                //     ]
                // }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            })
        ],
        // for convenient debugging due to development
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist'
        }
    };
};

