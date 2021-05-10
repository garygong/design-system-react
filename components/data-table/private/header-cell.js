"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.isfunction"));

var _cellFixed = _interopRequireDefault(require("./cell-fixed"));

var _icon = _interopRequireDefault(require("../../icon"));

var _columnCheckProps = _interopRequireDefault(require("../column-check-props"));

var _keyCode = _interopRequireDefault(require("../../../utilities/key-code"));

var _interactiveElement = _interopRequireDefault(require("../interactive-element"));

var _cellContext = _interopRequireDefault(require("../private/cell-context"));

var _tableContext = _interopRequireDefault(require("../private/table-context"));

var _contextHelper2 = _interopRequireDefault(require("./context-helper"));

var _constants = require("../../../utilities/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SortAnchor = function SortAnchor(props) {
  // Avoid passing props to <a> that it doesn't understand
  var passThroughProps = {};
  var entries = Object.entries(props);
  entries.forEach(function (entry) {
    var _entry = _slicedToArray(entry, 2),
        key = _entry[0],
        value = _entry[1];

    if (['onRequestFocus', 'onOpen', 'onClose', 'requestFocus'].indexOf(key) === -1) {
      passThroughProps[key] = value;
    }
  });
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    _react.default.createElement("a", _extends({
      ref: function ref(node) {
        if (node && props.requestFocus && props.onRequestFocus) {
          props.onRequestFocus(node);
        }
      },
      onKeyDown: function onKeyDown(event) {
        return event.keyCode === _keyCode.default.ENTER && props.onClick ? props.onClick(event) : undefined;
      }
    }, passThroughProps), props.children)
  );
};

var InteractiveSortAnchor = (0, _interactiveElement.default)(SortAnchor);
/**
 * Used internally, renders each individual column heading.
 */

