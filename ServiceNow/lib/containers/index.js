'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.onChangeHandler = _this.onChangeHandler.bind(_this);
        _this.onClickHandler = _this.onClickHandler.bind(_this);
        _this.swap = _this.swap.bind(_this);
        _this.Permutations = _this.Permutations.bind(_this);
        _this.resetHandler = _this.resetHandler.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'onChangeHandler',
        value: function onChangeHandler(value) {
            var actions = this.props.actions;

            actions.raiseAction(_actions.Actions.SET_INPUT, value);
        }
    }, {
        key: 'swap',
        value: function swap(a, i, j) {
            var temp = a[j];
            a[j] = a[i];
            a[i] = temp;
        }
    }, {
        key: 'Permutations',
        value: function Permutations(a, i, result) {
            var actions = this.props.actions;

            if (i === a.length) {
                result.push(a.join(''));
                return;
            }
            for (var j = i; j < a.length; j++) {
                this.swap(a, i, j);
                this.Permutations(a, i + 1, result);
                this.swap(a, i, j);
            }
        }
    }, {
        key: 'onClickHandler',
        value: function onClickHandler() {
            var _props = this.props,
                actions = _props.actions,
                inputString = _props.inputString;

            actions.raiseAction(_actions.Actions.RESET_DATA);
            if (inputString !== '') {
                var resultArray = [];
                this.Permutations(inputString.split(''), 0, resultArray);
                var manipulatedArray = new Array(inputString);
                var counter = 0;
                for (var i = 0; i < inputString.length; i++) {
                    var size = resultArray.length / inputString.length;
                    manipulatedArray[i] = new Array(size);
                    for (var j = 0; j < manipulatedArray[i].length; j++) {
                        manipulatedArray[i][j] = resultArray[counter];
                        counter++;
                    }
                }
                actions.raiseAction(_actions.Actions.SET_RESULT, manipulatedArray);
            }
        }
    }, {
        key: 'resetHandler',
        value: function resetHandler() {
            var actions = this.props.actions;

            actions.raiseAction(_actions.Actions.RESET_DATA);
            actions.raiseAction(_actions.Actions.RESET_INPUT);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                result = _props2.result,
                inputString = _props2.inputString;


            var props = {
                result: result,
                inputString: inputString,
                onChangeHandler: this.onChangeHandler,
                onClickHandler: this.onClickHandler,
                resetHandler: this.resetHandler
            };

            return _react2.default.cloneElement(this.props.children, props);
        }
    }]);

    return App;
}(_react.Component);

function mapStateToProps(state, ownProps) {
    return _extends({}, state, ownProps);
}

