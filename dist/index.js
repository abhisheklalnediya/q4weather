'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _homePage = require('./home-page');

var _homePage2 = _interopRequireDefault(_homePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 3000;

var app = (0, _express2.default)();

app.get('/api/temperature/:city', function (req, res) {
  var city = req.params.city;

  (0, _utils2.default)(city, function () {
    // Handle Error
    res.status(400);
    res.send({
      error: 'Not Data'
    });
  }, function (location, temperature, unit) {
    res.json({
      city: location,
      temperature: temperature,
      unit: unit
    });
  });
});

app.get('/', function (req, res) {
  res.send((0, _server.renderToString)(_react2.default.createElement(_homePage2.default, null)));
});

app.listen(PORT, function () {
  return console.log('Example app listening on port ' + PORT + '!');
});