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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1408 1600q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-764q0-189-167-189-26 0-56 5-16-30-52.5-47.5t-73.5-17.5-69 18q-50-53-119-53-25 0-55.5 10t-47.5 25v-331q0-52-38-90t-90-38q-51 0-89.5 39t-38.5 89v576q-20 0-48.5-15t-55-33-68-33-84.5-15q-67 0-97.5 44.5t-30.5 115.5q0 24 139 90 44 24 65 37 64 40 145 112 81 71 106 101 57 69 57 140v32h640v-32q0-72 32-167t64-193.5 32-179.5zm128-5q0 133-69 322-59 164-59 223v288q0 53-37.5 90.5t-90.5 37.5h-640q-53 0-90.5-37.5t-37.5-90.5v-288q0-10-4.5-21.5t-14-23.5-18-22.5-22.5-24-21.5-20.5-21.5-19-17-14q-74-65-129-100-21-13-62-33t-72-37-63-40.5-49.5-55-17.5-69.5q0-125 67-206.5t189-81.5q68 0 128 22v-374q0-104 76-180t179-76q105 0 181 75.5t76 180.5v169q62 4 119 37 21-3 43-3 101 0 178 60 139-1 219.5 85t80.5 227z' }));;
}