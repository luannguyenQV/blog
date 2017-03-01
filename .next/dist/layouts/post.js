"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _main = require("./main");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _main2.default,
    null,
    _react2.default.createElement(
      "article",
      {
        "data-jsx": 911167816
      },
      children
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 2190762789,
      css: 'article[data-jsx="911167816"] {max-width: 650px;margin: auto;font-size: 14px;}'
    }),
    _react2.default.createElement(_style2.default, {
      styleId: 3351816424,
      css: "\n      body {\n        width: 100%;\n        overflow-x: hidden;\n      }\n    "
    })
  );
};
