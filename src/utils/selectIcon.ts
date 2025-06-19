//importar todas los iconos

// luego crear un objeto con los iconos

// luego crear una funcion que reciba el codigo del clima y devuelva el icono correspondiente

//Humidity Icons
import zeroHumidityIcon from '../assets/icons/humidity/0-humidity.svg';
import firstHumidityIcon from '../assets/icons/humidity/10-humidity.svg';
import secondHumidityIcon from '../assets/icons/humidity/40-humidity.svg';
import thirdHumidityIcon from '../assets/icons/humidity/70-humidity.svg';
import forthHumidityIcon from '../assets/icons/humidity/100-humidity.svg';

// Wind Icons
import zeroWindIcon from '../assets/icons/wind/arrow_1.svg';
import firstWindIcon from '../assets/icons/wind/arrow_2.svg';
import secondWindIcon from '../assets/icons/wind/arrow_3.svg';
import thirdWindIcon from '../assets/icons/wind/arrow_4.svg';
import forthWindIcon from '../assets/icons/wind/arrow_5.svg';

//Weather Icons

// Day
import clearDayIcon from '../assets/icons/weather/clear_day.svg';
import mostlyClearDayIcon from '../assets/icons/weather/mostly_clear_day.svg';
import partlyCloudyDayIcon from '../assets/icons/weather/partly_cloudy_day.svg';
import mostlyCloudydayIcon from '../assets/icons/weather/mostly_cloudy_day.svg';
import scatteredSnowDayIcon from '../assets/icons/weather/scattered_snow_showers_day.svg';
import scatteredRainDayIcon from '../assets/icons/weather/scattered_showers_day.svg';
import scatteredThunderDayIcon from '../assets/icons/weather/isolated_scattered_thunderstorms_day.svg';
import veryHotDayIcon from '../assets/icons/weather/very_hot.svg';

// Night
import clearNightIcon from '../assets/icons/weather/clear_night.svg';
import mostlyClearNightIcon from '../assets/icons/weather/mostly_clear_night.svg';
import partlyCloudyNightIcon from '../assets/icons/weather/partly_cloudy_night.svg'
import mostlyCloudyNightIcon from '../assets/icons/weather/mostly_cloudy_night.svg';
import scatteredSnowNightIcon from '../assets/icons/weather/scattered_snow_showers_night.svg';
import scatteredRainNightIcon from '../assets/icons/weather/scattered_showers_night.svg';
import scatteredThunderNightIcon from '../assets/icons/weather/isolated_scattered_thunderstorms_night.svg';

// General
import cloudyIcon from '../assets/icons/weather/cloudy.svg';
import drizzleIcon from '../assets/icons/weather/drizzle.svg';
import showersRainIcon from '../assets/icons/weather/showers_rain.svg';
import heavyRainIcon from '../assets/icons/weather/heavy_rain.svg';
import flurriesIcon from '../assets/icons/weather/flurries.svg';
import showersSnowIcon from '../assets/icons/weather/showers_snow.svg';
import heavySnowIcon from '../assets/icons/weather/heavy_snow.svg';
import mixedRainSnowIcon from '../assets/icons/weather/mixed_rain_snow.svg';
import sleetHailIcon from '../assets/icons/weather/sleet_hail.svg';
import strongThunderstormsIcon from '../assets/icons/weather/strong_thunderstorms.svg';
import isolatedThunderstormsIcon from '../assets/icons/weather/isolated_thunderstorms.svg';
import icyIcon from '../assets/icons/weather/icy.svg';
import hazeFogDustSmokeIcon from '../assets/icons/weather/haze_fog_dust_smoke.svg';
import windyIcon from '../assets/icons/weather/windy.svg';
import tornadoIcon from '../assets/icons/weather/tornado.svg';
import veryColdIcon from '../assets/icons/weather/very_cold.svg';

// Humidity Icons Object
const humidityIcons = {
  zero: zeroHumidityIcon,
  first: firstHumidityIcon,
  second: secondHumidityIcon,
  third: thirdHumidityIcon,
  forth: forthHumidityIcon,
};

// Wind Icons Object
const windIcons = {
  zero: zeroWindIcon,
  first: firstWindIcon,
  second: secondWindIcon,
  third: thirdWindIcon,
  forth: forthWindIcon,
};

// Weather Icons Object
const weatherIcons = {
    DayIcons: {
        clear: clearDayIcon,
        mostlyClear: mostlyClearDayIcon,
        partlyCloudy: partlyCloudyDayIcon,
        mostlyCloudy: mostlyCloudydayIcon,
        scatteredSnow: scatteredSnowDayIcon,
        scatteredRain: scatteredRainDayIcon,
        scatteredThunder: scatteredThunderDayIcon,
    },
    NightIcons: {
        clear: clearNightIcon,
        mostlyClear: mostlyClearNightIcon,
        partlyCloudy: partlyCloudyNightIcon,
        mostlyCloudy: mostlyCloudyNightIcon,
        scatteredSnow: scatteredSnowNightIcon,
        scatteredRain: scatteredRainNightIcon,
        scatteredThunder: scatteredThunderNightIcon,
    },
    GeneralIcons: {
        cloudy: cloudyIcon,
        drizzle: drizzleIcon,
        showersRain: showersRainIcon,
        heavyRain: heavyRainIcon,
        flurries: flurriesIcon,
        showersSnow: showersSnowIcon,
        heavySnow: heavySnowIcon,
        mixedRainSnow: mixedRainSnowIcon,
        sleetHail: sleetHailIcon,
        strongThunderstorms: strongThunderstormsIcon,
        isolatedThunderstorms: isolatedThunderstormsIcon,
        icy: icyIcon,
        hazeFogDustSmoke: hazeFogDustSmokeIcon,
        windy: windyIcon,
        tornado: tornadoIcon,
        veryCold: veryColdIcon,
        veryHot: veryHotDayIcon
    }
}

export const selectHumidityIcon = (humidity: number): string => {
    if (humidity <= 10) {
        return humidityIcons.zero;
    } else if (humidity <= 20) {
        return humidityIcons.first;
    } else if (humidity <= 40) {
        return humidityIcons.second;
    } else if (humidity <= 85) {
        return humidityIcons.third;
    } else if (humidity <= 100) {
        return humidityIcons.forth;
    }

    return "Invalid Value"; // Return a default value or handle the error as needed
}

export const selectWindIcon = (windSpeed: number): string => {
    if (windSpeed <= 1.5) {
        return windIcons.zero;
    } else if (windSpeed <= 5) {
        return windIcons.first;
    } else if (windSpeed <= 10) {
        return windIcons.second;
    } else if (windSpeed <= 17) {
        return windIcons.third;
    } else if (windSpeed > 17) {
        return windIcons.forth;
    }

    return "Invalid Value"; // Return a default value or handle the error as needed
}

export const selectWeatherIcon = (weatherCode: number, isDay: boolean, temperature: number): string => {
    if (temperature >= 35) {
        return weatherIcons.GeneralIcons.veryHot;
    }else if (temperature <= -10) {
        return weatherIcons.GeneralIcons.veryCold;
    }else if (weatherCode === 200) {
        return isDay ? weatherIcons.DayIcons.scatteredThunder : weatherIcons.NightIcons.scatteredThunder;
    }else if (weatherCode === 201) {
        return isDay ? weatherIcons.DayIcons.scatteredThunder : weatherIcons.NightIcons.scatteredThunder;
    }else if (weatherCode === 202) {
        return weatherIcons.GeneralIcons.isolatedThunderstorms;
    }else if (weatherCode === 210) {
        return weatherIcons.GeneralIcons.isolatedThunderstorms;
    }else if (weatherCode === 211) {
        return weatherIcons.GeneralIcons.strongThunderstorms;
    }else if (weatherCode === 212) {
        return weatherIcons.GeneralIcons.strongThunderstorms;
    }else if (weatherCode === 221) {
        return weatherIcons.GeneralIcons.strongThunderstorms;
    }else if (weatherCode === 230) {
        return isDay ? weatherIcons.DayIcons.scatteredThunder : weatherIcons.NightIcons.scatteredThunder;
    }else if (weatherCode === 231) {
        return isDay ? weatherIcons.DayIcons.scatteredThunder : weatherIcons.NightIcons.scatteredThunder;
    }else if (weatherCode === 232) {
        return weatherIcons.GeneralIcons.isolatedThunderstorms;
    }else if (weatherCode === 300) {
        return weatherIcons.GeneralIcons.drizzle;
    }else if (weatherCode === 301) {
        return weatherIcons.GeneralIcons.drizzle;
    }else if (weatherCode === 302) {
        return weatherIcons.GeneralIcons.drizzle;
    }else if (weatherCode === 310) {
        return weatherIcons.GeneralIcons.drizzle;
    }else if (weatherCode === 311) {
        return weatherIcons.GeneralIcons.drizzle;
    }else if (weatherCode === 312) {
        return weatherIcons.GeneralIcons.drizzle;
    }else if (weatherCode === 313) {
        return weatherIcons.GeneralIcons.drizzle;
    }else if (weatherCode === 314) {
        return weatherIcons.GeneralIcons.showersRain;
    }else if (weatherCode === 321) {
        return weatherIcons.GeneralIcons.drizzle;
    }else if (weatherCode === 500) {
        return isDay ? weatherIcons.DayIcons.scatteredRain : weatherIcons.NightIcons.scatteredRain;
    }else if (weatherCode === 501) {
        return isDay ? weatherIcons.DayIcons.scatteredRain : weatherIcons.NightIcons.scatteredRain;
    }else if (weatherCode === 502) {
        return weatherIcons.GeneralIcons.showersRain;
    }else if (weatherCode === 503) {
        return weatherIcons.GeneralIcons.heavyRain;
    }else if (weatherCode === 504) {
        return weatherIcons.GeneralIcons.heavyRain;
    }else if (weatherCode === 511) {
        return weatherIcons.GeneralIcons.showersRain;
    }else if (weatherCode === 520) {
        return isDay ? weatherIcons.DayIcons.scatteredRain : weatherIcons.NightIcons.scatteredRain;
    }else if (weatherCode === 521) {
        return weatherIcons.GeneralIcons.showersRain;
    }else if (weatherCode === 522) {
        return weatherIcons.GeneralIcons.heavyRain;
    }else if (weatherCode === 531) {
        return weatherIcons.GeneralIcons.showersRain;
    }else if (weatherCode === 600) {
        return isDay ? weatherIcons.DayIcons.scatteredSnow : weatherIcons.NightIcons.scatteredSnow;
    }else if (weatherCode === 601) {
        return isDay ? weatherIcons.DayIcons.scatteredSnow : weatherIcons.NightIcons.scatteredSnow;
    }else if (weatherCode === 602) {
        return weatherIcons.GeneralIcons.heavySnow;
    }else if (weatherCode === 611) {
        return weatherIcons.GeneralIcons.sleetHail;
    }else if (weatherCode === 612) {
        return isDay ? weatherIcons.DayIcons.scatteredSnow : weatherIcons.NightIcons.scatteredSnow;
    }else if (weatherCode === 615) {
        return  weatherIcons.GeneralIcons.mixedRainSnow;
    }else if (weatherCode === 616) {
        return weatherIcons.GeneralIcons.mixedRainSnow;
    }else if (weatherCode === 620) {
        return isDay ? weatherIcons.DayIcons.scatteredSnow : weatherIcons.NightIcons.scatteredSnow;
    }else if (weatherCode === 621) {
        return weatherIcons.GeneralIcons.showersSnow;
    }else if (weatherCode === 622) {
        return weatherIcons.GeneralIcons.heavySnow;
    }else if (weatherCode === 701) {
        return weatherIcons.GeneralIcons.hazeFogDustSmoke;
    }else if (weatherCode === 711) {
        return weatherIcons.GeneralIcons.hazeFogDustSmoke;
    }else if (weatherCode === 721) {
        return weatherIcons.GeneralIcons.hazeFogDustSmoke;
    }else if (weatherCode === 731) {
        return weatherIcons.GeneralIcons.hazeFogDustSmoke;
    }else if (weatherCode === 741) {
        return weatherIcons.GeneralIcons.hazeFogDustSmoke;
    }else if (weatherCode === 751) {
        return weatherIcons.GeneralIcons.hazeFogDustSmoke;
    }else if (weatherCode === 761) {
        return weatherIcons.GeneralIcons.hazeFogDustSmoke;
    }else if (weatherCode === 762) {
        return weatherIcons.GeneralIcons.hazeFogDustSmoke;
    }else if (weatherCode === 771) {
        return weatherIcons.GeneralIcons.windy;
    }else if (weatherCode === 781) {
        return weatherIcons.GeneralIcons.tornado;
    }else if (weatherCode === 800) {
        return isDay ? weatherIcons.DayIcons.clear : weatherIcons.NightIcons.clear;
    }else if (weatherCode === 801) {
        return isDay ? weatherIcons.DayIcons.mostlyClear : weatherIcons.NightIcons.mostlyClear;
    }else if (weatherCode === 802) {
        return isDay ? weatherIcons.DayIcons.partlyCloudy : weatherIcons.NightIcons.partlyCloudy;
    }else if (weatherCode === 803) {
        return isDay ? weatherIcons.DayIcons.mostlyCloudy : weatherIcons.NightIcons.mostlyCloudy;
    }else if (weatherCode === 804) {
        return weatherIcons.GeneralIcons.cloudy;
    }

    // Default case for any unhandled weather codes
    return "Invalid Value"; // Return a default cloudy icon
}

//TODO ELIMINAR ICONS NO USADOS
