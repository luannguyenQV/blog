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

var _post = require('./post');

var _head = require('/Users/Jhonny/devcriollo/blog/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_main2.default, null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Blog')), _react2.default.createElement('div', { className: 'posts' }, _post.posts.map(function (_ref) {
    var id = _ref.id,
        date = _ref.date,
        title = _ref.title;
    return _react2.default.createElement(Post, {
      id: id,
      key: id,
      date: date,
      title: title
    });
  })));
};

var Post = function Post(_ref2) {
  var id = _ref2.id,
      date = _ref2.date,
      title = _ref2.title;
  return _react2.default.createElement('div', { className: 'post', 'data-jsx': 1612383559
  }, _react2.default.createElement('span', { className: 'date', 'data-jsx': 1612383559
  }, date), _react2.default.createElement(_prefetch2.default, { href: '/' + new Date(date).getFullYear() + '/' + id }, _react2.default.createElement('a', {
    'data-jsx': 1612383559
  }, title)), _react2.default.createElement(_style2.default, {
    styleId: 1612383559,
    css: '.post[data-jsx="1612383559"] {margin-bottom: 10px;}.date[data-jsx="1612383559"] {display: inline-block;width: 140px;text-align: right;margin-right: 30px;color: #999;}a[data-jsx="1612383559"] {text-decoration: none;}@media (max-width: 500px) {.post[data-jsx="1612383559"] {margin-bottom: 15px;}.date[data-jsx="1612383559"] {display: block;width: inherit;text-align: inherit;font-size: 11px;color: #ccc;margin-bottom: 5px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Jsb2cuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJnQixBQUNILDhCQUNlLG9CQUNyQixDQUVNLDhCQUNpQixzQkFDVCxhQUNLLGtCQUNDLG1CQUNQLFlBQ2IsQ0FFRSwwQkFDcUIsc0JBQ3ZCLENBRTBCLDJCQUNsQiw4QkFDZSxvQkFDckIsQ0FFTSw4QkFDVSxlQUNBLGVBQ0ssb0JBQ0osZ0JBQ0osWUFDTyxtQkFDcEIsQ0FDRiIsImZpbGUiOiJwYWdlcy9ibG9nLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9KaG9ubnkvZGV2Y3Jpb2xsby9ibG9nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSAnLi4vbGF5b3V0cy9tYWluJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9wcmVmZXRjaCdcbmltcG9ydCB7IHBvc3RzIH0gZnJvbSAnLi9wb3N0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxQYWdlPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkJsb2c8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzXCI+XG4gICAgICB7XG4gICAgICAgIHBvc3RzLm1hcCgoeyBpZCwgZGF0ZSwgdGl0bGUgfSkgPT4gKFxuICAgICAgICAgIDxQb3N0IFxuICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgIGRhdGU9e2RhdGV9XG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC9QYWdlPlxuKVxuXG5jb25zdCBQb3N0ID0gKHsgaWQsIGRhdGUsIHRpdGxlIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPnsgZGF0ZSB9PC9zcGFuPlxuICAgIDxMaW5rIGhyZWY9e2AvJHtuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpfS8ke2lkfWB9PjxhPnsgdGl0bGUgfTwvYT48L0xpbms+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucG9zdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5kYXRlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgLnBvc3Qge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=pages/blog.js?entry */'
  }));
};