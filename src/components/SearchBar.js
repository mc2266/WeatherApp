import Button from "./Button"
import { useState } from 'react'

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
