import vue from 'rollup-plugin-vue';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify-es';
import { eslint } from "rollup-plugin-eslint";
import progress from 'rollup-plugin-progress';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

// Build config constants defined in ./config.js
import {
    EXTRACT_CSS,
    INJECT_CSS,
    NODE_MODULES,
    MINIFY,
    LIVERELOAD_OPTIONS,
    POSTCSS_PLUGINS,
    SERVE_OPTIONS,
    WATCH
} from './config';

// An array of shared plugin. These will not be instantiated more than once.
const shared = [];

// If the watch constanst is set, then add the serve/livereload plugins
if(WATCH) {
    shared.push(serve(SERVE_OPTIONS));
    shared.push(livereload(LIVERELOAD_OPTIONS));
}

/**
 * Return a function with an array of plugins.Merge the config with the
 * default values.
 *
 * @param  {Object}
 * @return {Array}
 *
 * ```
 * // No config overrides
 * plugin()
 *
 * // With config overrides
 * plugin({
 *     postcss: {
 *         extract: false
 *     }
 * })
 * ```
 */
export default (config = {}) => {
    const plugins = [
        // rollup-plugin-resolve
        resolve(Object.assign({
            main: true,
            jsnext: true,
            browser: true,
            extensions: [ '.js', '.vue']
        }, config.resolve)),

        // rollup-plugin-commonjs
        commonjs(Object.assign({
            include: NODE_MODULES
        }, config.commonjs)),

        // rollup-plugin-vue
        vue(Object.assign({
            css: false
        }, config.vue || config.vuePlugin)),

        // rollup-plugin-postcss
        postcss(Object.assign({
            inject: INJECT_CSS,
            extract: EXTRACT_CSS,
            plugins: POSTCSS_PLUGINS.filter(value => !!value)
        }, config.postcss)),

        // rollup-plugin-eslint
        eslint(Object.assign({
            exclude: '**/*.css'
        }, config.eslint)),

        // rollup-plugin-babel
        babel(Object.assign({
            exclude: NODE_MODULES
        }, config.babel)),

        // rollup-plugin-replace
        replace(Object.assign({
            'process.env.NODE_ENV': JSON.stringify(WATCH ? 'development' : 'production'),
            'process.env.SERVE_OPTIONS': JSON.stringify(SERVE_OPTIONS),
            'process.env.LIVERELOAD_OPTIONS': JSON.stringify(LIVERELOAD_OPTIONS)
        }, config.replace)),

        // rollup-plugin-json
        json(config.json),

        // rollup-plugin-globals
        globals(config.globals),

        // rollup-plugin-builtins
        builtins(config.builtins),

        // rollup-plugin-progress
        progress(config.progress)
    ];

    // If the MINIFY constant is set, then add the uglify plugin.
    if(MINIFY) {
        // rollup-plugin-uglify-es
        plugins.push(uglify(config.uglify));
    }

    return plugins.concat(shared);
};
