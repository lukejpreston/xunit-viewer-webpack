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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1416 647q60 0 107 23 141 63 141 226v177q0 94-23 186l-85 339q-21 86-90.5 140t-157.5 54h-668q-106 0-181-75t-75-181v-401l-239-628q-17-45-17-91 0-106 75-181t181-75q80 0 145.5 45.5t93.5 119.5l17 44v-113q0-106 75-181t181-75 181 75 75 181v261q27-5 48-5 69 0 127.5 36.5t88.5 98.5zm-216-7q-33 0-60.5 18t-41.5 48l-74 163-71 155h55q50 0 90 31.5t50 80.5l154-338q10-20 10-46 0-46-33-79t-79-33zm221 135q-22 0-40.5 8t-29 16-23.5 29.5-17 30.5-17 37l-132 290q-10 20-10 46 0 46 33 79t79 33q33 0 60.5-18t41.5-48l160-352q9-18 9-38 0-50-32-81.5t-82-31.5zm-1165-359q0 22 8 46l248 650v69l102-111q43-46 106-46h198l106-233v-535q0-53-37.5-90.5t-90.5-37.5-90.5 37.5-37.5 90.5v640h-64l-200-526q-14-37-47-59.5t-73-22.5q-53 0-90.5 37.5t-37.5 90.5zm1052 1248q44 0 78.5-27t45.5-70l85-339q19-73 19-155v-91l-141 310q-17 38-53 61t-78 23q-53 0-93.5-34.5t-48.5-86.5q-44 57-114 57h-208v-32h208q46 0 81-33t35-79-31-79-77-33h-296q-49 0-82 36l-126 136v308q0 53 37.5 90.5t90.5 37.5h668z' }));;
}