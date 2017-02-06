'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/Jhonny/devcriollo/blog/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/Jhonny/devcriollo/blog/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/Jhonny/devcriollo/blog/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/Jhonny/devcriollo/blog/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/Jhonny/devcriollo/blog/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('/Users/Jhonny/devcriollo/blog/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _commaNumber = require('comma-number');

var _commaNumber2 = _interopRequireDefault(_commaNumber);

var _react = require('/Users/Jhonny/devcriollo/blog/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meta = function (_React$Component) {
  (0, _inherits3.default)(Meta, _React$Component);

  function Meta(props) {
    (0, _classCallCheck3.default)(this, Meta);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Meta.__proto__ || (0, _getPrototypeOf2.default)(Meta)).call(this, props));

    _this.state = {
      highlight: false
    };
    return _this;
  }

  (0, _createClass3.default)(Meta, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.views !== nextProps.views) {
        if (this.raf) return;
        if (this.state.highlight) {
          // reset the animation
          this.setState({ highlight: false }, function () {
            _this2.raf = requestAnimationFrame(function () {
              _this2.raf = null;
              _this2.setState({ highlight: true });
            });
          });
        } else {
          this.setState({ highlight: true });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          date = _props.date,
          views = _props.views;
      var highlight = this.state.highlight;

      return _react2.default.createElement('div', {
        'data-jsx': 1856858372
      }, date, ' \u2013 ', ' ', _react2.default.createElement('span', { className: highlight && 'highlight', 'data-jsx': 1856858372
      }, (0, _commaNumber2.default)(views), ' views'), _react2.default.createElement(_style2.default, {
        styleId: 1856858372,
        css: 'div[data-jsx="1856858372"] {margin-bottom: 20px;color: #777;}.highlight[data-jsx="1856858372"] {-webkit-animation-name:a1856858372highlight;-moz-animation-name:a1856858372highlight;animation-name:a1856858372highlight;-webkit-animation-duration:1s;-moz-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards;}@-webkit-keyframes a1856858372highlight {from {background-color: yellow;}to {background-color: #fff;}}@-moz-keyframes a1856858372highlight {from {background-color: yellow;}to {background-color: #fff;}}@keyframes a1856858372highlight {from {background-color: yellow;}to {background-color: #fff;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcG9zdC9tZXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDb0IsQUFDTCw0QkFDaUIsb0JBQ1IsWUFDYixDQUVXLG1DQUNnQix5SEFDSCwrRUFDTyxvR0FDL0IsQ0FTQSIsImZpbGUiOiJjb21wb25lbnRzL3Bvc3QvbWV0YS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSmhvbm55L2RldmNyaW9sbG8vYmxvZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb3JtYXQgZnJvbSAnY29tbWEtbnVtYmVyJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGlnaGxpZ2h0OiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLnZpZXdzICE9PSBuZXh0UHJvcHMudmlld3MpIHtcbiAgICAgIGlmICh0aGlzLnJhZikgcmV0dXJuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5oaWdobGlnaHQpIHtcbiAgICAgICAgLy8gcmVzZXQgdGhlIGFuaW1hdGlvblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGlnaGxpZ2h0OiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yYWYgPSBudWxsXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGlnaGxpZ2h0OiB0cnVlIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWdobGlnaHQ6IHRydWUgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgZGF0ZSwgdmlld3MgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhpZ2hsaWdodCB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7IGRhdGUgfSDigJMgeycgJ31cbiAgICAgICAge1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17IGhpZ2hsaWdodCAmJiAnaGlnaGxpZ2h0JyB9PlxuICAgICAgICAgICAgeyBmb3JtYXQodmlld3MpIH0gdmlld3NcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpZ2hsaWdodCB7XG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogaGlnaGxpZ2h0O1xuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/post/meta.js */'
      }));
    }
  }]);

  return Meta;
}(_react2.default.Component);

exports.default = Meta;