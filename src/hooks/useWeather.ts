import { useState, useEffect } from 'react'
import type { WeatherData } from '../types/weatherData'
import type { FiveDaysForecast, DailySummary, HourlyTemp, ForecastEntry } from '../types/forecastData';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export function useWeather(city: string, unit: string) {
    const [currentWeather, setCurrentWeather] = useState<WeatherData|null>(null);
    const [fiveDaysForecast, setFiveDaysForecast] = useState<FiveDaysForecast|null>(null);
    

    useEffect(() => {
      const timeout = setTimeout(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`)
          .then(response => {
              if (!response.ok) throw new Error("Ciudad no encontrada");
              return response.json();
          })
          .then(data => {setCurrentWeather(data)})
          .catch(error => {
            console.error('Error fetching weather data:', error)});
      }, 600);

      return () => {clearTimeout(timeout)}
    }, [city, unit]);

    useEffect(() => {
    const timeout = setTimeout(() => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`)
        .then(response => {
              if (!response.ok) throw new Error("Ciudad no encontrada");
              return response.json();
          })
        .then(data => {
          const dailyData: Record<string, {
            maxTemp: number;
            minTemp: number;
            maxWind:number;
            maxHumidity: number;
            maxFeelsLike: number;
            weather: number;
            weatherName: string;
          }> = {}
          const hourlyTemps: HourlyTemp[] = [];
          
          data.list.forEach(( entry:ForecastEntry ) => {
            const date = entry.dt_txt.slice(0, 10)
            const temp = entry.main.temp
            const windSpeed = entry.wind.speed
            const humidity = entry.main.humidity
            const feelsLike = entry.main.feels_like
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
                maxHumidity: humidity,
                maxFeelsLike: feelsLike,
                weather: weather,
                weatherName: weatherName,
              }
            }else {
              dailyData[date].maxTemp = Math.max(dailyData[date].maxTemp, temp)
              dailyData[date].minTemp = Math.min(dailyData[date].minTemp, temp)
              dailyData[date].maxWind = Math.max(dailyData[date].maxWind, windSpeed)
              dailyData[date].maxHumidity = Math.max(dailyData[date].maxHumidity, humidity)
              dailyData[date].maxFeelsLike = Math.max(dailyData[date].maxFeelsLike, feelsLike)
            }
          })

          const summary: DailySummary[] = Object.entries(dailyData).map(([date, info])=>({
            date,
            maxTemp: info.maxTemp,
            minTemp: info.minTemp,
            maxWind: info.maxWind,
            maxHumidity: info.maxHumidity,
            maxFeelsLike: info.maxFeelsLike,
            weather: info.weather,
            weatherName: info.weatherName,
          }))
          setFiveDaysForecast({summary, hourlyTemps})
        })
        .catch(error => {
            console.error('Error fetching weather data:', error)});
    }, 600);

    return () => {clearTimeout(timeout)}
  }, [city, unit]);
  return { currentWeather, fiveDaysForecast }
}