// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString,n=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol:void 0,l="function"==typeof r?r.toStringTag:"",u=e()?function(t){var e,r,u,f,c;if(null==t)return o.call(t);r=t[l],c=l,e=null!=(f=t)&&n.call(f,c);try{t[l]=void 0}catch(e){return o.call(t)}return u=o.call(t),e?t[l]=r:delete t[l],u}:function(t){return o.call(t)},f=Date.prototype.getDay,c=e();function i(t){return"object"==typeof t&&(t instanceof Date||(c?function(t){try{return f.call(t),!0}catch(t){return!1}}(t):"[object Date]"===u(t)))}function a(){return(new Date).getFullYear()}return function(t){return i(t)?t.getFullYear()===a():t===a()}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isCurrentYear=e();
//# sourceMappingURL=browser.js.map
