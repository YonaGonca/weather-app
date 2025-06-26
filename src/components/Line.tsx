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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const LineGraph = ({ forecast }: { forecast: HourlyTemp[] }) => {
  const dates: string[] = [];
  const temps: number[] = [];

  forecast.slice(0, 8).forEach((entry: HourlyTemp) => {
    dates.push(entry.time.slice(11, 16));
    temps.push(entry.temp);
  });

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: -10, // valor mínimo
        max: 40, // valor máximo
        ticks: {
          stepSize: 10, // paso entre cada tick
          callback: function (value: string | number): string {
            return value + "°C"; 
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
