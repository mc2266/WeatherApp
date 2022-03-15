import { useState } from 'react'

import LocationName from './LocationName'



// This component
const LocationOverview = ({ cityData, onClick, activeCity }) => {
  const [hover, setHover] = useState(false);
  const selectionStye = {
    background: activeCity===cityData['woeid'] ? 'rgb(160,160,160)' : (hover ? 'rgb(120,120,120)' : 'rgb(90,90,90)')
  }
  
  return (
    <div className='location' onClick={() => onClick(cityData)}onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={selectionStye}>
      <LocationName city={cityData['city']} state={cityData['state']}/>
      <h1>{cityData['temp_cur']}°</h1>
      <img src={'https://www.metaweather.com/static/img/weather/'+cityData['icon']+'.svg'}/>
    </div>
  )
}

export default LocationOverview
