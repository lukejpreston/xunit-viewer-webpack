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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1755 453q37 37 37 90t-37 91l-401 400 150 150-160 160q-163 163-389.5 186.5t-411.5-100.5l-362 362h-181v-181l362-362q-124-185-100.5-411.5t186.5-389.5l160-160 150 150 400-401q38-37 91-37t90 37 37 90.5-37 90.5l-400 401 234 234 401-400q38-37 91-37t90 37z' }));;
}