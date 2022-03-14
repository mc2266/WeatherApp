import { useState } from 'react'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import Locations from './Locations'


const LocationsAndSearch = ( {onLocationClick} ) => {
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

  const addLocation = (locationID) => {
    console.log(locationID)
  }

  const [searchResults, setSearchResults] = useState([]);
  const [searchState, setSearchState] = useState(-3);

  const searchCities = async (query) => {
    if(!query) {
      alert("Please enter a query to search for.")
      return
    }
    setSearchState(-2)
    console.log('searching',query)
    const res = await fetch('location/search/?query='+query)
    const data = await res.json()
    const woeids = await data.map(item => item['woeid'])
    setSearchState(woeids.length)
    const newSearchResults = []
    for (var i = 0; i < woeids.length && i < 20; i++) {
      const cityRes = await fetch('location/'+woeids[i]+'/')
      const cityData = await cityRes.json()
      const cityInfo = {
        woeid:woeids[i],
        city:cityData['title'],
        state:cityData['parent']['title'],
      }
      newSearchResults.push(cityInfo)
      console.log(newSearchResults)
    }
    setSearchResults(newSearchResults)
    setSearchState(-1)
  }

  return (
    <div className='infoContainer'>
      <h2>Locations</h2>
      <SearchBar onSearch={searchCities}/>
      {
        searchState !== -3 ?
        <SearchResults results={searchResults} searchState={searchState} addLocation={addLocation}/> 
        : <></>

      }
      <Locations cities={cities} onClick={onLocationClick}/>
    </div>
  )
}

export default LocationsAndSearch
