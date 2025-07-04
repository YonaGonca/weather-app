export type HourlyTemp = {
  time: string; 
  temp: number;
};

export type DailySummary = {
  date: string; 
  maxTemp: number;
  minTemp: number;
  maxWind: number;
  maxHumidity: number;
  maxFeelsLike: number;
  weather: number;
  weatherName: string;
};

export type FiveDaysForecast = {
  summary: DailySummary[];
  hourlyTemps: HourlyTemp[];
};

export type ForecastEntry = {
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
    feels_like:number;
  };
  wind: {
    speed: number;
  };
  weather: {
    id: number;
    main: string;
  }[]
};