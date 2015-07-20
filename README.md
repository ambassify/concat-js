# Concat JS [![Circle CI](https://circleci.com/gh/bubobox/concat-js/tree/master.svg?style=svg&circle-token=512452848019d7bf350ad30579e6930414a2fd5f)](https://circleci.com/gh/bubobox/concat-js/tree/master)

Library that we use to concat class names in our React.js applications.

## Why

[Read this issue](https://github.com/bubobox/components/issues/28)

## Usage
	
	//first require the package
	var concat = require('../src/index.js');
	
	//just use it as a function
	concat('hello', null, 'world');
