'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

const _styles={
    container: {
    },
    modalContainer: {
        backgroundColor: 'transparent',
        alignItems:'center'
    },
    wrap: {
        justifyContent: 'center',
    },
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rnTopview = require('rn-topview');

var _rnTopview2 = _interopRequireDefault(_rnTopview);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactNative = require('react-native');

var _Modal = require('rmc-dialog/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);


var _PopContainer = function (_React$Component) {
    (0, _inherits3['default'])(PopContainer, _React$Component);

    function PopContainer(props) {
        (0, _classCallCheck3['default'])(this, PopContainer);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (PopContainer.__proto__ || Object.getPrototypeOf(PopContainer)).call(this, props));

        _this.onMaskClose = function () {
            var onMaskClose = _this.props.onMaskClose;
            if (onMaskClose) {
                var res = onMaskClose();
                if (res && res.then) {
                    res.then(function () {
                        _this.hide();
                    });
                } else {
                    _this.hide();
                }
            }
        };
        _this.state = {
            visible: props.visible || false
        };
        return _this;
    }

    (0, _createClass3['default'])(PopContainer, [{
        key: 'hide',
        value: function hide() {
            this.setState({
                visible: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _reactNative.View,
                { style: _styles.container },
                _react2['default'].createElement(
                    _Modal2['default'],
                    { style: [_styles.modalContainer, this.props.style], animateAppear: true, onAnimationEnd: this.props.onAnimationEnd, animationType: this.props.animationType, wrapStyle: _styles.wrap, visible: this.state.visible, maskClosable: this.props.maskClosable, onClose: this.onMaskClose },
                    this.props.children
                )
            );
        }
    }]);
    return PopContainer;
}(_react2['default'].Component);


var _PopContainer2 = _interopRequireDefault(_PopContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var popInstance = void 0;
exports['default'] = {
    show: function show(content) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            animationType: 'slide-down',
            maskClosable: true,
            onMaskClose: function onMaskClose() {}
        };

        _rnTopview2['default'].set(_react2['default'].createElement(
            _PopContainer2['default'],
            { ref: function ref(i) {
                    return popInstance = i;
                }, animationType: options.animationType, maskClosable: options.maskClosable, onMaskClose: options.onMaskClose, onAnimationEnd: function onAnimationEnd(visible) {
                    if (!visible) {
                        _rnTopview2['default'].remove();
                    }
                }, visible: true },
            content
        ));
    },
    hide: function hide() {
        if (popInstance) {
            popInstance.hide();
        }
    }
};
module.exports = exports['default'];

