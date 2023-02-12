function CityWeather({ weather }) {

    return (
        <table>
            <tbody>
                {
                    Object.keys(weather).map(key => (
                        <tr key={key}><th>{key}</th><td>{weather[key]}</td></tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default CityWeather;