import LocationName from './LocationName'

const LocationOverview = ({ city, state, temperature, weather }) => {

  return (
    <div className='location'>
      <LocationName city={city} state={state}/>
      <h1>{temperature}°C</h1>
      {console.log('./../weatherIcons/'+weather+'.png')}
      <img src={'./../weatherIcons/'+weather+'.png'}/>
    </div>
  )
}

export default LocationOverview
