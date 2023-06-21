/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require('autoprefixer');
const postcssOKLabFunction = require('@csstools/postcss-oklab-function');
const postcssMixins = require('postcss-mixins');

const config = {
	plugins: [
		postcssOKLabFunction,
		postcssMixins,
		autoprefixer,
	]
};

module.exports = config;
