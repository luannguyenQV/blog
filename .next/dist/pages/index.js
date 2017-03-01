"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/babel-runtime/helpers/extends"
);

var _extends3 = _interopRequireDefault(_extends2);

var _style = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/styled-jsx/style.js"
);

var _style2 = _interopRequireDefault(_style);

var _react = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/next/node_modules/react/react.js"
);

var _react2 = _interopRequireDefault(_react);

var _main = require("../layouts/main");

var _main2 = _interopRequireDefault(_main);

var _link = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/next/dist/lib/link.js"
);

var _link2 = _interopRequireDefault(_link);

var _head = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/next/dist/lib/head.js"
);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Logo = function Logo(props) {
  return _react2.default.createElement(
    "svg",
    (0, _extends3.default)(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "400",
        height: "400",
        viewBox: "0 0 400 400"
      },
      props
    ),
    _react2.default.createElement("path", {
      fill: "#FFF",
      stroke: "#454545",
      strokeWidth: "5",
      strokeMiterlimit: "10",
      d: "M354.354 318.066l-155.855-.049-155.854-.047 77.968-134.518 77.969-134.518L276.465 183.5z"
    }),
    _react2.default.createElement("path", {
      fill: "#FFF",
      d: "M158.027 322.202l-.038-8 82-.394.038 8zM138.495 146.704l6.877 4.084-41.87 70.504-6.877-4.084zM300.758 215.935l-6.832 4.164-42.672-70.02 6.832-4.164z"
    }),
    _react2.default.createElement("path", {
      fill: "#FFF",
      stroke: "#454545",
      strokeWidth: "5",
      strokeMiterlimit: "10",
      d: "M278.427 184.316l-77.928.026-77.927.023 38.985 67.259 38.984 67.259 38.941-67.283z"
    }),
    _react2.default.createElement("path", {
      fill: "#FFF",
      stroke: "#FFF",
      strokeWidth: "5.00005",
      strokeMiterlimit: "10",
      d: "M221.253 183.449l-.02 4-40.998-.201.02-4z"
    }),
    _react2.default.createElement("path", {
      fill: "#FFF",
      stroke: "#FFF",
      strokeWidth: "4.9999",
      strokeMiterlimit: "10",
      d: "M149.566 235.726l3.44-2.043 20.935 35.253-3.44 2.042z"
    }),
    _react2.default.createElement("path", {
      fill: "#FFF",
      stroke: "#FFF",
      strokeWidth: "5.00005",
      strokeMiterlimit: "10",
      d: "M230.302 271.39l-3.416-2.082 21.332-35.014 3.416 2.082z"
    }),
    _react2.default.createElement("path", {
      fill: "#FFF",
      stroke: "#454545",
      strokeWidth: "5",
      strokeMiterlimit: "10",
      d: "M238 251.692l-37.501-.012-37.499-.011 18.76-32.631 18.76-32.629 18.74 32.642z"
    }),
    _react2.default.createElement("path", {
      fill: "#FFF",
      stroke: "#FFF",
      strokeWidth: "5.00005",
      strokeMiterlimit: "10",
      d: "M189.38 252.72l-.01-2 20.499-.101.01 2z"
    }),
    _react2.default.createElement("path", {
      fill: "#FFF",
      stroke: "#FFF",
      strokeWidth: "4.99985",
      strokeMiterlimit: "10",
      d: "M186.5 208.842l1.719 1.02-10.463 17.628-1.72-1.02z"
    }),
    _react2.default.createElement("path", {
      fill: "#FFF",
      stroke: "#FFF",
      strokeWidth: "5",
      strokeMiterlimit: "10",
      d: "M225.06 226.166l-1.708 1.04-10.662-17.509 1.708-1.04z"
    })
  );
};
// ultima version

exports.default = function() {
  return _react2.default.createElement(
    _main2.default,
    null,
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement(
        "title",
        {
          "data-jsx": 276757505
        },
        "Jhonny Arana"
      )
    ),
    _react2.default.createElement(
      "div",
      {
        className: "home",
        "data-jsx": 276757505
      },
      _react2.default.createElement(
        "div",
        {
          className: "main",
          "data-jsx": 276757505
        },
        _react2.default.createElement(
          "div",
          {
            className: "logo",
            "data-jsx": 276757505
          },
          _react2.default.createElement(Logo, null)
        ),
        _react2.default.createElement(
          "h1",
          {
            "data-jsx": 276757505
          },
          "Arana Jhonny"
        ),
        _react2.default.createElement(
          "nav",
          {
            "data-jsx": 276757505
          },
          _react2.default.createElement(
            "a",
            {
              target: "_blank",
              href: "https://twitter.com/aranajhonny",
              "data-jsx": 276757505
            },
            "Twitter"
          ),
          _react2.default.createElement(
            "a",
            {
              target: "_blank",
              href: "https://github.com/aranajhonny",
              "data-jsx": 276757505
            },
            "Github"
          ),
          _react2.default.createElement(
            _link2.default,
            { prefetch: true, href: "/blog" },
            _react2.default.createElement(
              "a",
              {
                "data-jsx": 276757505
              },
              "Thoughts"
            )
          ),
          _react2.default.createElement(
            "a",
            {
              href: "mailto:jhonnyjosearana@gmail.com",
              "data-jsx": 276757505
            },
            "Email"
          )
        )
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 276757505,
      css: '.home[data-jsx="276757505"] {position: absolute;top: 0;left: 0;right: 0;bottom: 0;display:-webkit-flex; display:flex;align-items: center;justify-content: center;z-index: -1;background: #fff;}.main[data-jsx="276757505"] {-webkit-flex: none;-moz-flex: none;flex: none;text-align: center;}h1[data-jsx="276757505"] {margin: 0;font-size: 1.8rem;font-weight: 200;color: #454545;}nav[data-jsx="276757505"] {margin-top: 20px;}a[data-jsx="276757505"] {display: inline-block;margin: 20px 20px 0 20px;text-decoration: none;}'
    })
  );
};
