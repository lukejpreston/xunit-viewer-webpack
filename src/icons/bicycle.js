import React from 'react'

    export default function anonymous(params
/**/) {
var evalColor = function () {
    if (typeof params.color === 'function') {
        return params.color;
    } else {
        return function () {
            return params.color;
        };
    }
}();
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M506 1152h-314q-40 0-57.5-35t6.5-67l188-251q-65-31-137-31-132 0-226 94t-94 226 94 226 226 94q115 0 203-72.5t111-183.5zm-186-128h186q-18-85-75-148zm480 0l288-384h-480l-99 132q105 103 126 252h165zm1120 64q0-132-94-226t-226-94q-60 0-121 24l174 260q15 23 10 49t-27 40q-15 11-36 11-35 0-53-29l-174-260q-93 95-93 225 0 132 94 226t226 94 226-94 94-226zm128 0q0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-97 39.5-183.5t109.5-149.5l-65-98-353 469q-18 26-51 26h-197q-23 164-149 274t-294 110q-185 0-316.5-131.5t-131.5-316.5 131.5-316.5 316.5-131.5q114 0 215 55l137-183h-224q-26 0-45-19t-19-45 19-45 45-19h384v128h435l-85-128h-222q-26 0-45-19t-19-45 19-45 45-19h256q33 0 53 28l267 400q91-44 192-44 185 0 316.5 131.5t131.5 316.5z' }));;
}