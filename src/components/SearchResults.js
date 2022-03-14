import SearchResult from "./SearchResult"

const SearchResults = ({ results }) => {
  return (
    <div>
      {
          results.map(result =>
            <SearchResult result={result}/>)
      }
    </div>
  )
}

export default SearchResults
