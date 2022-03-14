import { useState } from 'react'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import Locations from './Locations'


const LocationsAndSearch = ( {onLocationClick} ) => {

  const [searchResults, setResults] = useState([]);

  const searchCities = (query) => {
    if(!query) {
      alert("Please enter a query to search for.")
      return
    }

    console.log('searching',query)
    fetch('location/search/?query='+query)
      .then(res => res.json())
      .then(data => data.map(item => item['woeid']))
      .then(woeids => woeids.map((woeid) =>
        fetch('location/'+woeid+'/')
          .then(res => res.json())
          .then(data => ({
            woeid:data['woeid'],
            city:data['title'],
            state:data['parent']['title']
          }))
          .then(cityState => setResults([...searchResults, cityState]))
      ))
    }


  const [cities, setCities] = useState([
    {
      id: 1,
      city: 'Seattle',
      state: 'Washington',
      temperature: 62,
      weather: 'hr',
      active: false
    },
    {
      id: 2,
      city: 'San Francisco',
      state: 'California',
      temperature: 68,
      weather: 's',
      active: false
    },
    {
      id: 3,
      city: 'Dallas',
      state: 'Texas',
      temperature: 75,
      weather: 'lc',
      active: false
    }
  ])

  return (
    <div className='infoContainer'>
      <h2>Locations</h2>
      <SearchBar onSearch={searchCities}/>
      {
        searchResults.length > 0 ?
        <SearchResults results={searchResults}/> : <></>

      }
      <Locations cities={cities} onClick={onLocationClick}/>
    </div>
  )
}

export default LocationsAndSearch
