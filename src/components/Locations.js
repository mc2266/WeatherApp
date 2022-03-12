import LocationOverview from "./LocationOverview"

const Locations = ({ cities, onClick }) => {
    return (
        <div>
            {cities.map((city) => 
                <LocationOverview key={city.id} city={city} onClick={onClick}/>)
            }
        </div>
    )
}

export default Locations
