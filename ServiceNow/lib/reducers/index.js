'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

function result() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.Actions.SET_RESULT:
      return action.payload;
    case _actions.Actions.RESET_DATA:
      return [];
    default:
      return state;
  }
}

function inputString() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case _actions.Actions.SET_INPUT:
      return action.payload;
    case _actions.Actions.RESET_INPUT:
      return '';
    default:
      return state;
  }
}

exports.default = {
  result: result,
  inputString: inputString
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXN1bHQiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTRVRfUkVTVUxUIiwicGF5bG9hZCIsIlJFU0VUX0RBVEEiLCJpbnB1dFN0cmluZyIsIlNFVF9JTlBVVCIsIlJFU0VUX0lOUFVUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxNQUFULEdBQW1DO0FBQUEsTUFBbkJDLEtBQW1CLHVFQUFYLEVBQVc7QUFBQSxNQUFQQyxNQUFPOztBQUMvQixVQUFPQSxPQUFPQyxJQUFkO0FBQ0EsU0FBSyxpQkFBUUMsVUFBYjtBQUNFLGFBQU9GLE9BQU9HLE9BQWQ7QUFDRixTQUFLLGlCQUFRQyxVQUFiO0FBQ0UsYUFBTyxFQUFQO0FBQ0Y7QUFDRSxhQUFPTCxLQUFQO0FBTkY7QUFRSDs7QUFFRCxTQUFTTSxXQUFULEdBQXNDO0FBQUEsTUFBakJOLEtBQWlCLHVFQUFYLEVBQVc7QUFBQSxNQUFQQyxNQUFPOztBQUNuQyxVQUFPQSxPQUFPQyxJQUFkO0FBQ0MsU0FBSyxpQkFBUUssU0FBYjtBQUNFLGFBQU9OLE9BQU9HLE9BQWQ7QUFDRixTQUFLLGlCQUFRSSxXQUFiO0FBQ0UsYUFBTyxFQUFQO0FBQ0Y7QUFDRSxhQUFPUixLQUFQO0FBTkg7QUFRRjs7a0JBRWM7QUFDWEQsZ0JBRFc7QUFFWE87QUFGVyxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3Rpb25zfSBmcm9tICcuLi9hY3Rpb25zJ1xuXG5mdW5jdGlvbiByZXN1bHQoc3RhdGUgPSBbXSwgYWN0aW9uKXtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgQWN0aW9ucy5TRVRfUkVTVUxUOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXG4gICAgY2FzZSBBY3Rpb25zLlJFU0VUX0RBVEE6XG4gICAgICByZXR1cm4gW11cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gICB9IFxufVxuXG5mdW5jdGlvbiBpbnB1dFN0cmluZyhzdGF0ZT0nJywgYWN0aW9uKXtcbiAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSBBY3Rpb25zLlNFVF9JTlBVVDpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxuICAgIGNhc2UgQWN0aW9ucy5SRVNFVF9JTlBVVDpcbiAgICAgIHJldHVybiAnJ1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgIH0gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlc3VsdCxcbiAgICBpbnB1dFN0cmluZ1xufSJdfQ==