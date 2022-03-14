import {useState, useEffect} from 'react'

import LocationsAndSearch from './LocationsAndSearch'
import WeatherData from './WeatherData'



const LRContainer = () => {
    

  const onLocClick = (location) => {
    console.log(location)
  }

  return (
    <div className='LRContainer'>
      <LocationsAndSearch onLocationClick={onLocClick}/>
      <WeatherData />
    </div>
  )
}

export default LRContainer

