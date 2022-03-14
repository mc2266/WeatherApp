import { useState } from 'react'

const SearchResult = ({result, addLocation}) => {
  const [hovered, setHover] = useState(false);


  return (
    <div className={'searchResult'+(hovered?'Highlight':'Item')} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => addLocation(result)}>
      {result['city'] + ', ' + result['state']}
    </div>
  )
}

export default SearchResult
