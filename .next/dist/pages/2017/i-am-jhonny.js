"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _post = require("../../layouts/post");

var _post2 = _interopRequireDefault(_post);

var _title = require("../../components/post/title");

var _title2 = _interopRequireDefault(_title);

var _meta = require("../../components/post/meta");

var _meta2 = _interopRequireDefault(_meta);

var _paragraph = require("../../components/post/paragraph");

var _paragraph2 = _interopRequireDefault(_paragraph);

var _withViews = require("../../lib/with-views");

var _withViews2 = _interopRequireDefault(_withViews);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _withViews2.default)(function(_ref) {
  var views = _ref.views;
  return _react2.default.createElement(
    _post2.default,
    null,
    _react2.default.createElement(
      _head2.default,
      null,
      _react2.default.createElement("title", null, "I am Jhonny")
    ),
    _react2.default.createElement(_title2.default, null, "I am Jhonny"),
    _react2.default.createElement(_meta2.default, {
      date: "February 4, 2016",
      views: views
    }),
    _react2.default.createElement(
      _paragraph2.default,
      null,
      "This is meant to be my ",
      _react2.default.createElement("b", null, "personal"),
      " blog."
    )
  );
});
