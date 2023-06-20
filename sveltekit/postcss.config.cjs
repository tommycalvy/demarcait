/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require('autoprefixer');
const postcssOKLabFunction = require('@csstools/postcss-oklab-function');

const config = {
	plugins: [
		postcssOKLabFunction,
		autoprefixer,
	]
};

module.exports = config;
