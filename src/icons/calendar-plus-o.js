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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1536 256q52 0 90 38t38 90v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128zm-384-96v288q0 14 9 23t23 9h64q14 0 23-9t9-23v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zm-768 0v288q0 14 9 23t23 9h64q14 0 23-9t9-23v-288q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23zm1152 1504v-1024h-1408v1024h1408zm-640-576h224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-224q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h64q14 0 23 9t9 23v224z' }));;
}