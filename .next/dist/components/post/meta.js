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

var _commaNumber = require("comma-number");

var _commaNumber2 = _interopRequireDefault(_commaNumber);

var _react = require(
  "/Users/Jhonny/devcriollo/blog/node_modules/next/node_modules/react/react.js"
);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Meta = (function(_React$Component) {
  (0, _inherits3.default)(Meta, _React$Component);

  function Meta(props) {
    (0, _classCallCheck3.default)(this, Meta);

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (Meta.__proto__ || (0, _getPrototypeOf2.default)(Meta)).call(this, props)
    );

    _this.state = {
      highlight: false
    };
    return _this;
  }

  (0, _createClass3.default)(Meta, [
    {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (this.props.views !== nextProps.views) {
          if (this.raf) return;
          if (this.state.highlight) {
            // reset the animation
            this.setState({ highlight: false }, function() {
              _this2.raf = requestAnimationFrame(function() {
                _this2.raf = null;
                _this2.setState({ highlight: true });
              });
            });
          } else {
            this.setState({ highlight: true });
          }
        }
      }
    },
    {
      key: "render",
      value: function render() {
        var _props = this.props, date = _props.date, views = _props.views;
        var highlight = this.state.highlight;

        return _react2.default.createElement(
          "div",
          {
            "data-jsx": 1204030124
          },
          date,
          " \u2013 ",
          " ",
          _react2.default.createElement(
            "span",
            {
              className: highlight && "highlight",
              "data-jsx": 1204030124
            },
            (0, _commaNumber2.default)(views),
            " views"
          ),
          _react2.default.createElement(_style2.default, {
            styleId: 1204030124,
            css: 'div[data-jsx="1204030124"] {margin-bottom: 20px;color: #999;}.highlight[data-jsx="1204030124"] {-webkit-animation-name:a1204030124highlight;-moz-animation-name:a1204030124highlight;animation-name:a1204030124highlight;-webkit-animation-duration: 1s;-moz-animation-duration: 1s;animation-duration: 1s;-webkit-animation-fill-mode: forwards;-moz-animation-fill-mode: forwards;animation-fill-mode: forwards;}@-webkit-keyframes a1204030124highlight {from {background-color: rgb(255,204,0);}to {background-color: #fff;}}@-moz-keyframes a1204030124highlight {from {background-color: rgb(255,204,0);}to {background-color: #fff;}}@keyframes a1204030124highlight {from {background-color: rgb(255,204,0);}to {background-color: #fff;}}'
          })
        );
      }
    }
  ]);
  return Meta;
})(_react2.default.Component);

exports.default = Meta;
