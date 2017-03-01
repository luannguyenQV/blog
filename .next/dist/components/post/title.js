"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/styled-jsx/style.js"
);

var _style2 = _interopRequireDefault(_style);

var _react = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/next/node_modules/react/react.js"
);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "h1",
    {
      "data-jsx": 3737225290
    },
    _react2.default.createElement(
      "a",
      {
        href: "#",
        "data-jsx": 3737225290
      },
      children
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 3737225290,
      css: 'h1[data-jsx="3737225290"] {font: 18px Helvetica Neue, Helvetica,          Arial, "Lucida Grande", sans-serif;font-weight: 500;margin-bottom: 10px;}a[data-jsx="3737225290"] {color: rgb(255,59,48);text-decoration: none;font-size: 1.5rem;}a[data-jsx="3737225290"]:hover {background-color:  rgb(255,59,48);color: #fff;}'
    })
  );
};
