import { useState } from 'react'

import LocationName from './LocationName'

const LocationOverview = ({ city, onClick }) => {
  const [hover, setHover] = useState(false);
  const selectionStye = {
    background: city.active ? 'rgb(160,160,160)' : (hover ? 'rgb(120,120,120)' : 'rgb(90,90,90)')
  }
  

  return (
    <
      div className='location' onClick={() => onClick(city.id)}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={selectionStye}
    >
      <LocationName city={city.city} state={city.state}/>
      <h1>{city.temperature}°C</h1>
      <img src={'https://www.metaweather.com/static/img/weather/'+city.weather+'.svg'}/>
    </div>
  )
}

export default LocationOverview
