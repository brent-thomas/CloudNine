import clearIcon from './assets/sun.png'
import cloudyIcon from  './assets/cloudy_day.png'
import rainyIcon from './assets/rainy-day.png'
import stormIcon from './assets/lightning.png'
import snowIcon from './assets/snowflake.png'

export default function getWeatherIcon(condition){
    switch(condition){
        case "Clear":
            return clearIcon 
        case "Clouds":
            return cloudyIcon
        case "Rain":
            return rainyIcon
        case "Snow":
            return snowIcon
        case "Thunderstorm":
            return stormIcon
        default:
            return clearIcon
    }
}