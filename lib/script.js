'use strict';

var _jquery = require('E:\\sources\\PasswordSecurity-Demo\\node_modules\\jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _levenshtein = require('e:\\sources\\PasswordSecurity-Demo\\src\\levenshtein.js');

var _levenshtein2 = _interopRequireDefault(_levenshtein);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.$ = window.jQuery = _jquery2.default;

$(function () {
    $("#content").html(_levenshtein2.default.get("hello", "hallow"));
});
//# sourceMappingURL=script.js.map