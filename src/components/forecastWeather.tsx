import type { FiveDaysForecast } from "../types/forecastData" 
import { getWeekday } from "../utils/getWeekday"
import { selectWeatherIcon } from "../utils/selectIcon"
import { useState } from 'react'

export const ForecastWeather = ({ fiveDaysForecast } : { fiveDaysForecast: FiveDaysForecast}) => {
    const [dayForecast, setDayForecast] = useState<1|2|3|4>(1)

    return (
        <section className="flex mt-5 w-full flex-wrap justify-between gap-2">
            <h2 className="text-2xl font-bold w-full mb-1">Forecast</h2>
            <div className="flex-1 border-2 border-nav p-2 rounded-lg bg-weather flex flex-wrap items-center" onClick={() => setDayForecast(1)}>
                <div>
                    <h4 className="text-xl font-bold ml-2">{getWeekday(fiveDaysForecast.summary[1].date)}</h4>
                    <p className="ml-3 font-bold text-xl text-red-400">{fiveDaysForecast.summary[1].maxTemp.toFixed(0)}°C</p>
                    <p className="ml-3 font-bold text-xl text-blue-400">{fiveDaysForecast.summary[1].minTemp.toFixed(0)}°C</p>
                </div>
                <img className="w-17 ml-auto mr-1" src={selectWeatherIcon(fiveDaysForecast.summary[1].weather,true, fiveDaysForecast.summary[1].maxTemp >= 35 ? fiveDaysForecast.summary[1].maxTemp : fiveDaysForecast.summary[1].minTemp )} alt=""/>
            </div>
            <div className="flex-1 border-2 border-nav p-2 pr-3 py-3 rounded-lg bg-weather flex flex-wrap items-center" onClick={() => setDayForecast(2)}>
                <div>
                    <h4 className="text-xl font-bold ml-2">{getWeekday(fiveDaysForecast.summary[2].date)}</h4>
                    <p className="ml-3 font-bold text-xl text-red-400">{fiveDaysForecast.summary[2].maxTemp.toFixed(0)}°C</p>
                    <p className="ml-3 font-bold text-xl text-blue-400">{fiveDaysForecast.summary[2].minTemp.toFixed(0)}°C</p>
                </div>
                <img className="w-17 ml-auto mr-1" src={selectWeatherIcon(fiveDaysForecast.summary[2].weather,true, fiveDaysForecast.summary[2].maxTemp >= 35 ? fiveDaysForecast.summary[2].maxTemp : fiveDaysForecast.summary[2].minTemp )} alt=""/>
            </div>
            <div className="flex-1 border-2 border-nav p-2 pr-3 py-3 rounded-lg bg-weather flex flex-wrap items-center" onClick={() => setDayForecast(3)}>
                <div>
                    <h4 className="text-xl font-bold ml-2">{getWeekday(fiveDaysForecast.summary[3].date)}</h4>
                    <p className="ml-3 font-bold text-xl text-red-400">{fiveDaysForecast.summary[3].maxTemp.toFixed(0)}°C</p>
                    <p className="ml-3 font-bold text-xl text-blue-400">{fiveDaysForecast.summary[3].minTemp.toFixed(0)}°C</p>
                </div>
                <img className="w-17 ml-auto mr-1" src={selectWeatherIcon(fiveDaysForecast.summary[3].weather,true, fiveDaysForecast.summary[3].maxTemp >= 35 ? fiveDaysForecast.summary[3].maxTemp : fiveDaysForecast.summary[3].minTemp )} alt=""/>
            </div>
            <div className="flex-1 border-2 border-nav p-2 pr-3 py-3 rounded-lg bg-weather flex flex-wrap items-center" onClick={() => setDayForecast(4)}>
                <div>
                    <h4 className="text-xl font-bold ml-2">{getWeekday(fiveDaysForecast.summary[4].date)}</h4>
                    <p className="ml-3 font-bold text-xl text-red-400">{fiveDaysForecast.summary[4].maxTemp.toFixed(0)}°C</p>
                    <p className="ml-3 font-bold text-xl text-blue-400">{fiveDaysForecast.summary[4].minTemp.toFixed(0)}°C</p>
                </div>
                <img className="w-17 ml-auto mr-1" src={selectWeatherIcon(fiveDaysForecast.summary[4].weather,true, fiveDaysForecast.summary[4].maxTemp >= 35 ? fiveDaysForecast.summary[4].maxTemp : fiveDaysForecast.summary[4].minTemp )} alt=""/>
            </div>
            <div className="flex w-full bg-weather p-6 rounded-lg shadow-md border-2 border-nav mt-4">
                <div className="w-[50%] flex flex-wrap ml-2">
                    <h2 className="text-2xl font-bold mb-0 w-full">{getWeekday(fiveDaysForecast.summary[dayForecast].date)}</h2>
                    <p className='w-full text-xl opacity-70'>{fiveDaysForecast.summary[dayForecast].weatherName}</p>
                    <div className='flex items-center mb-3 mt-3'>
                        <img className="w-25 ml-4" src={selectWeatherIcon(fiveDaysForecast.summary[dayForecast].weather,true,fiveDaysForecast.summary[1].maxTemp >= 35 ? fiveDaysForecast.summary[1].maxTemp : fiveDaysForecast.summary[1].minTemp)} alt=""/>
                        <p className='text-5xl ml-3 font-bold'>{fiveDaysForecast.summary[dayForecast].maxTemp.toFixed(0)}°C</p>
                    </div>
                </div>
                <div className="w-[50%]">
                    Grafico
                </div>
            </div>
        </section>

    )
}