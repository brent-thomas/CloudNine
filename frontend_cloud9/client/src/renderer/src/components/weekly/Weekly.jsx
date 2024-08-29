import React from 'react'
import styles from './weekly.module.css'
import getWeatherIcon from "../../renderWeatherIcon";
import droplet from '../../assets/drop.png' 

const Weekly = (props) => {

  const getWeekDay = (object) => {
    const date = new Date(object.dt * 1000)
    const weekday = date.toLocaleDateString('en-US', {weekday: 'short'})
    return weekday
  }

  return (
    <div className={styles.container}>
      <h1>8 Day Forecast</h1>
      <div>
        {props.data.map((item,index)=>{
          return(
            <div key={index} className={styles.card}>
              <div>
                <p>{getWeekDay(item)}</p>
                <div style={{display:'flex', alignItems:'center'}} >
                  <img src={droplet} style={{width:'10px', height:'10px'}}/>
                  <p style={{fontSize:'14px'}}>{item.pop * 100}%</p>
                </div>
              </div>
              <div>
                <img src={item.weather ? getWeatherIcon(item.weather[0].main) : ''} className={styles.daily_icon}/>
              </div> 
              <div>
                <p>{parseInt(item.temp.min)}° / {parseInt(item.temp.max)}°</p>
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Weekly