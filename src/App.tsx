import { CurrentWeather } from './components/currentWeather';
import { HeaderWeather } from './components/weatherHeader';
import { ForecastWeather } from './components/forecastWeather';
import { useWeather } from './hooks/useWeather'
import { useState, useEffect } from 'react'

function App() {
  const [ city, setCity ] = useState('Lisboa')
  const [ unit, setUnit ] = useState('metric')
  const { currentWeather, fiveDaysForecast} = useWeather(city,unit);

  useEffect(() => {
    async function fetchCity() {
      try {
        const response = await fetch('http://ip-api.com/json');
        const data = await response.json();
        if (data.status === 'success') {
          setCity(data.city);
        } else {
          setCity('Lisboa'); // fallback
        }
      } catch {
        setCity('Lisboa'); // fallback
      }
    }
    fetchCity();
  }, []);

  return (
    <>
    <header className='bg-nav text-white py-2 px-8 '>
      <div className='w-[52rem] mx-auto flex justify-between'>
        <h1 className='text-2xl font-railway font-semibold'>YourWeather</h1>
        <div className='text-2xl font-railway font-semibold cursor-pointer'><span className={`${ unit == 'metric' ? 'text-[#C3A637]' : 'text-white' }`} onClick={() => setUnit('metric')} >°C</span> / <span className={`${ unit == 'imperial' ? 'text-[#C3A637]' : 'text-white' }`} onClick={() => setUnit('imperial')}>°F</span></div>
      </div>
    </header>
    <main className={`w-[52rem] mx-auto`}>
        { currentWeather ? (
          <HeaderWeather weather={currentWeather} setCity={setCity} />
          ) : (
          <h3></h3>
        )
        }

        {currentWeather && fiveDaysForecast ? (
          <CurrentWeather weather={currentWeather} dayForecast={fiveDaysForecast.hourlyTemps} unit={unit}  />
        ) : (
          <p></p>
        )}

        {currentWeather && fiveDaysForecast ? (
          <ForecastWeather fiveDaysForecast={fiveDaysForecast} unit={unit} />
        ) : (
          <div className="flex justify-center items-center h-48">
            <div className="w-10 h-10 border-4 border-[#C3A637] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
    </main>

<footer className="bg-gray-900 text-white py-6 mt-15">
  <div className="w-[52rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 text-sm">
    <div className="text-center md:text-left">
      <p className="font-semibold text-lg">YourWeather</p>
      <p className="text-gray-400">© {new Date().getFullYear()} Todos los derechos reservados.</p>
    </div>

    <div className="flex gap-4">
      <a href="#" className="hover:text-yellow-400 transition">
        <i className="fab fa-x-twitter"></i>
      </a>
      <a href="https://github.com/YonaGonca" target='_blank' className="hover:text-yellow-400 transition">
        <i className="fab fa-github"></i>
      </a>
      <a href="#" className="hover:text-yellow-400 transition">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </div>
</footer>

    </>
  )
}

export default App
