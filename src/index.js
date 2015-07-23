/**
 * concatter
 * This function is used to merge multiple classes generated by the BEMClassManager
 * We will also remove double classes
 * @return {string}
 */

/*jslint node: true */
/* global define */
"use strict";

;(function (name, context, definition) {
    if (typeof module !== 'undefined' && module.exports) { module.exports = definition( require('lodash') ); }
    else if (typeof define === 'function' && define.amd) { define(['lodash'], definition); }
    else if (typeof exports === 'object' ) { exports = definition( require('lodash') ); }
    else {
        if (typeof context._ === 'undefined') {
            throw "C requires lodash (_) to be present on the root object (usually window).";
        }
        context[name] = definition(context._);
    }
})('C', this, function (_) { // jshint ignore:line

    return function C() {
        var classes = _.reduce(arguments, function (result, c) {

            // Detect objects with their own toString implementation
            if (
                c && typeof c === 'object' && 'toString' in c &&
                typeof c.toString === 'function' &&
                c.toString !== Object.prototype.toString
            ) {
                c = c.toString();
            }

            // Only allow strings from here on out
            if (typeof c !== 'string') {
                return result;
            }

            // Split on spaces and ignore 'false' strings
            var expanded = _.filter(c.split(' '), function (clss) {
                return clss.length > 0 && clss !== 'false';
            });

            return result.concat(expanded);
        }, []);

        classes = _.uniq( classes );

        return classes.join(' ');
    };
});
