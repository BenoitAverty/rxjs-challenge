webpackHotUpdate(5,{

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _slicedToArray2 = __webpack_require__(96);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _ramda = __webpack_require__(660);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/benoit/Development/rxjs-challenge/src/components/Simulation.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/benoit/Development/rxjs-challenge/src/components/Simulation.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yMmNhYWNlZDUxMDRkM2IzNjAzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaW11bGF0aW9uLmpzP2MzYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtyYW5nZSwgbWFwLCBjb25jYXQscmVkdWNlfSBmcm9tICdyYW1kYSdcblxuY29uc3QgQU5JTUFUSU9OX1NJWkUgPSA3MDBcbmNvbnN0IFJPQURfV0lEVEggPSAxNjBcbmNvbnN0IFNJREVXQVlfV0lEVEggPSA0MFxuY29uc3QgQ1JPU1NXQUxLX1dJRFRIID0gODBcbmNvbnN0IENST1NTV0FMS19MSU5FU19DT1VOVCA9IDVcbmNvbnN0IENST1NTUk9BRF9MSU5FU19HQVBfUkFUSU8gPSAyXG5jb25zdCBDUk9TU1dBTEtfT0ZGU0VUID0gMTBcbmNvbnN0IE1BUktJTkdTX1dJRFRIID0gNVxuY29uc3QgTUFSS0lOR1NfTEVOR1RIID0gMTVcbmNvbnN0IE1BUktJTkdTX0xJTkVTX0dBUF9SQVRJTyA9IDNcbmNvbnN0IEJBQ0tHUk9VTkRfQ09MT1IgPSAnIzYxN0I0QidcbmNvbnN0IFJPQURfQ09MT1IgPSAnIzk2OTU5MydcbmNvbnN0IFNJREVXQVlfQ09MT1IgPSAnIzVGNzE3RCdcbmNvbnN0IE1BUktJTkdTX0NPTE9SID0gJyNGRkZGRkYnXG5cbi8qKlxuICogRHJhdyB0aGUgY3Jvc3Nyb2FkLlxuICovXG5mdW5jdGlvbiBkcmF3Q3Jvc3Nyb2FkKGNvbnRleHQpIHtcbiAgLy8gRHJhdyB0aGUgYmFja2dyb3VuZFxuICBjb250ZXh0LmZpbGxTdHlsZSA9IEJBQ0tHUk9VTkRfQ09MT1JcbiAgY29udGV4dC5maWxsUmVjdCgwLDAsQU5JTUFUSU9OX1NJWkUsQU5JTUFUSU9OX1NJWkUpXG5cbiAgLy8gRHJhdyB0aGUgc2lkZXdhd1xuICBjb250ZXh0LmZpbGxTdHlsZSA9IFNJREVXQVlfQ09MT1JcbiAgY29udGV4dC5maWxsUmVjdCgwLCAoQU5JTUFUSU9OX1NJWkUtUk9BRF9XSURUSC0yKlNJREVXQVlfV0lEVEgpIC8gMiwgQU5JTUFUSU9OX1NJWkUsIFJPQURfV0lEVEggKyAyKlNJREVXQVlfV0lEVEgpXG4gIGNvbnRleHQuZmlsbFJlY3QoKEFOSU1BVElPTl9TSVpFLVJPQURfV0lEVEgtMipTSURFV0FZX1dJRFRIKSAvIDIsIDAsIFJPQURfV0lEVEggKyAyKlNJREVXQVlfV0lEVEgsIEFOSU1BVElPTl9TSVpFKVxuXG4gIC8vIERyYXcgdGhlIHJvYWRcbiAgY29udGV4dC5maWxsU3R5bGUgPSBST0FEX0NPTE9SXG4gIGNvbnRleHQuZmlsbFJlY3QoMCwgKEFOSU1BVElPTl9TSVpFLVJPQURfV0lEVEgpIC8gMiwgQU5JTUFUSU9OX1NJWkUsIFJPQURfV0lEVEgpXG4gIGNvbnRleHQuZmlsbFJlY3QoKEFOSU1BVElPTl9TSVpFLVJPQURfV0lEVEgpIC8gMiwgMCwgUk9BRF9XSURUSCwgQU5JTUFUSU9OX1NJWkUpXG5cbiAgLy8gRHJhdyB0aGUgY3Jvc3N3YWxrc1xuICBjb25zdCBsaW5lV2lkdGggPSAoQ1JPU1NST0FEX0xJTkVTX0dBUF9SQVRJTypST0FEX1dJRFRIKSAvIChDUk9TU1JPQURfTElORVNfR0FQX1JBVElPKkNST1NTV0FMS19MSU5FU19DT1VOVCtDUk9TU1dBTEtfTElORVNfQ09VTlQrMSlcbiAgY29uc3QgbGluZUdhcCA9IGxpbmVXaWR0aC9DUk9TU1JPQURfTElORVNfR0FQX1JBVElPXG5cbiAgY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGhcbiAgY29udGV4dC5zdHJva2VTdHlsZSA9IE1BUktJTkdTX0NPTE9SXG4gIGNvbnN0IGNyb3Nzd2Fsa0xlZnQgPSBtYXAoXG4gICAgaWR4ID0+IFtcbiAgICAgIChBTklNQVRJT05fU0laRS1ST0FEX1dJRFRIKSAvIDIgLSBDUk9TU1dBTEtfV0lEVEggLSBDUk9TU1dBTEtfT0ZGU0VULFxuICAgICAgKEFOSU1BVElPTl9TSVpFLVJPQURfV0lEVEgpIC8gMiArIGxpbmVXaWR0aC8yICsgbGluZUdhcCArIChsaW5lV2lkdGgrbGluZUdhcCkqaWR4LFxuICAgICAgKEFOSU1BVElPTl9TSVpFLVJPQURfV0lEVEgpIC8gMiAtIENST1NTV0FMS19PRkZTRVQsXG4gICAgICAoQU5JTUFUSU9OX1NJWkUtUk9BRF9XSURUSCkgLyAyICsgbGluZVdpZHRoLzIgKyBsaW5lR2FwICsgKGxpbmVXaWR0aCtsaW5lR2FwKSppZHgsXG4gICAgXSxcbiAgICByYW5nZSgwLCBDUk9TU1dBTEtfTElORVNfQ09VTlQpXG4gIClcbiAgY29uc3QgY3Jvc3N3YWxrUmlnaHQgPSBtYXAoKFt4MSwgeTEsIHgyLCB5Ml0pID0+IFt4MitST0FEX1dJRFRIKzIqQ1JPU1NXQUxLX09GRlNFVCwgeTEsIHgyK0NST1NTV0FMS19XSURUSCtST0FEX1dJRFRIKzIqQ1JPU1NXQUxLX09GRlNFVCwgeTJdLCBjcm9zc3dhbGtMZWZ0KVxuICBjb25zdCBjcm9zc3dhbGtUb3AgPSBtYXAoKFt4MSwgeTEsIHgyLCB5Ml0pID0+IChbeTEsIHgxLCB5MiwgeDJdKSwgY3Jvc3N3YWxrTGVmdClcbiAgY29uc3QgY3Jvc3N3YWxrQm90dG9tID0gbWFwKChbeDEsIHkxLCB4MiwgeTJdKSA9PiAoW3kxLCB4MSwgeTIsIHgyXSksIGNyb3Nzd2Fsa1JpZ2h0KVxuXG4gIGNvbnN0IGNyb3Nzd2FsayA9IHJlZHVjZShjb25jYXQsIFtdLCBbY3Jvc3N3YWxrTGVmdCwgY3Jvc3N3YWxrUmlnaHQsIGNyb3Nzd2Fsa1RvcCwgY3Jvc3N3YWxrQm90dG9tXSlcbiAgY3Jvc3N3YWxrLmZvckVhY2goXG4gICAgKFt4MSwgeTEsIHgyLCB5Ml0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBkcmF3aW5nICR7eDF9LCR7eTF9ICR7eDJ9LCR7eTJ9YClcbiAgICAgIGNvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgIGNvbnRleHQubW92ZVRvKHgxLCB5MSlcbiAgICAgIGNvbnRleHQubGluZVRvKHgyLCB5MilcbiAgICAgIGNvbnRleHQuc3Ryb2tlKClcbiAgICB9XG4gIClcblxuICAvLyBkcmF3IHRoZSBtYXJraW5nc1xuICBjb250ZXh0LmxpbmVXaWR0aCA9IE1BUktJTkdTX1dJRFRIXG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBNQVJLSU5HU19DT0xPUlxuICBjb250ZXh0LnNldExpbmVEYXNoKFtNQVJLSU5HU19MRU5HVEgsIE1BUktJTkdTX0xFTkdUSC9NQVJLSU5HU19MSU5FU19HQVBfUkFUSU9dKVxuXG4gIGNvbnN0IG1hcmtpbmdzTGVmdCA9IFtbMCwgQU5JTUFUSU9OX1NJWkUvMiwgKEFOSU1BVElPTl9TSVpFLVJPQURfV0lEVEgpIC8gMiAtIENST1NTV0FMS19XSURUSCAtIDIqQ1JPU1NXQUxLX09GRlNFVCwgQU5JTUFUSU9OX1NJWkUvMl1dXG4gIGNvbnN0IG1hcmtpbmdzUmlnaHQgPSBtYXAoKFt4MSwgeTEsIHgyLCB5Ml0pID0+IFtBTklNQVRJT05fU0laRS14MiwgeTEsIEFOSU1BVElPTl9TSVpFLCB5Ml0sIG1hcmtpbmdzTGVmdClcbiAgY29uc3QgbWFya2luZ3NUb3AgPSBtYXAoKFt4MSwgeTEsIHgyLCB5Ml0pID0+IChbeTEsIHgxLCB5MiwgeDJdKSwgbWFya2luZ3NMZWZ0KVxuICBjb25zdCBtYXJraW5nc0JvdHRvbSA9IG1hcCgoW3gxLCB5MSwgeDIsIHkyXSkgPT4gKFt5MSwgeDEsIHkyLCB4Ml0pLCBtYXJraW5nc1JpZ2h0KVxuXG4gIGNvbnN0IG1hcmtpbmdzID0gcmVkdWNlKGNvbmNhdCwgW10sIFttYXJraW5nc0xlZnQsIG1hcmtpbmdzUmlnaHQsIG1hcmtpbmdzVG9wLCBtYXJraW5nc0JvdHRvbV0pXG4gIG1hcmtpbmdzLmZvckVhY2goXG4gICAgKFt4MSwgeTEsIHgyLCB5Ml0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBkcmF3aW5nICR7eDF9LCR7eTF9ICR7eDJ9LCR7eTJ9YClcbiAgICAgIGNvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgIGNvbnRleHQubW92ZVRvKHgxLCB5MSlcbiAgICAgIGNvbnRleHQubGluZVRvKHgyLCB5MilcbiAgICAgIGNvbnRleHQuc3Ryb2tlKClcbiAgICB9XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgZHJhd0Nyb3Nzcm9hZChjb250ZXh0KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Y2FudmFzIHdpZHRoPXtBTklNQVRJT05fU0laRX0gaGVpZ2h0PXtBTklNQVRJT05fU0laRX0gcmVmPXtjID0+IHRoaXMuY2FudmFzID0gY30+PC9jYW52YXM+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NpbXVsYXRpb24uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUE7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7Ozs7O0FBUkE7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=