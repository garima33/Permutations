'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Permutaions = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

var _containers = require('./containers');

var _containers2 = _interopRequireDefault(_containers);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _store.configureMiddlewares)((0, _reduxLogger2.default)());
(0, _store.configureMiddlewares)(_middlewares2.default);
(0, _store.configureReducers)(_reducers2.default);

var Permutaions = exports.Permutaions = function (_Component) {
  _inherits(Permutaions, _Component);

  function Permutaions(props) {
    _classCallCheck(this, Permutaions);

    var _this = _possibleConstructorReturn(this, (Permutaions.__proto__ || Object.getPrototypeOf(Permutaions)).call(this, props));

    _this.appStore = (0, _store2.default)();
    _this.appStore.dispatch((0, _actions.raiseAction)(_actions.Actions.COMPONENT_INITIALIZING));
    return _this;
  }

  _createClass(Permutaions, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: this.appStore },
        _react2.default.createElement(
          _containers2.default,
          null,
          _react2.default.createElement(_components2.default, null)
        )
      );
    }
  }]);

  return Permutaions;
}(_react.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQZXJtdXRhaW9ucyIsInByb3BzIiwiYXBwU3RvcmUiLCJkaXNwYXRjaCIsIkNPTVBPTkVOVF9JTklUSUFMSVpJTkciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxpQ0FBcUIsNEJBQXJCO0FBQ0E7QUFDQTs7SUFFYUEsVyxXQUFBQSxXOzs7QUFFWCx1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNYQSxLQURXOztBQUVqQixVQUFLQyxRQUFMLEdBQWdCLHNCQUFoQjtBQUNDLFVBQUtBLFFBQUwsQ0FBY0MsUUFBZCxDQUF1QiwwQkFBWSxpQkFBUUMsc0JBQXBCLENBQXZCO0FBSGdCO0FBSWxCOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBVSxPQUFPLEtBQUtGLFFBQXRCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFERjtBQURGLE9BREY7QUFPRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJ1xuaW1wb3J0IG1pZGRsZXdhcmUgZnJvbSAnLi9taWRkbGV3YXJlcydcbmltcG9ydCBBcHBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXJzJ1xuaW1wb3J0IFBlcm11dGFpb24gZnJvbSAnLi9jb21wb25lbnRzJ1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInXG5pbXBvcnQgY29uZmlndXJlU3RvcmUsIHtjb25maWd1cmVNaWRkbGV3YXJlcywgY29uZmlndXJlUmVkdWNlcnN9IGZyb20gJy4vc3RvcmUnXG5pbXBvcnQgeyBBY3Rpb25zLCByYWlzZUFjdGlvbn0gZnJvbSAnLi9hY3Rpb25zJ1xuXG5jb25maWd1cmVNaWRkbGV3YXJlcyhsb2dnZXIoKSlcbmNvbmZpZ3VyZU1pZGRsZXdhcmVzKG1pZGRsZXdhcmUpXG5jb25maWd1cmVSZWR1Y2VycyhyZWR1Y2VycylcblxuZXhwb3J0IGNsYXNzIFBlcm11dGFpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmFwcFN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcbiAgICAgdGhpcy5hcHBTdG9yZS5kaXNwYXRjaChyYWlzZUFjdGlvbihBY3Rpb25zLkNPTVBPTkVOVF9JTklUSUFMSVpJTkcpKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3RoaXMuYXBwU3RvcmV9PlxuICAgICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICAgIDxQZXJtdXRhaW9uLz5cbiAgICAgICAgPC9BcHBDb250YWluZXI+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIClcbiAgfVxufSJdfQ==