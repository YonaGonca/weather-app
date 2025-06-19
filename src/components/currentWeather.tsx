import type { WeatherData } from '../types/weatherData';
import { selectHumidityIcon, selectWindIcon, selectWeatherIcon } from '../utils/selectIcon';
import { dayOrNight } from '../utils/dayOrNight';

export const CurrentWeather = ({ weather } : { weather:WeatherData }) => {
    return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-sm">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
      <p>Temperature: {weather.main.temp} °C <img src={selectWeatherIcon(weather.weather[0].id,dayOrNight(weather.sys.sunrise, weather.sys.sunset, weather.dt),weather.main.temp)} alt="" className='w-32'/></p>
      <p>Weather: {weather.weather[0].main}</p>
      <p>Humidity: {weather.main.humidity}% <img src={selectHumidityIcon(weather.main.humidity)} alt="" className='w-10'/></p>
      <p>Wind Speed: {weather.wind.speed} m/s <img src={selectWindIcon(weather.wind.speed)} alt="" className='w-10'/></p>
    </div>)
}