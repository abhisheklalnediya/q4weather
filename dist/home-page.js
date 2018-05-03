'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  body: {
    color: '#595959',
    fontFamily: 'monospace'
  },
  center: {
    textAlign: 'center'
  },
  h6: {
    marginBottom: 0
  },
  ul: {
    listStyle: 'none',
    marginLeft: '20px'
  },
  code: {
    marginBottom: '25px'
  }
};

var Html = function Html() {
  return _react2.default.createElement(
    'html',
    { lang: 'en' },
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement(
        'title',
        null,
        'q4 Weather'
      ),
      _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css' })
    ),
    _react2.default.createElement(
      'body',
      { style: styles.body },
      _react2.default.createElement(
        'div',
        { id: 'app' },
        _react2.default.createElement(
          'h1',
          { style: styles.center },
          'q4 Weather API'
        ),
        _react2.default.createElement(
          'p',
          { style: styles.center },
          'An Api written on Node and express to get weather info!'
        ),
        _react2.default.createElement(
          'h4',
          null,
          'End points:'
        ),
        _react2.default.createElement(
          'h5',
          null,
          '- /api/temperature/<city>'
        ),
        _react2.default.createElement(
          'h6',
          { style: styles.h6 },
          'Parameters:'
        ),
        _react2.default.createElement(
          'ul',
          { style: styles.ul },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'strong',
              null,
              'city:'
            ),
            ' city name'
          )
        ),
        _react2.default.createElement(
          'h6',
          { style: styles.h6 },
          'Status:'
        ),
        _react2.default.createElement(
          'ul',
          { style: styles.ul },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'strong',
              null,
              '200:'
            ),
            ' Success'
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'strong',
              null,
              '400:'
            ),
            ' Error, Possible cause is invalid city name'
          )
        ),
        _react2.default.createElement(
          'h6',
          { style: styles.h6 },
          'Example Out:'
        ),
        _react2.default.createElement(
          'div',
          { style: styles.code },
          _react2.default.createElement(
            'code',
            null,
            '{"city": "Thiruvananthapuram","temperature":"29","unit":"c"}'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { className: 'button button-primary', href: '/api/temperature/bengaluru' },
            'Bengaluru'
          ),
          _react2.default.createElement(
            'a',
            { className: 'button', style: { margin: '0px 10px' }, href: '/api/temperature/delhi' },
            'Delhi'
          ),
          _react2.default.createElement(
            'a',
            { className: 'button button-primary', href: '/api/temperature/thiruvananthapuram' },
            'Thiruvananthapuram'
          )
        )
      )
    )
  );
};

exports.default = Html;