function mapDispatchToProps(dispatch, ownprops) {
    return {
        actions: (0, _redux.bindActionCreators)({
            raiseAction: _actions.raiseAction
        }, dispatch)
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwib25DaGFuZ2VIYW5kbGVyIiwiYmluZCIsIm9uQ2xpY2tIYW5kbGVyIiwic3dhcCIsIlBlcm11dGF0aW9ucyIsInJlc2V0SGFuZGxlciIsInZhbHVlIiwiYWN0aW9ucyIsInJhaXNlQWN0aW9uIiwiU0VUX0lOUFVUIiwiYSIsImkiLCJqIiwidGVtcCIsInJlc3VsdCIsImxlbmd0aCIsInB1c2giLCJqb2luIiwiaW5wdXRTdHJpbmciLCJSRVNFVF9EQVRBIiwicmVzdWx0QXJyYXkiLCJzcGxpdCIsIm1hbmlwdWxhdGVkQXJyYXkiLCJBcnJheSIsImNvdW50ZXIiLCJzaXplIiwiU0VUX1JFU1VMVCIsIlJFU0VUX0lOUFVUIiwiY2xvbmVFbGVtZW50IiwiY2hpbGRyZW4iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvd25wcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFLTUEsRzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDVEEsS0FEUzs7QUFFZixjQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsY0FBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRCxJQUFwQixPQUF0QjtBQUNBLGNBQUtFLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVGLElBQVYsT0FBWjtBQUNBLGNBQUtHLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkgsSUFBbEIsT0FBcEI7QUFDQSxjQUFLSSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JKLElBQWxCLE9BQXBCO0FBTmU7QUFPbEI7Ozs7d0NBRWVLLEssRUFBTztBQUFBLGdCQUNYQyxPQURXLEdBQ0Es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QVQsQ0FBeUJDLEtBQXpCLEVBQWdDQyxRQUFoQyxFQUEwQztBQUN0Qyx3QkFDS0QsS0FETCxFQUVLQyxRQUZMO0FBSUg7O0FBRUQsU0FBU0Msa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDQyxRQUF0QyxFQUFnRDtBQUM1QyxXQUFPO0FBQ0g1QixpQkFBUywrQkFBbUI7QUFDMUJDO0FBRDBCLFNBQW5CLEVBRU4wQixRQUZNO0FBRE4sS0FBUDtBQUtIOztrQkFFYyx5QkFBUUosZUFBUixFQUF5Qkcsa0JBQXpCLEVBQTZDbkMsR0FBN0MsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQge1xuICBBY3Rpb25zLFxuICByYWlzZUFjdGlvblxufSBmcm9tICcuLi9hY3Rpb25zJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5vbkNoYW5nZUhhbmRsZXIgPSB0aGlzLm9uQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpXG4gICAgICB0aGlzLm9uQ2xpY2tIYW5kbGVyID0gdGhpcy5vbkNsaWNrSGFuZGxlci5iaW5kKHRoaXMpXG4gICAgICB0aGlzLnN3YXAgPSB0aGlzLnN3YXAuYmluZCh0aGlzKVxuICAgICAgdGhpcy5QZXJtdXRhdGlvbnMgPSB0aGlzLlBlcm11dGF0aW9ucy5iaW5kKHRoaXMpXG4gICAgICB0aGlzLnJlc2V0SGFuZGxlciA9IHRoaXMucmVzZXRIYW5kbGVyLmJpbmQodGhpcylcbiAgfVxuXG4gIG9uQ2hhbmdlSGFuZGxlcih2YWx1ZSkge1xuICAgICAgY29uc3QgeyBhY3Rpb25zfSA9IHRoaXMucHJvcHNcbiAgICAgIGFjdGlvbnMucmFpc2VBY3Rpb24oQWN0aW9ucy5TRVRfSU5QVVQsIHZhbHVlKVxuICB9XG5cbiAgc3dhcChhLCBpLCBqKXsgXG4gICAgICAgIHZhciB0ZW1wID0gYVtqXTtcbiAgICAgICAgYVtqXT1hW2ldO1xuICAgICAgICBhW2ldPSB0ZW1wXG4gIH07XG5cblxuICBQZXJtdXRhdGlvbnMoYSxpLHJlc3VsdCl7XG4gICAgICBjb25zdHsgICAgICBcbiAgICAgICAgICBhY3Rpb25zXG4gICAgICB9ID0gdGhpcy5wcm9wc1xuICAgICBpZihpPT09YS5sZW5ndGgpe1xuICAgICAgICByZXN1bHQucHVzaChhLmpvaW4oJycpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICB9IFxuICAgIGZvcihsZXQgaj0gaTsgajxhLmxlbmd0aDsgaisrKXtcbiAgICAgICAgdGhpcy5zd2FwKGEsaSxqKTtcbiAgICAgICAgdGhpcy5QZXJtdXRhdGlvbnMoYSxpKzEscmVzdWx0KTtcbiAgICAgICAgdGhpcy5zd2FwKGEsaSxqKVxuICAgICAgICB9XG4gICAgfVxuICBcblxuXG4gIG9uQ2xpY2tIYW5kbGVyKCkge1xuICAgIGNvbnN0IHsgYWN0aW9ucywgaW5wdXRTdHJpbmcgfSA9IHRoaXMucHJvcHNcbiAgICBhY3Rpb25zLnJhaXNlQWN0aW9uKEFjdGlvbnMuUkVTRVRfREFUQSlcbiAgICBpZihpbnB1dFN0cmluZyE9PScnKXtcbiAgICAgICAgIHZhciByZXN1bHRBcnJheSA9IFtdXG4gICAgICB0aGlzLlBlcm11dGF0aW9ucyhpbnB1dFN0cmluZy5zcGxpdCgnJyksMCxyZXN1bHRBcnJheSlcbiAgICAgIHZhciBtYW5pcHVsYXRlZEFycmF5ID0gbmV3IEFycmF5KGlucHV0U3RyaW5nKVxuICAgICAgbGV0IGNvdW50ZXI9IDA7XG4gICAgICBmb3IgKGxldCBpID0wOyBpPCBpbnB1dFN0cmluZy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgbGV0IHNpemU9IHJlc3VsdEFycmF5Lmxlbmd0aC9pbnB1dFN0cmluZy5sZW5ndGhcbiAgICAgICAgICBtYW5pcHVsYXRlZEFycmF5W2ldID0gbmV3IEFycmF5KHNpemUpIFxuICAgICAgICAgIGZvcihsZXQgaj0wOyBqPG1hbmlwdWxhdGVkQXJyYXlbaV0ubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICAgbWFuaXB1bGF0ZWRBcnJheVtpXVtqXT0gcmVzdWx0QXJyYXlbY291bnRlcl07XG4gICAgICAgICAgICAgY291bnRlcisrOyBcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBhY3Rpb25zLnJhaXNlQWN0aW9uKEFjdGlvbnMuU0VUX1JFU1VMVCwgbWFuaXB1bGF0ZWRBcnJheSlcbiAgICB9XG4gIH1cblxuIHJlc2V0SGFuZGxlcigpe1xuICAgICBjb25zdCB7IGFjdGlvbnN9ID0gdGhpcy5wcm9wc1xuICAgICBhY3Rpb25zLnJhaXNlQWN0aW9uKEFjdGlvbnMuUkVTRVRfREFUQSlcbiAgICAgYWN0aW9ucy5yYWlzZUFjdGlvbihBY3Rpb25zLlJFU0VUX0lOUFVUKVxuIH1cblxuICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgaW5wdXRTdHJpbmdcbiAgICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICByZXN1bHQsXG4gICAgICAgIGlucHV0U3RyaW5nLFxuICAgICAgICBvbkNoYW5nZUhhbmRsZXI6IHRoaXMub25DaGFuZ2VIYW5kbGVyLFxuICAgICAgICBvbkNsaWNrSGFuZGxlcjogdGhpcy5vbkNsaWNrSGFuZGxlcixcbiAgICAgICAgcmVzZXRIYW5kbGVyOiB0aGlzLnJlc2V0SGFuZGxlclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHByb3BzKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICAuLi5vd25Qcm9wc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25wcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyh7XG4gICAgICAgICAgcmFpc2VBY3Rpb25cbiAgICAgICAgfSwgZGlzcGF0Y2gpXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcbiJdfQ==