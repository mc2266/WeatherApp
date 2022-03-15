import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

// If data contains weather dat then display it in an easy 
// to read table
const WeatherData = ({data}) => {
  if(data == 'empty'){
    return (
      <div className='infoContainer'>
        <h2>Add and select a city to see more!</h2>
      </div>
    )
  }

  return (
    <div className='infoContainer'>
      <h1>{data['city']}, {data['state']}</h1>
      <h2>{data['weather']}</h2>
    <table>
      <tr>
        <td style={{fontWeight:'bold'}}>Currently:</td>
        <td>{data['temp_cur']}°F</td>
        <td></td>
        <td style={{fontWeight:'bold'}}>Wind Speed:</td>
        <td>{Math.round(data['wind_speed']*10)/10}mph</td>
      </tr>
      <tr>
        <td style={{fontWeight:'bold'}}>High:</td>
        <td>{data['temp_max']}°F</td>
        <td></td>
        <td style={{fontWeight:'bold'}}>Direction:</td>
        <td>{data['wind_dir']}</td>
      </tr>
      <tr>
        <td style={{fontWeight:'bold'}}>Low:</td>
        <td>{data['temp_min']}°F</td>
        <td></td>
        <td style={{fontWeight:'bold'}}>Visibility:</td>
        <td>{Math.round(data['visibility']*10)/10}mi</td>
      </tr>
      <tr>
        <td style={{fontWeight:'bold'}}>Humidity:</td>
        <td>{data['humidity']}%</td>
        <td></td>
        <td style={{fontWeight:'bold'}}>Predictability:</td>
        <td>{data['predictability']}%</td>
      </tr>


    </table>
    </div>
  )
}

export default WeatherData
