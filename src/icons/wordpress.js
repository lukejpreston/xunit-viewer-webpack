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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M127 896q0-163 67-313l367 1005q-196-95-315-281t-119-411zm1288-39q0 19-2.5 38.5t-10 49.5-11.5 44-17.5 59-17.5 58l-76 256-278-826q46-3 88-8 19-2 26-18.5t-2.5-31-28.5-13.5l-205 10q-75-1-202-10-12-1-20.5 5t-11.5 15-1.5 18.5 9 16.5 19.5 8l80 8 120 328-168 504-280-832q46-3 88-8 19-2 26-18.5t-2.5-31-28.5-13.5l-205 10q-7 0-23-.5t-26-.5q105-160 274.5-253.5t367.5-93.5q147 0 280.5 53t238.5 149h-10q-55 0-92 40.5t-37 95.5q0 12 2 24t4 21.5 8 23 9 21 12 22.5 12.5 21 14.5 24 14 23q63 107 63 212zm-506 106l237 647q1 6 5 11-126 44-255 44-112 0-217-32zm661-436q95 174 95 369 0 209-104 385.5t-279 278.5l235-678q59-169 59-276 0-42-6-79zm-674-527q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zm0 1751q173 0 331.5-68t273-182.5 182.5-273 68-331.5-68-331.5-182.5-273-273-182.5-331.5-68-331.5 68-273 182.5-182.5 273-68 331.5 68 331.5 182.5 273 273 182.5 331.5 68z' }));;
}