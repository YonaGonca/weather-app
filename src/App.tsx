import { CurrentWeather } from './components/currentWeather';
import { HeaderWeather } from './components/weatherHeader';
import { ForecastWeather } from './components/forecastWeather';
import { useWeather } from './hooks/useWeather'

function App() {
  const { currentWeather, fiveDaysForecast, city, setCity } = useWeather('Lisbon')

  return (
    <>
    <header className='bg-nav text-white flex justify-around py-2 px-8'>
        <h1 className='text-2xl font-railway font-semibold'>YourWeather</h1>
    </header>
    <main className='w-[52rem] mx-auto'>
        {currentWeather ? (
          <HeaderWeather weather={currentWeather} setCity={setCity} />
          ) : (
          <h3>Loading local time...</h3>
        )
        }

        {currentWeather && fiveDaysForecast ? (
          <CurrentWeather weather={currentWeather} dayForecast={fiveDaysForecast.hourlyTemps} />
        ) : (
          <p>Loading weather data...</p>
        )}

        {currentWeather && fiveDaysForecast ? (
          <ForecastWeather fiveDaysForecast={fiveDaysForecast} />
        ) : (
          <p>Loading weather data...</p>
        )}
    </main>
    </>
  )
}

export default App
