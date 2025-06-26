import { useState, useEffect } from 'react'
import type { WeatherData } from '../types/weatherData'
import type { FiveDaysForecast, DailySummary, HourlyTemp, ForecastEntry } from '../types/forecastData';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export function useWeather(initialCity: string) {
    const [city, setCity] = useState<string>(initialCity);
    const [currentWeather, setCurrentWeather] = useState<WeatherData|null>(null);
    const [fiveDaysForecast, setFiveDaysForecast] = useState<FiveDaysForecast|null>(null);

    useEffect(() => {
      const timeout = setTimeout(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
          .then(response => {
              if (!response.ok) throw new Error("Ciudad no encontrada");
              return response.json();
          })
          .then(data => {setCurrentWeather(data)})
          .catch(error => console.error('Error fetching weather data:', error));
      }, 600);

      return () => {clearTimeout(timeout)}
    }, [city]);

    useEffect(() => {
    const timeout = setTimeout(() => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
              if (!response.ok) throw new Error("Ciudad no encontrada");
              return response.json();
          })
        .then(data => {
          const dailyData: Record<string, {
            maxTemp: number;
            minTemp: number;
            maxWind:number;
            weather: number;
            weatherName: string;
          }> = {}
          const hourlyTemps: HourlyTemp[] = [];
          console.log(data)
          
          data.list.forEach(( entry:ForecastEntry ) => {
            const date = entry.dt_txt.slice(0, 10)
            const temp = entry.main.temp
            const windSpeed = entry.wind.speed
            const weather = entry.weather[0].id
            const weatherName = entry.weather[0].main

            hourlyTemps.push({
              time: entry.dt_txt,
              temp
            })

            if (!dailyData[date]){
              dailyData[date] = {
                maxTemp: temp,
                minTemp: temp,
                maxWind: windSpeed,
                weather: weather,
                weatherName: weatherName,
              }
            }else {
              dailyData[date].maxTemp = Math.max(dailyData[date].maxTemp, temp)
              dailyData[date].minTemp = Math.min(dailyData[date].minTemp, temp)
              dailyData[date].maxWind = Math.max(dailyData[date].maxWind, windSpeed)
            }
          })

          const summary: DailySummary[] = Object.entries(dailyData).map(([date, info])=>({
            date,
            maxTemp: info.maxTemp,
            minTemp: info.minTemp,
            maxWind: info.maxWind,
            weather: info.weather,
            weatherName: info.weatherName,
          }))
          setFiveDaysForecast({summary, hourlyTemps})
        })
        .catch(error => console.error('Error fetching weather data:', error));
    }, 600);

    return () => {clearTimeout(timeout)}
  }, [city]);
  return { city, setCity, currentWeather, fiveDaysForecast}
}