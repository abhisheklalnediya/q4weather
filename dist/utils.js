'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTemperature;

var _yql = require('yql');

var _yql2 = _interopRequireDefault(_yql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTemperature() {
  var city = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bengalore';
  var error = arguments[1];
  var success = arguments[2];

  var unit = 'c';
  var query = new _yql2.default('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + city + '") AND u="' + unit + '"');
  query.exec(function (err, data) {
    if (err || !data.query.count) {
      console.error(err);
      error();
    } else {
      console.log(data);
      var location = data.query.results.channel.location;
      var condition = data.query.results.channel.item.condition;

      success(location.city, condition.temp, unit);
    }
  });
}