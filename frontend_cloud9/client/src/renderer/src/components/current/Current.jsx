import React from "react";
import styles from './current.module.css'
import getWeatherIcon from "../../renderWeatherIcon";


const Current = (props) => {

  return (
    <div className={styles.container}>
        <div>
          <h1>{props.city}</h1>
          <h1>{parseInt(props.data.temp)}°</h1>
        </div>
        <div>
          <img src={props.data.weather ? getWeatherIcon(props.data.weather[0].main) : ''}/>
        </div>
    </div>
  )
}

export default Current