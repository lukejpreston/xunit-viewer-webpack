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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M640 1082v70q0 42-39 59-13 5-25 5-27 0-45-19l-512-512q-19-19-19-45t19-45l512-512q29-31 70-14 39 17 39 59v69l-397 398q-19 19-19 45t19 45zm1152 38q0 58-17 133.5t-38.5 138-48 125-40.5 90.5l-20 40q-8 17-28 17-6 0-9-1-25-8-23-34 43-400-106-565-64-71-170.5-110.5t-267.5-52.5v251q0 42-39 59-13 5-25 5-27 0-45-19l-512-512q-19-19-19-45t19-45l512-512q29-31 70-14 39 17 39 59v262q411 28 599 221 169 173 169 509z' }));;
}