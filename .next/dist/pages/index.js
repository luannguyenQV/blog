'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('/Users/Jhonny/devcriollo/blog/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/Jhonny/devcriollo/blog/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _main = require('../layouts/main');

var _main2 = _interopRequireDefault(_main);

var _prefetch = require('/Users/Jhonny/devcriollo/blog/node_modules/next/dist/lib/prefetch.js');

var _prefetch2 = _interopRequireDefault(_prefetch);

var _head = require('/Users/Jhonny/devcriollo/blog/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_main2.default, null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
    'data-jsx': 2808107126
  }, 'Jhonny Arana')), _react2.default.createElement('div', { className: 'home', 'data-jsx': 2808107126
  }, _react2.default.createElement('div', { className: 'main', 'data-jsx': 2808107126
  }, _react2.default.createElement('img', { src: '/static/logo.png', alt: 'Nuxt.js Logo', 'class': 'logo', 'data-jsx': 2808107126
  }), _react2.default.createElement('h1', {
    'data-jsx': 2808107126
  }, 'Jhonny Arana'), _react2.default.createElement('nav', {
    'data-jsx': 2808107126
  }, _react2.default.createElement('a', { target: '_blank', href: 'https://twitter.com/aranajhonny', 'data-jsx': 2808107126
  }, 'Twitter'), _react2.default.createElement('a', { target: '_blank', href: 'https://github.com/aranajhonny', 'data-jsx': 2808107126
  }, 'Github'), _react2.default.createElement(_prefetch2.default, { href: '/blog' }, _react2.default.createElement('a', {
    'data-jsx': 2808107126
  }, 'Blog')), _react2.default.createElement('a', { href: 'mailto:jhonnyjosearana@gmail.com', 'data-jsx': 2808107126
  }, 'Email')))), _react2.default.createElement(_style2.default, {
    styleId: 2808107126,
    css: '.home[data-jsx="2808107126"] {position: absolute;top: 0;left: 0;right: 0;bottom: 0;display:-webkit-flex; display:flex;align-items: center;justify-content: center;z-index: -1;background: black;}.main[data-jsx="2808107126"] {-webkit-flex: none;-moz-flex: none;flex: none;text-align: center;}h1[data-jsx="2808107126"] {font-size: 14px;font-weight: normal;color: #fff;}nav[data-jsx="2808107126"] {margin-top: 20px;}a[data-jsx="2808107126"] {display: inline-block;margin: 0 15px;text-decoration: none;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCZ0IsQUFDSCw4QkFDYyxtQkFDWixPQUNDLFFBQ0MsU0FDQyxVQUNJLG1DQUNNLG9CQUNJLHdCQUNaLFlBQ00sa0JBRW5CLENBRU0sOEJBQ00sOENBQ1EsbUJBQ3BCLENBRUcsMkJBQ2MsZ0JBQ0ksb0JBQ1IsWUFDYixDQUVJLDRCQUNjLGlCQUNsQixDQUVFLDBCQUNxQixzQkFDUCxlQUNPLHNCQUN2QiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSmhvbm55L2RldmNyaW9sbG8vYmxvZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gJy4uL2xheW91dHMvbWFpbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvcHJlZmV0Y2gnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPFBhZ2U+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Smhvbm55IEFyYW5hPC90aXRsZT5cbiAgICA8L0hlYWQ+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIiBhbHQ9XCJOdXh0LmpzIExvZ29cIiBjbGFzcz1cImxvZ29cIiAvPlxuICAgICAgICA8aDE+Smhvbm55IEFyYW5hPC9oMT5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9hcmFuYWpob25ueVwiPlR3aXR0ZXI8L2E+XG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hcmFuYWpob25ueVwiPkdpdGh1YjwvYT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj48YT5CbG9nPC9hPjwvTGluaz5cbiAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmpob25ueWpvc2VhcmFuYUBnbWFpbC5jb21cIj5FbWFpbDwvYT5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5ob21lIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgICAubWFpbiB7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICBuYXYge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9QYWdlPlxuKVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};