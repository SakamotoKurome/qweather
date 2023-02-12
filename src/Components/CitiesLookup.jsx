function CitiesLookup({ cities, onClick }) {
    return (
        <ul>
            {
                cities.map(city => (
                    <li key={city.id} onClick={(() => onClick(city.id))}>
                        {city.adm1 + city.adm2 + city.name}
                    </li>
                ))
            }
        </ul>
    );
}

export default CitiesLookup;