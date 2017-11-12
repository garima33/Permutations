'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Permutation = function (_React$Component) {
  _inherits(Permutation, _React$Component);

  function Permutation(props) {
    _classCallCheck(this, Permutation);

    return _possibleConstructorReturn(this, (Permutation.__proto__ || Object.getPrototypeOf(Permutation)).call(this, props));
  }

  _createClass(Permutation, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          result = _props.result,
          inputString = _props.inputString,
          onChangeHandler = _props.onChangeHandler,
          onClickHandler = _props.onClickHandler,
          resetHandler = _props.resetHandler;


      var TableUI = _react2.default.createElement('tr', null);
      if (result.length > 0) {
        TableUI = result.map(function (data, index) {
          return _react2.default.createElement(
            'tr',
            { key: 'row' + index, className: 'result-row' },
            data.map(function (item, index1) {
              return _react2.default.createElement(
                'td',
                { key: 'column' + index + index1 },
                item
              );
            })
          );
        });
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'nav',
          { className: 'navbar' },
          _react2.default.createElement(
            'a',
            { className: 'navbar-brand', href: '#' },
            'Generate Permutations for a String'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row text-center' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              'h4',
              null,
              'Enter the string'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement('input', { id: 'string-input-main', type: 'text', value: inputString, onChange: function onChange(e) {
                onChangeHandler(e.target.value);
              } }),
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-refresh', onClick: resetHandler })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              'button',
              { type: 'submit', className: 'btn btn-primary', onClick: onClickHandler },
              'Generate'
            )
          )
        ),
        result.length > 0 && _react2.default.createElement(
          'div',
          { className: 'container', id: 'results-container' },
          _react2.default.createElement(
            'h4',
            null,
            'Resulted Permutations'
          ),
          _react2.default.createElement(
            'table',
            { className: 'table table-stripped table-bordered' },
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement('tr', null)
            ),
            _react2.default.createElement(
              'tbody',
              null,
              TableUI
            )
          )
        )
      );
    }
  }]);

  return Permutation;
}(_react2.default.Component);

