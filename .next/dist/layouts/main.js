"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _meta = require("../components/meta");

var _meta2 = _interopRequireDefault(_meta);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _nprogress = require("nprogress");

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_index2.default.onRouteChangeStart = function() {
  return _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function() {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function() {
  return _nprogress2.default.done();
};

exports.default = function(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    {
      className: "main",
      "data-jsx": 3722661638
    },
    _react2.default.createElement(
      "div",
      {
        className: "logo",
        "data-jsx": 3722661638
      },
      _react2.default.createElement(
        _link2.default,
        { prefetch: true, href: "/" },
        _react2.default.createElement(
          "a",
          {
            "data-jsx": 3722661638
          },
          "Home"
        )
      ),
      " (",
      _react2.default.createElement(
        "a",
        {
          href: "https://github.com/aranajhonny/blog",
          target: "_blank",
          "data-jsx": 3722661638
        },
        "src"
      ),
      ")"
    ),
    children,
    _react2.default.createElement(_meta2.default, null),
    _react2.default.createElement(_style2.default, {
      styleId: 3722661638,
      css: '.main[data-jsx="3722661638"] {padding: 25px 50px;}.logo[data-jsx="3722661638"] {padding-bottom: 50px;}a[data-jsx="3722661638"] {text-decoration: none;}@media (max-width: 500px) {.main[data-jsx="3722661638"] {padding: 25px 15px;}.logo[data-jsx="3722661638"] {padding-bottom: 20px;}}'
    })
  );
};
