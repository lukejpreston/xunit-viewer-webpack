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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1133 1101l352-352q19-19 19-45t-19-45l-352-352q-30-31-69-14-40 17-40 59v160q-119 0-216 19.5t-162.5 51-114 79-76.5 95.5-44.5 109-21.5 111.5-5 110.5q0 181 167 404 10 12 25 12 7 0 13-3 22-9 19-33-44-354 62-473 46-52 130-75.5t224-23.5v160q0 42 40 59 12 5 24 5 26 0 45-19zm531-685v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' }));;
}