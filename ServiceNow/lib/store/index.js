'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configureReducers = configureReducers;
exports.configureMiddlewares = configureMiddlewares;
exports.default = configureStore;

var _redux = require('redux');

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {};
var middlewares = [];

function configureReducers() {
    for (var _len = arguments.length, arrayOfReducers = Array(_len), _key = 0; _key < _len; _key++) {
        arrayOfReducers[_key] = arguments[_key];
    }

    reducers = arrayOfReducers.reduce(function (curr, reducer) {
        return (0, _deepmerge2.default)(curr, reducer);
    }, {});
}

function configureMiddlewares() {
    for (var _len2 = arguments.length, arrayOfMiddlewares = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        arrayOfMiddlewares[_key2] = arguments[_key2];
    }

    middlewares = middlewares.concat(arrayOfMiddlewares);
}

function configureStore() {
    return (0, _redux.compose)(_redux.applyMiddleware.apply(this, middlewares))(_redux.createStore)((0, _redux.combineReducers)(reducers));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25maWd1cmVSZWR1Y2VycyIsImNvbmZpZ3VyZU1pZGRsZXdhcmVzIiwiY29uZmlndXJlU3RvcmUiLCJyZWR1Y2VycyIsIm1pZGRsZXdhcmVzIiwiYXJyYXlPZlJlZHVjZXJzIiwicmVkdWNlIiwiY3VyciIsInJlZHVjZXIiLCJhcnJheU9mTWlkZGxld2FyZXMiLCJjb25jYXQiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFZZ0JBLGlCLEdBQUFBLGlCO1FBTUFDLG9CLEdBQUFBLG9CO2tCQUlRQyxjOztBQXRCeEI7O0FBT0E7Ozs7OztBQUVBLElBQUlDLFdBQVcsRUFBZjtBQUNBLElBQUlDLGNBQWMsRUFBbEI7O0FBRU8sU0FBU0osaUJBQVQsR0FBK0M7QUFBQSxzQ0FBakJLLGVBQWlCO0FBQWpCQSx1QkFBaUI7QUFBQTs7QUFDbERGLGVBQVdFLGdCQUFnQkMsTUFBaEIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFPQyxPQUFQLEVBQW1CO0FBQ2pELGVBQU8seUJBQU1ELElBQU4sRUFBWUMsT0FBWixDQUFQO0FBQ0gsS0FGVSxFQUVSLEVBRlEsQ0FBWDtBQUdIOztBQUVNLFNBQVNQLG9CQUFULEdBQXFEO0FBQUEsdUNBQXBCUSxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUN4REwsa0JBQWNBLFlBQVlNLE1BQVosQ0FBbUJELGtCQUFuQixDQUFkO0FBQ0g7O0FBRWMsU0FBU1AsY0FBVCxHQUEwQjtBQUNyQyxXQUFPLG9CQUFRLHVCQUFnQlMsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBNEJQLFdBQTVCLENBQVIsc0JBQStELDRCQUFnQkQsUUFBaEIsQ0FBL0QsQ0FBUDtBQUNIIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBjcmVhdGVTdG9yZSxcbiAgICBhcHBseU1pZGRsZXdhcmUsXG4gICAgY29tcG9zZSxcbiAgICBjb21iaW5lUmVkdWNlcnNcbn0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnXG5cbmxldCByZWR1Y2VycyA9IHt9O1xubGV0IG1pZGRsZXdhcmVzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVSZWR1Y2VycyguLi5hcnJheU9mUmVkdWNlcnMpIHtcbiAgICByZWR1Y2VycyA9IGFycmF5T2ZSZWR1Y2Vycy5yZWR1Y2UoKGN1cnIsIHJlZHVjZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG1lcmdlKGN1cnIsIHJlZHVjZXIpXG4gICAgfSwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVNaWRkbGV3YXJlcyguLi5hcnJheU9mTWlkZGxld2FyZXMpIHtcbiAgICBtaWRkbGV3YXJlcyA9IG1pZGRsZXdhcmVzLmNvbmNhdChhcnJheU9mTWlkZGxld2FyZXMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xuICAgIHJldHVybiBjb21wb3NlKGFwcGx5TWlkZGxld2FyZS5hcHBseSh0aGlzLCBtaWRkbGV3YXJlcykpKGNyZWF0ZVN0b3JlKShjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpKTtcbn1cbiJdfQ==