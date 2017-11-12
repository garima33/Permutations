'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

exports.default = function (store) {
  return function (next) {
    return function (action) {
      var state = store.getState();
      switch (action.type) {}
      next(action);
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsInN0b3JlIiwiZ2V0U3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O2tCQUllO0FBQUEsU0FBUztBQUFBLFdBQVEsa0JBQVU7QUFDeEMsVUFBSUEsUUFBUUMsTUFBTUMsUUFBTixFQUFaO0FBQ0EsY0FBUUMsT0FBT0MsSUFBZjtBQUdBQyxXQUFLRixNQUFMO0FBQ0QsS0FOdUI7QUFBQSxHQUFUO0FBQUEsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWN0aW9ucywgcmFpc2VBY3Rpb259IGZyb20gJy4uL2FjdGlvbnMnXG5cblxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gIGxldCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIFxuICB9XG4gIG5leHQoYWN0aW9uKVxufVxuIl19