exports.default = Permutation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBlcm11dGF0aW9uIiwicHJvcHMiLCJyZXN1bHQiLCJpbnB1dFN0cmluZyIsIm9uQ2hhbmdlSGFuZGxlciIsIm9uQ2xpY2tIYW5kbGVyIiwicmVzZXRIYW5kbGVyIiwiVGFibGVVSSIsImxlbmd0aCIsIm1hcCIsImRhdGEiLCJpbmRleCIsIml0ZW0iLCJpbmRleDEiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7O0FBQ2pCLHVCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEscUhBQ1ZBLEtBRFU7QUFFakI7Ozs7NkJBR087QUFBQSxtQkFPRCxLQUFLQSxLQVBKO0FBQUEsVUFFSkMsTUFGSSxVQUVKQSxNQUZJO0FBQUEsVUFHSkMsV0FISSxVQUdKQSxXQUhJO0FBQUEsVUFJSkMsZUFKSSxVQUlKQSxlQUpJO0FBQUEsVUFLSkMsY0FMSSxVQUtKQSxjQUxJO0FBQUEsVUFNSkMsWUFOSSxVQU1KQSxZQU5JOzs7QUFVTCxVQUFJQyxVQUFXLHlDQUFmO0FBQ0MsVUFBR0wsT0FBT00sTUFBUCxHQUFjLENBQWpCLEVBQW1CO0FBQ2hCRCxrQkFBVUwsT0FBT08sR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFlO0FBQ2hDLGlCQUNHO0FBQUE7QUFBQSxjQUFJLEtBQU0sUUFBTUEsS0FBaEIsRUFBc0IsV0FBVSxZQUFoQztBQUNHRCxpQkFBS0QsR0FBTCxDQUFTLFVBQUNHLElBQUQsRUFBT0MsTUFBUCxFQUFnQjtBQUMxQixxQkFBTztBQUFBO0FBQUEsa0JBQUksS0FBSyxXQUFTRixLQUFULEdBQWVFLE1BQXhCO0FBQWlDRDtBQUFqQyxlQUFQO0FBQ0UsYUFGRDtBQURILFdBREg7QUFRSCxTQVRTLENBQVY7QUFVSDs7QUFHRixhQUNBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFHLFdBQVUsY0FBYixFQUE0QixNQUFLLEdBQWpDO0FBQUE7QUFBQTtBQURGLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGlCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBREY7QUFJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDRSxxREFBTyxJQUFHLG1CQUFWLEVBQThCLE1BQUssTUFBbkMsRUFBMEMsT0FBT1QsV0FBakQsRUFBOEQsVUFBVyxrQkFBQ1csQ0FBRCxFQUFLO0FBQUNWLGdDQUFnQlUsRUFBRUMsTUFBRixDQUFTQyxLQUF6QjtBQUFnQyxlQUEvRyxHQURGO0FBRUUsb0RBQU0sV0FBVSw2QkFBaEIsRUFBOEMsU0FBU1YsWUFBdkQ7QUFGRixXQUpGO0FBUUU7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGlCQUFoQyxFQUFrRCxTQUFTRCxjQUEzRDtBQUFBO0FBQUE7QUFERjtBQVJGLFNBSkY7QUFrQkdILGVBQU9NLE1BQVAsR0FBYyxDQUFkLElBQWlCO0FBQUE7QUFBQSxZQUFLLFdBQVUsV0FBZixFQUEyQixJQUFHLG1CQUE5QjtBQUNoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGdCO0FBRWhCO0FBQUE7QUFBQSxjQUFPLFdBQVUscUNBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFERixhQURGO0FBS0E7QUFBQTtBQUFBO0FBQ0dEO0FBREg7QUFMQTtBQUZnQjtBQWxCcEIsT0FEQTtBQWlDRDs7OztFQWhFb0MsZ0JBQU1VLFM7O2tCQUExQmpCLFciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcm11dGF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIFxuICAgIHJlbmRlcigpe1xuICAgICAgY29uc3Qge1xuICAgICAgICByZXN1bHQsXG4gICAgICAgIGlucHV0U3RyaW5nLFxuICAgICAgICBvbkNoYW5nZUhhbmRsZXIsXG4gICAgICAgIG9uQ2xpY2tIYW5kbGVyLFxuICAgICAgICByZXNldEhhbmRsZXJcbiAgICAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICBcbiAgICAgICBsZXQgVGFibGVVSSA9ICg8dHI+PC90cj4pXG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGg+MCl7XG4gICAgICAgICAgIFRhYmxlVUkgPSByZXN1bHQubWFwKChkYXRhLCBpbmRleCk9PntcbiAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9IHsncm93JytpbmRleH1jbGFzc05hbWU9XCJyZXN1bHQtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgxKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oPHRkIGtleT17J2NvbHVtbicraW5kZXgraW5kZXgxfT57aXRlbX08L3RkPikgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICB9KVxuICAgICAgIH1cbiAgICAgIFxuXG4gICAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+R2VuZXJhdGUgUGVybXV0YXRpb25zIGZvciBhIFN0cmluZzwvYT5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgIDxoND5FbnRlciB0aGUgc3RyaW5nPC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwic3RyaW5nLWlucHV0LW1haW5cIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbnB1dFN0cmluZ30gb25DaGFuZ2U9IHsoZSk9PntvbkNoYW5nZUhhbmRsZXIoZS50YXJnZXQudmFsdWUpfX0vPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoXCIgb25DbGljaz17cmVzZXRIYW5kbGVyfT48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICBHZW5lcmF0ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7cmVzdWx0Lmxlbmd0aD4wJiY8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGlkPVwicmVzdWx0cy1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDQ+UmVzdWx0ZWQgUGVybXV0YXRpb25zPC9oND5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBwZWQgdGFibGUtYm9yZGVyZWRcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge1RhYmxlVUl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2Pn1cbiAgICA8L2Rpdj5cbilcbiAgICB9XG59XG5cbiJdfQ==