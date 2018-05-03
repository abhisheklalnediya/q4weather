import YQL from 'yql';

export default function getTemperature(city = 'bengalore', error, success) {
  const unit = 'c';
  const query = new YQL(`select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}") AND u="${unit}"`);
  query.exec((err, data) => {
    if (err || !data.query.count) {
      console.error(err);
      error();
    } else {
      console.log(data);
      const { location } = data.query.results.channel;
      const { condition } = data.query.results.channel.item;
      success(location.city, condition.temp, unit);
    }
  });
}