import type { WeatherData } from '../types/weatherData';
import { currentTime, currentDate } from '../utils/currentTime';
import locationIcon from '../assets/icons/web/location.svg'


export const HeaderWeather = ({ weather, setCity } : { weather:WeatherData, setCity:React.Dispatch<React.SetStateAction<string>> }) => {
    return (
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
    )
}