var DataTableHeaderCell = /*#__PURE__*/function (_React$Component) {
  _inherits(DataTableHeaderCell, _React$Component);

  var _super = _createSuper(DataTableHeaderCell);

  function DataTableHeaderCell() {
    var _this;

    _classCallCheck(this, DataTableHeaderCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      sortDirection: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleSort", function (e) {
      e.preventDefault();
      var oldSortDirection = _this.props.sortDirection || _this.state.sortDirection; // UX pattern: If sortable, and the DataTable's parent has not defined the sort order, then ascending (that is A->Z) is the default sort order on first click. Some columns, such as "last viewed" or "recently updated," should sort descending first, since that is what the user probably wants. Who wants to see the oldest files first?

      var sortDirection = function sortDirectionFunction(direction, isDefaultSortDescending) {
        switch (direction) {
          case 'asc':
            return 'desc';

          case 'desc':
            return 'asc';

          case null:
            return isDefaultSortDescending ? 'desc' : 'asc';

          default:
            return 'asc';
        }
      }(oldSortDirection, _this.props.isDefaultSortDescending);

      var data = {
        property: _this.props.property,
        sortDirection: sortDirection
      };

      _this.setState({
        sortDirection: sortDirection
      });

      if ((0, _lodash.default)(_this.props.onSort)) {
        _this.props.onSort(data, e);
      }
    });

    return _this;
  }

  _createClass(DataTableHeaderCell, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _columnCheckProps.default)(_constants.DATA_TABLE_COLUMN, this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // reset sort state when another column is sorted
      if (prevProps.isSorted === true && this.props.isSorted === false) {
        this.setState({
          sortDirection: null
        }); // eslint-disable-line react/no-did-update-set-state
      }
    }
  }, {
    key: "render",
    // ### Render
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          fixedHeader = _this$props.fixedHeader,
          isSorted = _this$props.isSorted,
          label = _this$props.label,
          sortable = _this$props.sortable,
          width = _this$props.width;

      var labelType = _typeof(label); // This decides which arrow to render--which is current sort order if the column is sorted OR the future sort order if the arrow is clicked in the future.


      var sortDirection = this.props.sortDirection || this.state.sortDirection || this.props.isDefaultSortDescending && 'desc';
      var expandedSortDirection = sortDirection === 'desc' ? 'descending' : 'ascending';
      var ariaSort = isSorted ? expandedSortDirection : 'none';

      var getFixedLayoutSubRenders = function getFixedLayoutSubRenders(isHidden) {
        if (sortable) {
          // Don't make the anchor interactable when it's hidden
          var Anchor = isHidden ? SortAnchor : InteractiveSortAnchor;
          return /*#__PURE__*/_react.default.createElement(Anchor, {
            href: "#",
            className: "slds-th__action slds-text-link_reset",
            onClick: _this2.handleSort,
            role: "button"
          }, /*#__PURE__*/_react.default.createElement("span", {
            className: "slds-assistive-text"
          }, _this2.props.assistiveTextForColumnSort || _this2.props.assistiveText.columnSort, ' '), /*#__PURE__*/_react.default.createElement("span", {
            className: "slds-truncate",
            title: labelType === 'string' ? label : undefined
          }, label), /*#__PURE__*/_react.default.createElement(_icon.default, {
            className: "slds-is-sortable__icon",
            category: "utility",
            name: sortDirection === 'desc' ? 'arrowdown' : 'arrowup',
            size: "x-small"
          }), sortDirection ? /*#__PURE__*/_react.default.createElement("span", {
            className: "slds-assistive-text",
            "aria-atomic": "true"
          }, sortDirection === 'asc' ? _this2.props.assistiveTextForColumnSortedAscending || _this2.props.assistiveText.columnSortedAscending : _this2.props.assistiveTextForColumnSortedDescending || _this2.props.assistiveText.columnSortedDescending) : null);
        }

        return /*#__PURE__*/_react.default.createElement("span", {
          className: "slds-p-horizontal_x-small slds-th__action",
          style: {
            display: 'flex'
          }
        }, /*#__PURE__*/_react.default.createElement("span", {
          className: "slds-truncate",
          title: labelType === 'string' ? label : undefined
        }, label));
      };

      var getHeaderCellContent = function getHeaderCellContent(isHidden) {
        return _this2.props.fixedLayout ? getFixedLayoutSubRenders(isHidden) : /*#__PURE__*/_react.default.createElement("div", {
          className: "slds-truncate",
          title: labelType === 'string' ? label : undefined
        }, label);
      };

      return /*#__PURE__*/_react.default.createElement(_tableContext.default.Consumer, null, function (tableContext) {
        return /*#__PURE__*/_react.default.createElement(_cellContext.default.Consumer, null, function (cellContext) {
          var _classNames;

          var _contextHelper = (0, _contextHelper2.default)(tableContext, cellContext, _this2.props.fixedLayout),
              tabIndex = _contextHelper.tabIndex,
              hasFocus = _contextHelper.hasFocus,
              handleFocus = _contextHelper.handleFocus,
              handleKeyDown = _contextHelper.handleKeyDown;

          return /*#__PURE__*/_react.default.createElement("th", {
            "aria-label": labelType === 'string' ? label : undefined,
            "aria-sort": ariaSort,
            className: (0, _classnames.default)((_classNames = {
              'slds-is-sortable': sortable,
              'slds-is-sorted': isSorted
            }, _defineProperty(_classNames, "slds-is-sorted_".concat(sortDirection), sortDirection), _defineProperty(_classNames, 'slds-is-sorted_asc', isSorted && !sortDirection), _classNames)),
            onFocus: handleFocus,
            onKeyDown: handleKeyDown,
            ref: function ref(_ref) {
              if (_this2.props.cellRef) {
                _this2.props.cellRef(_ref);

                if (_ref && hasFocus) {
                  _ref.focus();
                }
              }
            },
            scope: "col",
            style: fixedHeader || width ? {
              height: fixedHeader ? 0 : null,
              lineHeight: fixedHeader ? 0 : null,
              width: width || null
            } : null,
            tabIndex: tabIndex
          }, fixedHeader ? /*#__PURE__*/_react.default.cloneElement(getHeaderCellContent(true), {
            style: {
              display: 'flex',
              height: 0,
              overflow: 'hidden',
              paddingBottom: 0,
              paddingTop: 0,
              visibility: 'hidden'
            }
          }) : getHeaderCellContent(), fixedHeader ? /*#__PURE__*/_react.default.createElement(_cellFixed.default, null, /*#__PURE__*/_react.default.cloneElement(getHeaderCellContent(), {
            style: {
              alignItems: 'center',
              display: 'flex',
              flex: '1 1 auto',
              lineHeight: 1.25,
              width: '100%'
            },
            tabIndex: sortable ? 0 : null
          })) : null);
        });
      });
    }
  }]);

  return DataTableHeaderCell;
}(_react.default.Component);

_defineProperty(DataTableHeaderCell, "displayName", _constants.DATA_TABLE_HEADER_CELL);

_defineProperty(DataTableHeaderCell, "propTypes", {
  assistiveText: _propTypes.default.shape({
    actionsHeader: _propTypes.default.string,
    columnSort: _propTypes.default.string,
    columnSortedAscending: _propTypes.default.string,
    columnSortedDescending: _propTypes.default.string,
    selectAllRows: _propTypes.default.string,
    selectRow: _propTypes.default.string
  }),
  cellRef: _propTypes.default.func,
  fixedHeader: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,

  /**
   * Some columns, such as "date last viewed" or "date recently updated," should sort descending first, since that is what the user probably wants. How often does one want to see their oldest files first in a table? If sortable and the `DataTable`'s parent has not defined the sort order, then ascending (A at the top to Z at the bottom) is the default sort order on first click.
   */
  isDefaultSortDescending: _propTypes.default.bool,

  /**
   * Indicates if column is sorted.
   */
  isSorted: _propTypes.default.bool,

  /**
   * The column label.
   */
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /**
   * The function to execute on sort.
   */
  onSort: _propTypes.default.func,

  /**
   * The property which corresponds to this column.
   */
  property: _propTypes.default.string,

  /**
   * Whether or not the column is sortable.
   */
  sortable: _propTypes.default.bool,

  /**
   * The current sort direction.
   */
  sortDirection: _propTypes.default.oneOf(['desc', 'asc']),

  /**
   * Width of column. This is required for advanced/fixed layout tables. Please provide units. (`rems` are recommended)
   */
  width: _propTypes.default.string
});

var _default = DataTableHeaderCell;
exports.default = _default;