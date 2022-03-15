import LocationOverview from "./LocationOverview"

// Component that lists the location overviews
const Locations = ({ citiesData, onClick, activeCity }) => {
    return (
        <div>
            {citiesData.map((cityData) => 
                <LocationOverview key={cityData.woeid} cityData={cityData} onClick={onClick} activeCity={activeCity}/>)
            }
        </div>
    )
}

export default Locations
