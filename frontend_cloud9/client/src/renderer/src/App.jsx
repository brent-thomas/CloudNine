import React, {useState, useEffect} from 'react'
import './app.css'
import Current from './components/current/Current';
import Hourly from './components/hourly/Hourly';
import Weekly from './components/weekly/Weekly';
import logo from './assets/CloudNine.png'
import LoadingOverlay from './components/overlay/LoadingOverlay';

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  const [loading, setloading] = useState(false)
  const [input, setInput] = useState('')
  const [state, setState] = useState({
    current: {},
    hourly: [],
    daily: []
  })



  const fetchWeather = async (zip) =>{
    try{
      setloading(true)
      if(zip && zip.length == 5){
      const response = await fetch(`http://localhost:3000/weather?zip=${zip}`, {mode:'cors'})
      const data = await response.json()
      setState({
        current: data.current,
        hourly: data.hourly,
        daily: data.daily,
        city: data.city
      })
      setTimeout(() => {
        setloading(false)
      }, 500);
      }
    } catch(e){
      console.error('Error fetching data:', e)
    }
    
  }

  useEffect(()=>{
      fetchWeather('30012')
  },[])
  
  return (
    <div className='container'>
      {loading && <LoadingOverlay />}
      <div className='header'>
          <img src={logo} className='logo'/>
          <div>
            <input 
            type="text" 
            maxLength={6} 
            value={input} 
            placeholder='Enter a ZIP code'
            onChange={(e)=>{
              setInput(e.target.value)
            }}/>
            <button type="button" onClick={()=> fetchWeather(input)}>Search</button>
          </div>
      </div>


      <div className='flex'>
        <div className='left-column'>
          <Current data={state.current} city={state.city}/>
          <Hourly data={state.hourly}/>
        </div>
        <div className='right-column'>
          <Weekly data={state.daily}/>
        </div>
      </div>
      
    </div>
  )
}

export default App

