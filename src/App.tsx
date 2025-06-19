import { useEffect, useState } from 'react';
import type { WeatherData } from './types/weatherData';
import { CurrentWeather } from './components/currentWeather';
import { currentTime, currentDate } from './utils/currentTime';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState<WeatherData|null>(null);
  const [city, setCity] = useState<string>('Lisboa');

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
              if (!response.ok) throw new Error("Ciudad no encontrada");
              return response.json();
          })
        .then(data => {setWeather(data)})
        .catch(error => console.error('Error fetching weather data:', error));
    }, 600);

    return () => {clearTimeout(timeout);}
  }, [city]);

  return (
    <main>
      <header className='bg-blue-500 text-white flex justify-around py-4 px-8'>
        <h1>Weather App</h1>
      </header>
      <section>
        {weather ? (
          <div>
            <h3>Local time:</h3>
            <p>{currentTime(weather.timezone)}</p>
            <p>{currentDate(weather.timezone)}</p>
            <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Search city..."/>
            <p>{weather.name}, {weather.sys.country}</p>
          </div>
          ) : (
          <h3>Loading local time...</h3>
        )
      }
      </section>
      <section className='mt-20'>
        {weather ? (
          <CurrentWeather weather={weather} />
        ) : (
          <p>Loading weather data...</p>
        )}
      </section>
    </main>
  )
}

export default App
