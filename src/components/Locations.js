import LocationOverview from "./LocationOverview"

const Locations = ({ cities }) => {
    return (
        <>
            {cities.map((city) =>
                <LocationOverview city={city.city} state={city.state}
                temperature={city.temperature} weather={city.weather}
            />)}
    </>
  )
}

export default Locations
