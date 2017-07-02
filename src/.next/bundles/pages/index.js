
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(859);

var _Layout2 = _interopRequireDefault(_Layout);

var _Simulation = __webpack_require__(860);

var _Simulation2 = _interopRequireDefault(_Simulation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/benoit/Development/rxjs-challenge/src/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_Simulation2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/benoit/Development/rxjs-challenge/src/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/benoit/Development/rxjs-challenge/src/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/benoit/Development/rxjs-challenge/src/components/Layout.js";

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, _react2.default.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, "RxJS challenge")), _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, children));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/benoit/Development/rxjs-challenge/src/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/benoit/Development/rxjs-challenge/src/components/Layout.js"); } } })();

/***/ }),

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

/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(659);


/***/ })

},[861]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzg2MjUyMzkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanM/ODYyNTIzOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpbXVsYXRpb24uanM/ODYyNTIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnY29tcG9uZW50cy9TaW11bGF0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPFNpbXVsYXRpb24gLz5cbiAgPC9MYXlvdXQ+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdj5cbiAgICA8aGVhZGVyPjxoMT5SeEpTIGNoYWxsZW5nZTwvaDE+PC9oZWFkZXI+XG4gICAgPGRpdj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7cmFuZ2UsIG1hcCwgY29uY2F0LHJlZHVjZX0gZnJvbSAncmFtZGEnXG5cbmNvbnN0IEFOSU1BVElPTl9TSVpFID0gNzAwXG5jb25zdCBST0FEX1dJRFRIID0gMTYwXG5jb25zdCBTSURFV0FZX1dJRFRIID0gNDBcbmNvbnN0IENST1NTV0FMS19XSURUSCA9IDgwXG5jb25zdCBDUk9TU1dBTEtfTElORVNfQ09VTlQgPSA1XG5jb25zdCBDUk9TU1JPQURfTElORVNfR0FQX1JBVElPID0gMlxuY29uc3QgQ1JPU1NXQUxLX09GRlNFVCA9IDEwXG5jb25zdCBNQVJLSU5HU19XSURUSCA9IDVcbmNvbnN0IE1BUktJTkdTX0xFTkdUSCA9IDE1XG5jb25zdCBNQVJLSU5HU19MSU5FU19HQVBfUkFUSU8gPSAzXG5jb25zdCBCQUNLR1JPVU5EX0NPTE9SID0gJyM2MTdCNEInXG5jb25zdCBST0FEX0NPTE9SID0gJyM5Njk1OTMnXG5jb25zdCBTSURFV0FZX0NPTE9SID0gJyM1RjcxN0QnXG5jb25zdCBNQVJLSU5HU19DT0xPUiA9ICcjRkZGRkZGJ1xuXG4vKipcbiAqIERyYXcgdGhlIGNyb3Nzcm9hZC5cbiAqL1xuZnVuY3Rpb24gZHJhd0Nyb3Nzcm9hZChjb250ZXh0KSB7XG4gIC8vIERyYXcgdGhlIGJhY2tncm91bmRcbiAgY29udGV4dC5maWxsU3R5bGUgPSBCQUNLR1JPVU5EX0NPTE9SXG4gIGNvbnRleHQuZmlsbFJlY3QoMCwwLEFOSU1BVElPTl9TSVpFLEFOSU1BVElPTl9TSVpFKVxuXG4gIC8vIERyYXcgdGhlIHNpZGV3YXdcbiAgY29udGV4dC5maWxsU3R5bGUgPSBTSURFV0FZX0NPTE9SXG4gIGNvbnRleHQuZmlsbFJlY3QoMCwgKEFOSU1BVElPTl9TSVpFLVJPQURfV0lEVEgtMipTSURFV0FZX1dJRFRIKSAvIDIsIEFOSU1BVElPTl9TSVpFLCBST0FEX1dJRFRIICsgMipTSURFV0FZX1dJRFRIKVxuICBjb250ZXh0LmZpbGxSZWN0KChBTklNQVRJT05fU0laRS1ST0FEX1dJRFRILTIqU0lERVdBWV9XSURUSCkgLyAyLCAwLCBST0FEX1dJRFRIICsgMipTSURFV0FZX1dJRFRILCBBTklNQVRJT05fU0laRSlcblxuICAvLyBEcmF3IHRoZSByb2FkXG4gIGNvbnRleHQuZmlsbFN0eWxlID0gUk9BRF9DT0xPUlxuICBjb250ZXh0LmZpbGxSZWN0KDAsIChBTklNQVRJT05fU0laRS1ST0FEX1dJRFRIKSAvIDIsIEFOSU1BVElPTl9TSVpFLCBST0FEX1dJRFRIKVxuICBjb250ZXh0LmZpbGxSZWN0KChBTklNQVRJT05fU0laRS1ST0FEX1dJRFRIKSAvIDIsIDAsIFJPQURfV0lEVEgsIEFOSU1BVElPTl9TSVpFKVxuXG4gIC8vIERyYXcgdGhlIGNyb3Nzd2Fsa3NcbiAgY29uc3QgbGluZVdpZHRoID0gKENST1NTUk9BRF9MSU5FU19HQVBfUkFUSU8qUk9BRF9XSURUSCkgLyAoQ1JPU1NST0FEX0xJTkVTX0dBUF9SQVRJTypDUk9TU1dBTEtfTElORVNfQ09VTlQrQ1JPU1NXQUxLX0xJTkVTX0NPVU5UKzEpXG4gIGNvbnN0IGxpbmVHYXAgPSBsaW5lV2lkdGgvQ1JPU1NST0FEX0xJTkVTX0dBUF9SQVRJT1xuXG4gIGNvbnRleHQubGluZVdpZHRoID0gbGluZVdpZHRoXG4gIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBNQVJLSU5HU19DT0xPUlxuICBjb25zdCBjcm9zc3dhbGtMZWZ0ID0gbWFwKFxuICAgIGlkeCA9PiBbXG4gICAgICAoQU5JTUFUSU9OX1NJWkUtUk9BRF9XSURUSCkgLyAyIC0gQ1JPU1NXQUxLX1dJRFRIIC0gQ1JPU1NXQUxLX09GRlNFVCxcbiAgICAgIChBTklNQVRJT05fU0laRS1ST0FEX1dJRFRIKSAvIDIgKyBsaW5lV2lkdGgvMiArIGxpbmVHYXAgKyAobGluZVdpZHRoK2xpbmVHYXApKmlkeCxcbiAgICAgIChBTklNQVRJT05fU0laRS1ST0FEX1dJRFRIKSAvIDIgLSBDUk9TU1dBTEtfT0ZGU0VULFxuICAgICAgKEFOSU1BVElPTl9TSVpFLVJPQURfV0lEVEgpIC8gMiArIGxpbmVXaWR0aC8yICsgbGluZUdhcCArIChsaW5lV2lkdGgrbGluZUdhcCkqaWR4LFxuICAgIF0sXG4gICAgcmFuZ2UoMCwgQ1JPU1NXQUxLX0xJTkVTX0NPVU5UKVxuICApXG4gIGNvbnN0IGNyb3Nzd2Fsa1JpZ2h0ID0gbWFwKChbeDEsIHkxLCB4MiwgeTJdKSA9PiBbeDIrUk9BRF9XSURUSCsyKkNST1NTV0FMS19PRkZTRVQsIHkxLCB4MitDUk9TU1dBTEtfV0lEVEgrUk9BRF9XSURUSCsyKkNST1NTV0FMS19PRkZTRVQsIHkyXSwgY3Jvc3N3YWxrTGVmdClcbiAgY29uc3QgY3Jvc3N3YWxrVG9wID0gbWFwKChbeDEsIHkxLCB4MiwgeTJdKSA9PiAoW3kxLCB4MSwgeTIsIHgyXSksIGNyb3Nzd2Fsa0xlZnQpXG4gIGNvbnN0IGNyb3Nzd2Fsa0JvdHRvbSA9IG1hcCgoW3gxLCB5MSwgeDIsIHkyXSkgPT4gKFt5MSwgeDEsIHkyLCB4Ml0pLCBjcm9zc3dhbGtSaWdodClcblxuICBjb25zdCBjcm9zc3dhbGsgPSByZWR1Y2UoY29uY2F0LCBbXSwgW2Nyb3Nzd2Fsa0xlZnQsIGNyb3Nzd2Fsa1JpZ2h0LCBjcm9zc3dhbGtUb3AsIGNyb3Nzd2Fsa0JvdHRvbV0pXG4gIGNyb3Nzd2Fsay5mb3JFYWNoKFxuICAgIChbeDEsIHkxLCB4MiwgeTJdKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgZHJhd2luZyAke3gxfSwke3kxfSAke3gyfSwke3kyfWApXG4gICAgICBjb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgICBjb250ZXh0Lm1vdmVUbyh4MSwgeTEpXG4gICAgICBjb250ZXh0LmxpbmVUbyh4MiwgeTIpXG4gICAgICBjb250ZXh0LnN0cm9rZSgpXG4gICAgfVxuICApXG5cbiAgLy8gZHJhdyB0aGUgbWFya2luZ3NcbiAgY29udGV4dC5saW5lV2lkdGggPSBNQVJLSU5HU19XSURUSFxuICBjb250ZXh0LnN0cm9rZVN0eWxlID0gTUFSS0lOR1NfQ09MT1JcbiAgY29udGV4dC5zZXRMaW5lRGFzaChbTUFSS0lOR1NfTEVOR1RILCBNQVJLSU5HU19MRU5HVEgvTUFSS0lOR1NfTElORVNfR0FQX1JBVElPXSlcblxuICBjb25zdCBtYXJraW5nc0xlZnQgPSBbWzAsIEFOSU1BVElPTl9TSVpFLzIsIChBTklNQVRJT05fU0laRS1ST0FEX1dJRFRIKSAvIDIgLSBDUk9TU1dBTEtfV0lEVEggLSAyKkNST1NTV0FMS19PRkZTRVQsIEFOSU1BVElPTl9TSVpFLzJdXVxuICBjb25zdCBtYXJraW5nc1JpZ2h0ID0gbWFwKChbeDEsIHkxLCB4MiwgeTJdKSA9PiBbQU5JTUFUSU9OX1NJWkUteDIsIHkxLCBBTklNQVRJT05fU0laRSwgeTJdLCBtYXJraW5nc0xlZnQpXG4gIGNvbnN0IG1hcmtpbmdzVG9wID0gbWFwKChbeDEsIHkxLCB4MiwgeTJdKSA9PiAoW3kxLCB4MSwgeTIsIHgyXSksIG1hcmtpbmdzTGVmdClcbiAgY29uc3QgbWFya2luZ3NCb3R0b20gPSBtYXAoKFt4MSwgeTEsIHgyLCB5Ml0pID0+IChbeTEsIHgxLCB5MiwgeDJdKSwgbWFya2luZ3NSaWdodClcblxuICBjb25zdCBtYXJraW5ncyA9IHJlZHVjZShjb25jYXQsIFtdLCBbbWFya2luZ3NMZWZ0LCBtYXJraW5nc1JpZ2h0LCBtYXJraW5nc1RvcCwgbWFya2luZ3NCb3R0b21dKVxuICBtYXJraW5ncy5mb3JFYWNoKFxuICAgIChbeDEsIHkxLCB4MiwgeTJdKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgZHJhd2luZyAke3gxfSwke3kxfSAke3gyfSwke3kyfWApXG4gICAgICBjb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgICBjb250ZXh0Lm1vdmVUbyh4MSwgeTEpXG4gICAgICBjb250ZXh0LmxpbmVUbyh4MiwgeTIpXG4gICAgICBjb250ZXh0LnN0cm9rZSgpXG4gICAgfVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGRyYXdDcm9zc3JvYWQoY29udGV4dClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGNhbnZhcyB3aWR0aD17QU5JTUFUSU9OX1NJWkV9IGhlaWdodD17QU5JTUFUSU9OX1NJWkV9IHJlZj17YyA9PiB0aGlzLmNhbnZhcyA9IGN9PjwvY2FudmFzPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TaW11bGF0aW9uLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7OztBQUVBOzs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBOzs7OztBQVJBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        