'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/benoit/Development/rxjs-challenge/src/components/Simulation.js';


var ANIMATION_SIZE = 700;
var ROAD_WIDTH = 160;
var SIDEWAY_WIDTH = 40;
var CROSSWALK_WIDTH = 80;
var CROSSWALK_LINES_COUNT = 5;
var CROSSROAD_LINES_GAP_RATIO = 2;
var CROSSWALK_OFFSET = 10;
var MARKINGS_WIDTH = 5;
var MARKINGS_LENGTH = 15;
var MARKINGS_LINES_GAP_RATIO = 3;
var BACKGROUND_COLOR = '#617B4B';
var ROAD_COLOR = '#969593';
var SIDEWAY_COLOR = '#5F717D';
var MARKINGS_COLOR = '#FFFFFF';

/**
 * Draw the crossroad.
 */
function drawCrossroad(context) {
  // Draw the background
  context.fillStyle = BACKGROUND_COLOR;
  context.fillRect(0, 0, ANIMATION_SIZE, ANIMATION_SIZE);

  // Draw the sidewaw
  context.fillStyle = SIDEWAY_COLOR;
  context.fillRect(0, (ANIMATION_SIZE - ROAD_WIDTH - 2 * SIDEWAY_WIDTH) / 2, ANIMATION_SIZE, ROAD_WIDTH + 2 * SIDEWAY_WIDTH);
  context.fillRect((ANIMATION_SIZE - ROAD_WIDTH - 2 * SIDEWAY_WIDTH) / 2, 0, ROAD_WIDTH + 2 * SIDEWAY_WIDTH, ANIMATION_SIZE);

  // Draw the road
  context.fillStyle = ROAD_COLOR;
  context.fillRect(0, (ANIMATION_SIZE - ROAD_WIDTH) / 2, ANIMATION_SIZE, ROAD_WIDTH);
  context.fillRect((ANIMATION_SIZE - ROAD_WIDTH) / 2, 0, ROAD_WIDTH, ANIMATION_SIZE);

  // Draw the crosswalks
  var lineWidth = CROSSROAD_LINES_GAP_RATIO * ROAD_WIDTH / (CROSSROAD_LINES_GAP_RATIO * CROSSWALK_LINES_COUNT + CROSSWALK_LINES_COUNT + 1);
  var lineGap = lineWidth / CROSSROAD_LINES_GAP_RATIO;

  context.lineWidth = lineWidth;
  context.strokeStyle = MARKINGS_COLOR;
  var crosswalkLeft = (0, _ramda.map)(function (idx) {
    return [(ANIMATION_SIZE - ROAD_WIDTH) / 2 - CROSSWALK_WIDTH - CROSSWALK_OFFSET, (ANIMATION_SIZE - ROAD_WIDTH) / 2 + lineWidth / 2 + lineGap + (lineWidth + lineGap) * idx, (ANIMATION_SIZE - ROAD_WIDTH) / 2 - CROSSWALK_OFFSET, (ANIMATION_SIZE - ROAD_WIDTH) / 2 + lineWidth / 2 + lineGap + (lineWidth + lineGap) * idx];
  }, (0, _ramda.range)(0, CROSSWALK_LINES_COUNT));
  var crosswalkRight = (0, _ramda.map)(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 4),
        x1 = _ref2[0],
        y1 = _ref2[1],
        x2 = _ref2[2],
        y2 = _ref2[3];

    return [x2 + ROAD_WIDTH + 2 * CROSSWALK_OFFSET, y1, x2 + CROSSWALK_WIDTH + ROAD_WIDTH + 2 * CROSSWALK_OFFSET, y2];
  }, crosswalkLeft);
  var crosswalkTop = (0, _ramda.map)(function (_ref3) {
    var _ref4 = (0, _slicedToArray3.default)(_ref3, 4),
        x1 = _ref4[0],
        y1 = _ref4[1],
        x2 = _ref4[2],
        y2 = _ref4[3];

    return [y1, x1, y2, x2];
  }, crosswalkLeft);
  var crosswalkBottom = (0, _ramda.map)(function (_ref5) {
    var _ref6 = (0, _slicedToArray3.default)(_ref5, 4),
        x1 = _ref6[0],
        y1 = _ref6[1],
        x2 = _ref6[2],
        y2 = _ref6[3];

    return [y1, x1, y2, x2];
  }, crosswalkRight);

  var crosswalk = (0, _ramda.reduce)(_ramda.concat, [], [crosswalkLeft, crosswalkRight, crosswalkTop, crosswalkBottom]);
  crosswalk.forEach(function (_ref7) {
    var _ref8 = (0, _slicedToArray3.default)(_ref7, 4),
        x1 = _ref8[0],
        y1 = _ref8[1],
        x2 = _ref8[2],
        y2 = _ref8[3];

    console.log('drawing ' + x1 + ',' + y1 + ' ' + x2 + ',' + y2);
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  });

  // draw the markings
  context.lineWidth = MARKINGS_WIDTH;
  context.strokeStyle = MARKINGS_COLOR;
  context.setLineDash([MARKINGS_LENGTH, MARKINGS_LENGTH / MARKINGS_LINES_GAP_RATIO]);

  var markingsLeft = [[0, ANIMATION_SIZE / 2, (ANIMATION_SIZE - ROAD_WIDTH) / 2 - CROSSWALK_WIDTH - 2 * CROSSWALK_OFFSET, ANIMATION_SIZE / 2]];
  var markingsRight = (0, _ramda.map)(function (_ref9) {
    var _ref10 = (0, _slicedToArray3.default)(_ref9, 4),
        x1 = _ref10[0],
        y1 = _ref10[1],
        x2 = _ref10[2],
        y2 = _ref10[3];

    return [ANIMATION_SIZE - x2, y1, ANIMATION_SIZE, y2];
  }, markingsLeft);
  var markingsTop = (0, _ramda.map)(function (_ref11) {
    var _ref12 = (0, _slicedToArray3.default)(_ref11, 4),
        x1 = _ref12[0],
        y1 = _ref12[1],
        x2 = _ref12[2],
        y2 = _ref12[3];

    return [y1, x1, y2, x2];
  }, markingsLeft);
  var markingsBottom = (0, _ramda.map)(function (_ref13) {
    var _ref14 = (0, _slicedToArray3.default)(_ref13, 4),
        x1 = _ref14[0],
        y1 = _ref14[1],
        x2 = _ref14[2],
        y2 = _ref14[3];

    return [y1, x1, y2, x2];
  }, markingsRight);

  var markings = (0, _ramda.reduce)(_ramda.concat, [], [markingsLeft, markingsRight, markingsTop, markingsBottom]);
  markings.forEach(function (_ref15) {
    var _ref16 = (0, _slicedToArray3.default)(_ref15, 4),
        x1 = _ref16[0],
        y1 = _ref16[1],
        x2 = _ref16[2],
        y2 = _ref16[3];

    console.log('drawing ' + x1 + ',' + y1 + ' ' + x2 + ',' + y2);
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  });
}

var Simulation = function (_React$Component) {
  (0, _inherits3.default)(Simulation, _React$Component);

  function Simulation() {
    (0, _classCallCheck3.default)(this, Simulation);

    return (0, _possibleConstructorReturn3.default)(this, (Simulation.__proto__ || (0, _getPrototypeOf2.default)(Simulation)).apply(this, arguments));
  }

  (0, _createClass3.default)(Simulation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var context = this.canvas.getContext('2d');
      drawCrossroad(context);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('canvas', { width: ANIMATION_SIZE, height: ANIMATION_SIZE, ref: function ref(c) {
          return _this2.canvas = c;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      });
    }
  }]);

  return Simulation;
}(_react2.default.Component);

exports.default = Simulation;