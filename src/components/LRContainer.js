import {useState} from 'react'

import LocationsAndSearch from './LocationsAndSearch'
import WeatherData from './WeatherData'


// Contains the left and the right infoContains (search/ 
// added locations) and detailed location view.
const LRContainer = () => {
  // state for the currently active location. This function 'moves the
  // data' from the left side of the webpage to the right.
  const [ActiveData, setActiveData] = useState("empty");
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

