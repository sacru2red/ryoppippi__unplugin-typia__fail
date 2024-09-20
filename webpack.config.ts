// Generated using webpack-cli https://github.com/webpack/webpack-cli
import 'webpack-dev-server'
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import { Configuration } from 'webpack';

const isProduction = process.env.NODE_ENV == 'production';


const config: Configuration = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
};

module.exports = async() => {
    if (isProduction) {
        config.mode = 'production';
        
        if (config.plugins == null) {
            config.plugins = []
        }
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        
    } else {
        config.mode = 'development';
    }
    const dynamicImport = new Function('specifier', 'return import(specifier)');
    const { default: UnpluginTypia }  = await dynamicImport('@ryoppippi/unplugin-typia/webpack')
    if (config.plugins) {
        config.plugins.push(UnpluginTypia())
    }
    return config;
};
