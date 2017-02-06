'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('/Users/Jhonny/devcriollo/blog/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/Jhonny/devcriollo/blog/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _meta = require('../components/meta');

var _meta2 = _interopRequireDefault(_meta);

var _prefetch = require('/Users/Jhonny/devcriollo/blog/node_modules/next/dist/lib/prefetch.js');

var _prefetch2 = _interopRequireDefault(_prefetch);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index = require('/Users/Jhonny/devcriollo/blog/node_modules/next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.onRouteChangeStart = function () {
  return _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', { className: 'main', 'data-jsx': 1620925796
  }, _react2.default.createElement('div', { className: 'logo', 'data-jsx': 1620925796
  }, _react2.default.createElement(_prefetch2.default, { href: 'https://jhonny.now.sh' }, _react2.default.createElement('a', {
    'data-jsx': 1620925796
  }, 'Home')), ' ', _react2.default.createElement('a', { href: 'https://github.com/aranajhonny/blog', target: '_blank', 'data-jsx': 1620925796
  }, '( src )')), children, _react2.default.createElement(_meta2.default, null), _react2.default.createElement(_style2.default, {
    styleId: 1212326599,
    css: '\n      /* loading progress bar styles */\n      #nprogress {\n        pointer-events: none;\n      }\n\n      #nprogress .bar {\n        background: #FF2E88;\n        position: fixed;\n        z-index: 1031;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 2px;\n      }\n\n      #nprogress .peg {\n        display: block;\n        position: absolute;\n        right: 0px;\n        width: 100px;\n        height: 100%;\n        box-shadow: 0 0 10px #FF2E88, 0 0 5px #FF2E88;\n        opacity: 1.0;\n        transform: rotate(3deg) translate(0px, -4px);\n      }\n      '
  }), _react2.default.createElement(_style2.default, {
    styleId: 3722661638,
    css: '.main[data-jsx="1620925796"] {padding: 25px 50px;}.logo[data-jsx="1620925796"] {padding-bottom: 50px;}a[data-jsx="1620925796"] {text-decoration: none;}@media (max-width: 500px) {.main[data-jsx="1620925796"] {padding: 25px 15px;}.logo[data-jsx="1620925796"] {padding-bottom: 20px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRGdCLEFBQ0gsOEJBQ2MsbUJBQ3BCLENBRU0sOEJBQ2dCLHFCQUN0QixDQUVFLDBCQUNxQixzQkFDdkIsQ0FFMEIsMkJBQ2xCLDhCQUNjLG1CQUNwQixDQUVNLDhCQUNnQixxQkFDdEIsQ0FDRiIsImZpbGUiOiJsYXlvdXRzL21haW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0pob25ueS9kZXZjcmlvbGxvL2Jsb2ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWV0YSBmcm9tICcuLi9jb21wb25lbnRzL21ldGEnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L3ByZWZldGNoJ1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4gTlByb2dyZXNzLnN0YXJ0KClcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vamhvbm55Lm5vdy5zaFwiPjxhPkhvbWU8L2E+PC9MaW5rPlxuICAgICAgeycgJ31cbiAgICAgIDxhIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vYXJhbmFqaG9ubnkvYmxvZ2B9IHRhcmdldD1cIl9ibGFua1wiPiggc3JjICk8L2E+XG4gICAgPC9kaXY+XG5cbiAgICB7IGNoaWxkcmVuIH1cblxuICAgIHsgLyogZ2xvYmFsIHN0eWxlcyBhbmQgbWV0YSB0YWdzICovIH1cbiAgICA8TWV0YSAvPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsID57YFxuICAgICAgLyogbG9hZGluZyBwcm9ncmVzcyBiYXIgc3R5bGVzICovXG4gICAgICAjbnByb2dyZXNzIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRjJFODg7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjRkYyRTg4LCAwIDAgNXB4ICNGRjJFODg7XG4gICAgICAgIG9wYWNpdHk6IDEuMDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgeyAvKiBsb2NhbCBzdHlsZXMgKi8gfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tYWluIHtcbiAgICAgICAgcGFkZGluZzogMjVweCA1MHB4O1xuICAgICAgfVxuXG4gICAgICAubG9nbyB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=layouts/main.js */'
  }));
};