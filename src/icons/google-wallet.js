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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M602 587q19 61 31 123.5t17 141.5-14 159-62 145q-21-81-67-157t-95.5-127-99-90.5-78.5-57.5-33-19q-62-34-81.5-100t14.5-128 101-81.5 129 14.5q138 83 238 177zm325-287q11 25 20.5 46t36.5 100.5 42.5 150.5 25.5 179.5 0 205.5-47.5 209.5-105.5 208.5q-51 72-138 72-54 0-98-31-57-40-69-109t28-127q60-85 81-195t13-199.5-32-180.5-39-128-22-52q-31-63-8.5-129.5t85.5-97.5q34-17 75-17 47 0 88.5 25t63.5 69zm321 669q-17 160-72 311-17-131-63-246 25-174-5-361-27-178-94-342 114 90 212 211 9 37 15 80 26 179 7 347zm272-873q9 17 23.5 49.5t43.5 117.5 50.5 178 34 227.5 5 269-47 300-112.5 323.5q-22 48-66 75.5t-95 27.5q-39 0-74-16-67-31-92.5-100t4.5-136q58-126 90-257.5t37.5-239.5-3.5-213.5-26.5-180.5-38.5-138.5-32.5-90-15.5-32.5q-34-65-11.5-135.5t87.5-104.5q37-20 81-20 49 0 91.5 25.5t66.5 70.5z' }));;
}