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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1632 1472q0 26-19 45t-45 19h-462q1 17 6 87.5t5 108.5q0 25-18 42.5t-43 17.5h-320q-25 0-43-17.5t-18-42.5q0-38 5-108.5t6-87.5h-462q-26 0-45-19t-19-45 19-45l402-403h-229q-26 0-45-19t-19-45 19-45l402-403h-197q-26 0-45-19t-19-45 19-45l384-384q19-19 45-19t45 19l384 384q19 19 19 45t-19 45-45 19h-197l402 403q19 19 19 45t-19 45-45 19h-229l402 403q19 19 19 45z' }));;
}