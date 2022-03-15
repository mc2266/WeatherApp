import React from 'react'

const WeatherData = ({data}) => {
  return (
    <div className='infoContainer'>
      <h1>{data['city']}, {data['state']}</h1>
    <table>
      <tc>
        <td>Emil</td>
        <td>Tobias</td>
      </tc>
      <tc>
        <td>Emil</td>
        <td>Tobias</td>
      </tc>
    </table>
    </div>
  )
}

export default WeatherData
