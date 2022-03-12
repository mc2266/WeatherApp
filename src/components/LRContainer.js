import {useState, useEffect} from 'react'

import LocationsAndSearch from './LocationsAndSearch'
import WeatherData from './WeatherData'

const getURL = 'http://api.airvisual.com/v2/cities?state=Washington&country=USA&key='


const LRContainer = () => {
    var activeLocation = 0 
    const onLocationClick = (loc) => {
        console.log(loc)
    }

    useEffect(() => {
        const fetchTasks = async () => {
            const res = await fetch(getURL)
            const data = await res.json()
            console.log(data.data)
        }
    
        fetchTasks()
    }, [])
    


    return (
        <div className='LRContainer'>
            <LocationsAndSearch onLocationClick={onLocationClick}/>
            <WeatherData/>
        </div>
    )
  }
  
  export default LRContainer