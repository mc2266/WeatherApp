import { useState } from 'react'

import SearchBar from './SearchBar'
import Locations from './Locations'

const LocationsAndSearch = ( ) => {
  const [cities, setCities] = useState([
    {
      id: 1,
      city: 'Seattle',
      state: 'Washington',
      temperature: 62,
      weather: '01d'
    },
    {
      id: 2,
      city: 'San Francisco',
      state: 'California',
      temperature: 68,
      weather: '01n'
    },
    {
      id: 3,
      city: 'Dallas',
      state: 'Texas',
      temperature: 75,
      weather: '02d'
    }
  ])

  const searchCities = (city) => {
    console.log(city)
  }


  return (
    <div className='infoContainer'>
      <h2>Locations</h2>
      <SearchBar onSearch={searchCities}/>
      <Locations cities={cities} />
    </div>
  )
}

export default LocationsAndSearch
