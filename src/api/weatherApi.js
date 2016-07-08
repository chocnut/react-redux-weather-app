const API_KEY = '960c566976990b975bee1a4cc076acdf';
const url = `http://api.openweathermap.org/data/2.5/group?id=1701668,2147714,4163971,2153391.4887398,703448,2643743,2193733,1816670,1850147&units=metric&appid=${API_KEY}`;

class WeatherApi {
  static fetchAllWeather() {
    return Promise.resolve(fetch(url)
      .then(function(result) {
        return result.json();
      })
    );
  }
}

export default WeatherApi;
