/*jshint node: true */
/* global describe, it */
"use strict";

var _ = require('lodash'),
	assert = require('assert'),
	Concat = require('../src/index.js');

describe('Concat::C', function( done ){

	it( 'Concat-JS should concat the classnames and remove null values', function() {
        var result = Concat('hello', null, 'world');
        assert.equal(result, 'hello world');
    });

    it( 'Concat-JS should remove duplicate values', function() {
        var result = Concat('hello', 'hello');
        assert.equal(result, 'hello');
    });

});
