import React, {useEffect, useRef} from 'react'
import styles from './hourly.module.css'
import getWeatherIcon from "../../renderWeatherIcon"; 
const Hourly = (props) => {

  const scrollRef = useRef(null);

  const dt_to_hour_string = (dt) => {
    const date = new Date(dt * 1000)
    const hourString = date.toLocaleTimeString([], {hour: 'numeric', hour12:true})
    return hourString
  }

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0; 
    }
  }, [props.data]);

  return (
    <div className={styles.container}>
      <h1>Hourly Forecast</h1>
      <div className={styles.hourly_cards} ref={scrollRef}>
        {
        props.data.slice(1,25).map((item,index)=>{
          return(
            <div key={index} className={styles.card}>
              <p>{dt_to_hour_string(item.dt)}</p>
              <img src={item.weather ? getWeatherIcon(item.weather[0].main) : ''} className={styles.hourly_icon}/>
              <p className={styles.temp}>{parseInt(item.temp)}°</p>
            </div>
          )
        })
        }
      </div>
        
    </div>
  )
}

export default Hourly