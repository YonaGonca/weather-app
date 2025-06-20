import { useEffect, useState } from 'react';
import type { WeatherData } from './types/weatherData';
import { CurrentWeather } from './components/currentWeather';
import { currentTime, currentDate } from './utils/currentTime';
import locationIcon from './assets/icons/web/location.svg'

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
        .then(data => {setWeather(data); console.log(data)})
        .catch(error => console.error('Error fetching weather data:', error));
    }, 600);

    return () => {clearTimeout(timeout);}
  }, [city]);

  return (
    <>
    <header className='bg-nav text-white flex justify-around py-2 px-8'>
        <h1 className='text-2xl font-railway font-semibold'>YourWeather</h1>
    </header>
    <main className='w-[52rem] mx-auto'>
        {weather ? (
        <section className='flex justify-between mt-3'>
          <div className='text-xl'>
            <h3>Local time:</h3>
            <p className='text-4xl font-sans font-semibold'>{currentTime(weather.timezone)}</p>
            <p className='mt-1'>{currentDate(weather.timezone)}</p>
          </div>
          <div className='text-xl mt-3'>
            <input className="border-2 border-nav rounded-[5px] p-1 bg-white text-nav focus:outline-1 focus:outline-white focus:border-weather transition duration-300 "  type="text" onChange={(e) => setCity(e.target.value)} placeholder="Search city..."/>
            <p className='flex justify-end gap-1 items-center mt-1 mr-1'><img src={locationIcon} alt="" />{weather.name}, {weather.sys.country}</p>
          </div>
        </section>
          ) : (
          <h3>Loading local time...</h3>
        )
      }
        {weather ? (
          <CurrentWeather weather={weather} />
        ) : (
          <p>Loading weather data...</p>
        )}
    </main>
    </>
  )
}

export default App
