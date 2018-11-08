// PostCSS plugin imports
import { SRC } from './paths';
import { MINIFY } from './args';
import cssnano from 'cssnano';

export default [
    MINIFY ? cssnano() : null,
];
