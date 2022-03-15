import {useState} from 'react'

import LocationsAndSearch from './LocationsAndSearch'
import WeatherData from './WeatherData'



const LRContainer = () => {
  const [ActiveData, setActiveData] = useState([]);

  const onLocClick = (locationData) => {
    setActiveData(locationData)
  }

  return (
    <div className='LRContainer'>
      <LocationsAndSearch setActiveLocation={onLocClick}/>
      <WeatherData data={ActiveData}/>
    </div>
  )
}

export default LRContainer

