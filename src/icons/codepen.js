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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M216 1169l603 402v-359l-334-223zm-62-144l193-129-193-129v258zm819 546l603-402-269-180-334 223v359zm-77-493l272-182-272-182-272 182zm-411-275l334-223v-359l-603 402zm960 93l193 129v-258zm-138-93l269-180-603-402v359zm485-180v546q0 41-34 64l-819 546q-21 13-43 13t-43-13l-819-546q-34-23-34-64v-546q0-41 34-64l819-546q21-13 43-13t43 13l819 546q34 23 34 64z' }));;
}