var ManifestPlugin = require('webpack-manifest-plugin');

// vue.config.js
module.exports = {
    configureWebpack: {
        output: {
            libraryExport: 'default'
        },
        plugins:[
            // new ManifestPlugin()
        ],
        externals: {
            'axios': 'axios',
            'moment': 'moment',
            'popper.js': 'popper.js'
        }
    },
    pages: {
        index: {
            // entry for the page
            entry: './src/main.js',
            // the source template
            template: './public/index.html',
            // the output filename
            filename: 'index.html'
        }
    },
    publicPath: '/',
    outputDir: './dist',
    devServer: {
        
    }
};
