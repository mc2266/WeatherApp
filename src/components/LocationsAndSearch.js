import { useState } from 'react'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import Locations from './Locations'
import {fetchCities, fetchCityData} from '../MetaWeather'


const LocationsAndSearch = ( {setActiveLocation} ) => {

  const [activeCity, updateActiveCity] = useState(0);
  const onLocationClick = (locationData) => {
    updateActiveCity(locationData['woeid'])
    setActiveLocation(locationData)
  }

  const [citiesData, setCities] = useState([])

  const addLocation = (newCity) => {
    setSearchState(-3)
    
    if (citiesData.map(city => city['woeid']).includes(newCity['woeid'])){
      alert('City has already been added!')
      return
    }
    setCities([...citiesData, newCity])
  }

  const [searchResults, setSearchResults] = useState([]);
  const [searchState, setSearchState] = useState(-3);
  const [usePrefixFilter, setPrefixFilter] = useState(false);

  const searchCities = async (query) => {
    if(!query) {
      alert("Please enter a query to search for.")
      return
    }
    setSearchState(-2)

    const woeids = await fetchCities(query, usePrefixFilter);
    setSearchState(woeids.length);

    const newSearchResults = await fetchCityData(woeids);
    setSearchResults(newSearchResults)

    if (newSearchResults.length > 0) {
      setSearchState(-1)
    }
  }

  return (
    <div className='infoContainer'>
      <h2>Locations</h2>
      <SearchBar onSearch={searchCities}/>
        <div>
        <input className='checkBox' type='checkbox' value={usePrefixFilter} onChange={() => setPrefixFilter(!usePrefixFilter)}/>
        Match result prefix exactly to search query.
        </div>
      {
        searchState !== -3 ?
        <SearchResults results={searchResults} searchState={searchState} addLocation={addLocation}/> 
        : <></>

      }
      <Locations citiesData={citiesData} onClick={onLocationClick} activeCity={activeCity}/>
    </div>
  )
}

export default LocationsAndSearch
