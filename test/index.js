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

    it( 'Concat-JS should remove all kinds of weird values', function() {
        var result = Concat('hello', '', false, null, {}, undefined, 'false', true, 10, [], { toString: 'test' });
        assert.equal(result, 'hello');
    });

    it( 'Concat-JS should handle objects with toString method', function() {
        var o1 = { toString: function () { return 'hello'; } };

        var O2 = function () { };
        O2.prototype.toString = function() { return 'world'; };
        var o2 = new O2();

        var result = Concat(o1, o2);
        assert.equal(result, 'hello world');
    });

});
