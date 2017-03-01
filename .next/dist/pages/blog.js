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

var _main = require("../layouts/main");

var _main2 = _interopRequireDefault(_main);

var _link = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/next/dist/lib/link.js"
);

var _link2 = _interopRequireDefault(_link);

var _post = require("./post");

var _head = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/next/dist/lib/head.js"
);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function() {
  return _react2.default.createElement(
    _main2.default,
    null,
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement("title", null, "Blog")
    ),
    _react2.default.createElement(
      "div",
      {
        "data-jsx": 135010119
      },
      _react2.default.createElement(
        "h1",
        {
          "data-jsx": 135010119
        },
        "Essays & Thoughts"
      ),
      _react2.default.createElement(_style2.default, {
        styleId: 135010119,
        css: 'h1[data-jsx="135010119"] {margin: 5px 0 40px 0;font-size: 1.5rem;font-weight: 200;color: #454545;}'
      })
    ),
    _react2.default.createElement(
      "div",
      { className: "posts" },
      _post.posts.map(function(_ref) {
        var id = _ref.id, date = _ref.date, title = _ref.title;
        return _react2.default.createElement(Post, {
          id: id,
          key: id,
          date: date,
          title: title
        });
      })
    )
  );
};

var Post = function Post(_ref2) {
  var id = _ref2.id, date = _ref2.date, title = _ref2.title;
  return _react2.default.createElement(
    "div",
    {
      className: "post",
      "data-jsx": 1612383559
    },
    _react2.default.createElement(
      "p",
      {
        className: "date",
        "data-jsx": 1612383559
      },
      date
    ),
    _react2.default.createElement(
      _link2.default,
      { prefetch: true, href: "/" + new Date(date).getFullYear() + "/" + id },
      _react2.default.createElement(
        "a",
        {
          "data-jsx": 1612383559
        },
        title
      )
    ),
    _react2.default.createElement(_style2.default, {
      styleId: 1612383559,
      css: '.post[data-jsx="1612383559"] {margin-bottom: 10px;}.date[data-jsx="1612383559"] {display: inline-block;width: 140px;text-align: right;margin-right: 30px;color: #999;}a[data-jsx="1612383559"] {text-decoration: none;}@media (max-width: 500px) {.post[data-jsx="1612383559"] {margin-bottom: 15px;}.date[data-jsx="1612383559"] {display: block;width: inherit;text-align: inherit;font-size: 11px;color: #ccc;margin-bottom: 5px;}}'
    })
  );
};
