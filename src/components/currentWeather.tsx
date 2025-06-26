import type { WeatherData } from '../types/weatherData';
import type { HourlyTemp } from '../types/forecastData';
import { selectHumidityIcon, selectWindIcon, selectWeatherIcon } from '../utils/selectIcon';
import { dayOrNight } from '../utils/dayOrNight';
import sunriseIcon from '../assets/icons/web/sunrise.png'
import sunsetIcon from '../assets/icons/web/sunset.png'
import feelsLikeIcon from '../assets/icons/web/feels.svg'
import { secondsToHours } from '../utils/currentTime';
import { LineGraph } from './Line.tsx';

export const CurrentWeather = ({ weather, dayForecast } : { weather:WeatherData, dayForecast: HourlyTemp[]}) => {
    return (
      <section className="flex bg-weather p-6 rounded-lg shadow-md w-full border-2 border-nav mt-4 items-center">
        <div className='w-[50%] flex flex-wrap ml-2'>
          <h2 className="text-2xl font-bold mb-0 w-full">Current Weather</h2>
          <p className='w-full text-xl opacity-70'>{weather.weather[0].main}</p>
          <div className='flex items-center mb-3 mt-3'>
            <img className="w-25 ml-4" src={selectWeatherIcon(weather.weather[0].id,dayOrNight(weather.sys.sunrise, weather.sys.sunset, weather.dt),weather.main.temp)} alt=""/>
            <p className='text-5xl ml-3 font-bold'>{weather.main.temp.toFixed(0)}°C</p>
          </div>
          <p className='flex w-full items-center mb-0.5 ml-2'><img src={selectHumidityIcon(weather.main.humidity)} alt="" className='w-8 mr-2'/>Humidity: {weather.main.humidity}%</p>
          <p className='flex w-full items-center mb-0.5 ml-2'><img src={selectWindIcon(weather.wind.speed)} alt="" className='w-8 mr-2'/>Wind Speed: {weather.wind.speed} m/s</p>
          <p className='flex w-full items-center mb-0.5 ml-2'><img src={feelsLikeIcon} alt="" className='h-8 w-8 mr-2'/>Feels like: {weather.main.feels_like.toFixed(0)}°C </p>
          <p className='flex w-full items-center mb-0.5 ml-2'><img src={sunriseIcon} alt="" className='w-8 mr-2'/>Sunrise: {secondsToHours(weather.sys.sunrise, weather.timezone)}</p>
          <p className='flex w-full items-center ml-2'><img src={sunsetIcon} alt="" className='w-8 mr-2'/>Sunset:  {secondsToHours(weather.sys.sunset, weather.timezone)}</p>
        </div>
        <div className='w-[80%] h-75 mr-5' >
            {dayForecast ? (
               <LineGraph forecast={dayForecast}/>
              ) : (
              <p>Loading forecast data...</p>
        )}
        </div>
      </section>
)}