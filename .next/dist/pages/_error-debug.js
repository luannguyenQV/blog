"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/babel-runtime/core-js/object/get-prototype-of"
);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/babel-runtime/helpers/classCallCheck"
);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/babel-runtime/helpers/createClass"
);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/babel-runtime/helpers/possibleConstructorReturn"
);

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _inherits2 = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/babel-runtime/helpers/inherits"
);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/styled-jsx/style.js"
);

var _style2 = _interopRequireDefault(_style);

var _react = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/next/node_modules/react/react.js"
);

var _react2 = _interopRequireDefault(_react);

var _head = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/next/dist/lib/head.js"
);

var _head2 = _interopRequireDefault(_head);

var _ansiHtml = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/ansi-html/index.js"
);

var _ansiHtml2 = _interopRequireDefault(_ansiHtml);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ErrorDebug = (function(_React$Component) {
  (0, _inherits3.default)(ErrorDebug, _React$Component);

  function ErrorDebug() {
    (0, _classCallCheck3.default)(this, ErrorDebug);
    return (0, _possibleConstructorReturn3.default)(
      this,
      (ErrorDebug.__proto__ || (0, _getPrototypeOf2.default)(ErrorDebug)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(
    ErrorDebug,
    [
      {
        key: "render",
        value: function render() {
          var _props = this.props,
            name = _props.name,
            message = _props.message,
            stack = _props.stack,
            path = _props.path;

          return _react2.default.createElement(
            "div",
            {
              className: "errorDebug",
              "data-jsx": 1455198374
            },
            _react2.default.createElement(
              _head2.default,
              null,
              _react2.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0",
                "data-jsx": 1455198374
              })
            ),
            path
              ? _react2.default.createElement(
                  "div",
                  {
                    className: "heading",
                    "data-jsx": 1455198374
                  },
                  "Error in ",
                  path
                )
              : null,
            name === "ModuleBuildError"
              ? _react2.default.createElement("pre", {
                  className: "message",
                  dangerouslySetInnerHTML: {
                    __html: (0, _ansiHtml2.default)(encodeHtml(message))
                  },
                  "data-jsx": 1455198374
                })
              : _react2.default.createElement(
                  "pre",
                  {
                    className: "message",
                    "data-jsx": 1455198374
                  },
                  stack
                ),
            _react2.default.createElement(_style2.default, {
              styleId: 1579730202,
              css: "\n        body {\n          background: #a6004c;\n          margin: 0;\n        }\n      "
            }),
            _react2.default.createElement(_style2.default, {
              styleId: 3076811513,
              css: '.errorDebug[data-jsx="1455198374"] {height: 100%;padding: 16px;box-sizing: border-box;}.message[data-jsx="1455198374"] {font-family: "SF Mono", "Roboto Mono", "Fira Mono", menlo-regular, monospace;font-size: 10px;color: #fbe7f1;margin: 0;white-space: pre-wrap;word-wrap: break-word;}.heading[data-jsx="1455198374"] {font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;font-size: 13px;font-weight: bold;color: #ff84bf;margin-bottom: 20pxl        }'
            })
          );
        }
      }
    ],
    [
      {
        key: "getInitialProps",
        value: function getInitialProps(_ref) {
          var err = _ref.err;
          var name = err.name,
            message = err.message,
            stack = err.stack,
            module = err.module;

          return {
            name: name,
            message: message,
            stack: stack,
            path: module ? module.rawRequest : null
          };
        }
      }
    ]
  );
  return ErrorDebug;
})(_react2.default.Component);

exports.default = ErrorDebug;

var encodeHtml = function encodeHtml(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

// see color definitions of babel-code-frame:
// https://github.com/babel/babel/blob/master/packages/babel-code-frame/src/index.js

_ansiHtml2.default.setColors({
  reset: ["fff", "a6004c"],
  darkgrey: "e54590",
  yellow: "ee8cbb",
  green: "f2a2c7",
  magenta: "fbe7f1",
  blue: "fff",
  cyan: "ef8bb9",
  red: "fff"
});
