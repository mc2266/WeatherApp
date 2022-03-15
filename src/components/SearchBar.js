import { useState } from 'react'

import Button from './Button'

// This component contains the search button and the text entry bar.
const SearchBar = ({ onSearch }) => {
    const [text, setText] = useState('')


    return (
        <div className='search'>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Search for a US City to Add'/>
            <Button text="Search" onClick={() => onSearch(text)}/>
        </div>
    )
}

export default SearchBar
