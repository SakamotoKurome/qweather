import { useSelector } from 'react-redux';

function CityWeather() {
    const cityWeather = useSelector(state => state.cityWeather);
    return (
        <>
            <h1>City Weather</h1>
            <table>
                <tbody>
                    {
                        Object.keys(cityWeather).map(key => (
                            <tr key={key}><th>{key}</th><td>{cityWeather[key]}</td></tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default CityWeather;