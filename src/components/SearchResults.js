import SearchResult from "./SearchResult"
// 0+: search result count
// -1: done searching
// -2: searching
// -3: not searching
const SearchResults = ({ results, searchState, addLocation}) => { 

  var info;
  switch (searchState) {
    case -2:
      info = <p>Searching...</p>
      break;
    case -1:
      info = results.map(result => <SearchResult key={result['woeid']} result={result} addLocation={addLocation}/>)
      break;
    case 0:
      info = <p>No results found!</p>
      break;
    default:
      if (searchState > 20) {
        info = <p>Found {searchState} results, loading 20...</p>
      } else {
        info = <p>Loading {searchState} results... </p>
      }
  }

  return (
    <div className='searchResults'>
      {info}
    </div>
  )
}

export default SearchResults
