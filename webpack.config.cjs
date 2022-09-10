const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {

        // source path. 'bundle' can be referenced as [name] in the output: section
        bundle: path.resolve(__dirname, 'src/index.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),

        // adding [contenhash] helps with caching as it adds a unique has to each bundle name
        filename: '[name]-[contenthash].js',

        // remove previous bundles when building a new one
        clean: true,

        // keep asset name and extension as is, otherwise webpack will make it look wierd
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,

        // watches changes in other non tracked files types such as .html etc
        watchFiles: ['src/**/*.html'],

        // open browser when starting the webserver
        open: true,

        // show overlay for errors only and not warning
        client: {
            overlay: {
                errors: true,
                warnings: false,
            }
        },

        // hot reloading
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                // keep asset name and extension as-is
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // resolve these extensions when loading module
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        // generate index.html page from the provided template
        // automatically adds the bundle-<hash>.js script tag to the index.html
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template.html',
        }),
        // copy all files in /pubic folder to /dist/public folder
        // these are exteranlly reference assets, such as images.
        new CopyPlugin({
            patterns: [
                { from: 'public', to: 'public' }
            ]
        }),
        new ESLintPlugin({
            extensions: ['ts', 'tsx', 'js', 'jsx']
        }),
    ]
};
