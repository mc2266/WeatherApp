const LocationName = ({ city, state }) => {
    return (
        <div style={{maxWidth: 80}}>
            <h2>{city}</h2>
            <h3>{state}</h3>
        </div>
    );
};

export default LocationName
