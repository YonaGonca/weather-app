import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import type { HourlyTemp } from "../types/forecastData";
import { getGradient } from "../utils/getGradient";
import type { ScriptableContext } from "chart.js";
import type { ChartOptions, ChartData } from 'chart.js';
import { getDayData } from "../utils/getDayData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const LineGraph = ({ forecast, day, unit }: { forecast: HourlyTemp[], day: number, unit: string }) => {
  const dates: string[] = [];
  const temps: number[] = [];

  forecast = getDayData(forecast, day)
  forecast.forEach((entry: HourlyTemp) => {
    dates.push(entry.time.slice(11, 16));
    temps.push(entry.temp);
  });

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
    tooltip: {
    enabled: true,
    backgroundColor: '#334155', 
    titleColor: '#BAC5D3',      
    bodyColor: 'white',
    borderColor: 'white',
    borderWidth: 2,
    bodyFont: {
      size: 16, 
      weight: 600,
    },
    cornerRadius: 6,
    padding: 15,
    displayColors: false,
    callbacks: {
      title: () => '', // Sin título
      label: (tooltipItem) => {
        const value = tooltipItem.formattedValue;
        const unitSymbol = unit === 'metric' ? '°C' : '°F';
        return `🌡️ ${value}${unitSymbol}`;
      },
    },
  },
},

    scales: {
      y: {
        min: unit == 'metric' ? -10 : 14, 
        max: unit == 'metric' ? 40 : 104, 
        ticks: {
          stepSize: unit == 'metric' ? 10 : 15, 
          callback: function (value: string | number): string {
            return value + (unit == 'metric' ? "°C" : "°F") ; 
          },
          color: "white",
        },
        grid: {
            color: 'rgba(255, 255, 255, 0.2)',
        },
      },
      x: {
        ticks: {
            color: "white"
        },
        grid: {
            color: 'rgba(255, 255, 255, 0.2)',
        },
      }
    },
  };

  const data: ChartData<'line'> = {
    labels: dates,
    datasets: [
      {
        label: "Temperature",
        data: temps,
        borderColor: (context: ScriptableContext<"line">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return "white"; // fallback color
          return getGradient(ctx, chartArea);
        },
        borderWidth: 4,
        tension: 0.4,
        pointHoverRadius: 7,     
        pointBorderWidth: 6,
        pointBackgroundColor: (context: ScriptableContext<"line">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return "white"; // fallback color
          return getGradient(ctx, chartArea);
        },
      },
    ],
  };

  return (
        <Line options={options} data={data} />
  );
};

