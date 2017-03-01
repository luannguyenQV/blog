"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function() {
  return _react2.default.createElement(
    "div",
    {
      "data-jsx": 3545146063
    },
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        "data-jsx": 3545146063
      }),
      _react2.default.createElement("link", {
        rel: "icon",
        href: "/static/favicon.ico",
        type: "image/png",
        "data-jsx": 3545146063
      })
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 3545146063,
      css: "\n      * {\n        margin: 0;\n        box-sizing: border-box;\n      }\n\n      body {\n        font: 14px monospace;\n\tbackground: #fff;\n      }\n\n      a {\n        color: #ff2d55;\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n      }\n\n      a:hover {\n        color: #fff;\n        background: #ff2d55;\n        text-decoration: none;\n      }\n      \n      #nprogress {\n        pointer-events: none;\n      }\n\n      #nprogress .bar {\n        background: #ff2d55;\n        position: fixed;\n        z-index: 1031;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 2.1px;\n      }\n\n      #nprogress .peg {\n        display: block;\n        position: absolute;\n        right: 0px;\n        width: 100px;\n        height: 100%;\n        box-shadow: 0 0 10px #ff2d55, 0 0 5px #ff2d55;\n        opacity: 1.0;\n        transform: rotate(3deg) translate(0px, -4px);\n      }\n    "
    })
  );
};
