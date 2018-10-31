import fs from 'fs';
import cssnano from 'cssnano';
import pkg from "./package.json";
import { kebabCase } from 'lodash';
import { camelCase } from 'lodash';
import { upperFirst } from 'lodash';
import vue from 'rollup-plugin-vue';
import json from 'rollup-plugin-json';
import alias from 'rollup-plugin-alias';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import replace from 'rollup-plugin-replace';
import progress from 'rollup-plugin-progress';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import rootImport from 'rollup-plugin-root-import';
import postcss from 'rollup-plugin-postcss';

// The type of package Rollup should create
const PACKAGE_FORMAT = 'umd';

// The directory of the package source code files
const SRC = `${__dirname}/src/`;

// The directory to ouput the compiled files
const DIST = `${__dirname}/dist/`;

// The main.js or entry point of your package
const MAINJS = `${SRC}main.js`;

// The base filename of the compiled files (no ex)
const FILENAME = kebabCase(pkg.name);

// This is global variable used in UMD packages
const NAMESPACE = upperFirst(camelCase(pkg.name));

// The node_modules directory path
const NODE_MODULES = `${__dirname}/node_modules/**`;

// The options for the serve() plugin
const SERVE_OPTIONS = {
    open: true,
    port: 10002,
    contentBase: './',
    host: 'localhost',
    historyApiFallback: true
};

// The options for the watch plugin
const WATCH_OPTIONS = {
    include: `${SRC}**`,
    port: 35730
};

// The options for the livereload plugin (undefined or object).
const LIVERELOAD_OPTIONS = {
    watch: SRC,
    port: 35730
};

// Define the list of output globals
const OUTPUT_GLOBALS = {
    'vue': 'Vue',
    'axios': 'axios',
    'moment': 'moment',
    'popper.js': 'popper',
    'bootstrap': 'bootstrap'
};

// Define an array of external packages to not include in the bundle
const EXTERNAL = [
    'axios',
    'bootstrap',
    'moment',
    'popper.js',
    'vue'
];

// Define the plugins used for the rollup process
const plugins = [
    progress(),
    replace({
        'process.env.NODE_ENV': JSON.stringify( process.env.ROLLUP_WATCH == 'true' ? 'development' : 'production' ),
        'process.env.SERVE_OPTIONS': JSON.stringify(SERVE_OPTIONS),
        'process.env.LIVERELOAD_OPTIONS': JSON.stringify(LIVERELOAD_OPTIONS)
    }),
    json(),
    alias({
        resolve: ['.js', '.vue'],
        '@': `${SRC}`,
        'moment': 'moment/src/moment'
    }),
    rootImport({
        root: SRC,
        useEntry: 'prepend',
        extensions: ['.vue', '.js']
    }),
    eslint(),
    vue({
        scss: {
            indentedSyntax: false
        },
        css: function(style, styles, compiler) {
            fs.writeFileSync(`${DIST}${FILENAME}.css`, style);
        }
    }),
    postcss({
        extract: `${DIST}${FILENAME}.css`,
        plugins: [
            cssnano()
        ]
    }),
    babel({
        exclude: NODE_MODULES
    }),
    resolve({
        main: true,
        jsnext: true,
        browser: true,
        extensions: [ '.js', '.vue']
    }),
    commonjs({
        include: NODE_MODULES
    }),
    globals(),
    builtins()
];

/*
postcss({
plugins: [],
extensions: ['.scss', '.sass', '.css' ]
}),
*/

// Add the serve/livereload plugins if watch argument has been passed
if(process.env.ROLLUP_WATCH == 'true') {
    plugins.push([
        serve(SERVE_OPTIONS),
        livereload(LIVERELOAD_OPTIONS)
    ]);
}

// Export the config object
export default [{
    input: MAINJS,
    output: {
        name: NAMESPACE,
        format: PACKAGE_FORMAT,
        file: `${DIST}${FILENAME}.js`,
        sourcemap: (process.env.ROLLUP_WATCH ? 'inline' : true),
        globals: OUTPUT_GLOBALS,
        exports: 'named',
    },
    watch: WATCH_OPTIONS,
    external: EXTERNAL,
    plugins: plugins
}, {
    input: MAINJS,
    output: {
        name: NAMESPACE,
        format: 'es',
        file: `${DIST}${FILENAME}.es.js`,
        sourcemap: (process.env.ROLLUP_WATCH ? 'inline' : true),
        globals: OUTPUT_GLOBALS,
        exports: 'named',
    },
    watch: WATCH_OPTIONS,
    external: EXTERNAL,
    plugins: plugins
}];
