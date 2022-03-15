import { useState } from 'react'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import Locations from './Locations'
import {fetchCities, fetchCityData} from '../MetaWeather'

// Holds the search bar, will display search results and also holds
// the 'Locations' component.
const LocationsAndSearch = ( {setActiveLocation} ) => {
  // State of the active city, 'activeCity' is the 'woeid' of the city.
  // A 'woeid' is an unique number representing a locations on Earth.
  const [activeCity, updateActiveCity] = useState(0);
  const onLocationClick = (locationData) => {
    updateActiveCity(locationData['woeid'])
    setActiveLocation(locationData)
  }

  // State containing each cities' data. If you want cities initially
  // open then citiesData could be initialized with cities on start.
  const [citiesData, setCities] = useState([])
  const addLocation = (newCity) => {
    setSearchState(-3)
    if (citiesData.map(city => city['woeid']).includes(newCity['woeid'])){
      alert('City has already been added!')
      return
    }
    setCities([...citiesData, newCity])
  }

  // States to store the search results, state of the search process
  // and if filtering by prefix matching is enable.
  const [searchResults, setSearchResults] = useState([]);
  const [searchState, setSearchState] = useState(-3);
  const [usePrefixFilter, setPrefixFilter] = useState(false);

  // Called when the search button is pressed
  const searchCities = async (query) => {
    // make sure a query was entered and then set the state to searching
    if(!query) {
      alert("Please enter a query to search for.")
      return
    }
    setSearchState(-2)

    // Wait for the response of the city 'woeids' that meet the search
    // requirements then update search state to number of locations
    // found.
    const woeids = await fetchCities(query, usePrefixFilter);
    setSearchState(woeids.length);

    // Load more details for each of the matching 'woeids'
    // Update search results state with results
    const newSearchResults = await fetchCityData(woeids);
    setSearchResults(newSearchResults)

    //update search state again if necessary
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
