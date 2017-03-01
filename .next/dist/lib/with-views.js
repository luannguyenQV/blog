"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require(
  "babel-runtime/helpers/possibleConstructorReturn"
);

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _db = require("./db");

var _db2 = _interopRequireDefault(_db);

require("isomorphic-fetch");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var withViews = function withViews(fn) {
  return (function(_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    (0, _createClass3.default)(_class, null, [
      {
        key: "getInitialProps",
        value: (function() {
          var _ref = (0, _asyncToGenerator3.default)(
            _regenerator2.default.mark(function _callee(_ref2) {
              var pathname = _ref2.pathname;
              var id, ref, views;
              return _regenerator2.default.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        id = pathname
                          // remove leading `/`
                          .substr(1)
                          // replace the `/` after the year with a `-`
                          .replace(/(\d+)\//, "$1-");

                        // fetch views

                        ref = _db2.default.ref("views").child(id);
                        _context.next = 4;
                        return ref.once("value");

                      case 4:
                        views = _context.sent;

                        // register a view asynchronously
                        fetch(
                          "https://viewsad.now.sh/?id=" + encodeURIComponent(id)
                        ).catch(function(err) {
                          return console.error("view save error:", err.stack);
                        });

                        return _context.abrupt("return", {
                          postId: id,
                          views: views.val()
                        });

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                },
                _callee,
                this
              );
            })
          );

          function getInitialProps(_x) {
            return _ref.apply(this, arguments);
          }

          return getInitialProps;
        })()
      }
    ]);

    function _class(props) {
      (0, _classCallCheck3.default)(this, _class);

      var _this = (0, _possibleConstructorReturn3.default)(
        this,
        (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(
          this,
          props
        )
      );

      _this.state = (0, _assign2.default)({}, props);
      _this.onViews = _this.onViews.bind(_this);
      return _this;
    }

    (0, _createClass3.default)(_class, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var postId = this.props.postId;

          _db2.default.ref("views").child(postId).on("value", this.onViews);
        }
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var postId = this.props.postId;

          _db2.default.ref("views").child(postId).off("value", this.onViews);
        }
      },
      {
        key: "onViews",
        value: function onViews(views) {
          this.setState({ views: views.val() });
        }
      },
      {
        key: "render",
        value: function render() {
          return fn(this.state);
        }
      }
    ]);

    return _class;
  })(_react2.default.Component);
};

// expose `fetch()` to node
exports.default = withViews;
