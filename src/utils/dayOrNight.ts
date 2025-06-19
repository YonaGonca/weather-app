export function dayOrNight(sunrise: number, sunset: number, currentTime: number): true | false {
  return currentTime >= sunrise && currentTime <= sunset;
} 