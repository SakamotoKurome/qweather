import { useEffect, useState } from 'react';
import CitiesLookup from './CitiesLookup';
import CityWeather from './CityWeather';

const API_KEY = '2fbc7c209b0a448f8dae0dc53ee5892e';
const GEO_API = 'https://geoapi.qweather.com/v2/city/';
const WEATHER_API = 'https://devapi.qweather.com/v7/weather/'

async function apiRequest(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch {
        console.log('Error: apiRequest');
    }
}

async function getTopCities() {
    try {
        const topcities = await apiRequest(`${GEO_API}top?number=5&range=cn&key=${API_KEY}`);
        console.log(topcities.topCityList)
        return topcities.topCityList;
    } catch {
        console.log('Error: topCities');
    }
}

async function getCitiesLookup(location) {
    try {
        const citiesLookup = await apiRequest(`${GEO_API}lookup?location=${location}&key=${API_KEY}`);
        console.log(citiesLookup.location)
        return citiesLookup.location;
    } catch {
        console.log('Error: getCitiesLookup');
    }
}

async function getCityWeather(cityID) {
    console.log(cityID)
    const weatherNow = await apiRequest(`${WEATHER_API}now?location=${cityID}&key=${API_KEY}`);
    console.log(weatherNow.now)
    return weatherNow.now;
}

function QWeather() {
    const [topCities, setTopCities] = useState([]);
    const [cityInputTextValue, setCityInputTextValue] = useState('');
    const [citiesLookup, setCitiesLookup] = useState([]);
    const [cityWeather, setCityWeather] = useState({})

    useEffect(() => {
        getTopCities().then(result => setTopCities(result));
    }, []);

    const handleSumit = (e) => {
        e.preventDefault();
        setCityWeather({});
        getCitiesLookup(cityInputTextValue).then(result => setCitiesLookup(result))
    };

    const handleChange = (e) => {
        setCityInputTextValue(e.target.value);
    }

    const handleClick = (cityID) => {
        console.log('click')
        getCityWeather(cityID).then(result => setCityWeather(result))
    }

    return (
        <>
            <form onSubmit={handleSumit}>
                <label htmlFor="cityInputText">City:&nbsp;</label>
                <input
                    id="cityInputText"
                    type="text"
                    placeholder="Search..."
                    list="searchInput"
                    value={cityInputTextValue}
                    onChange={handleChange} />
                <datalist id="searchInput">
                    {
                        topCities.map(city => <option key={city.name} value={city.name} />)
                    }
                </datalist>
                <input type="submit" value="Submit" />
            </form>
            <CitiesLookup cities={citiesLookup} onClick={handleClick} />
            <CityWeather weather={cityWeather} />
        </>
    );
}

export default QWeather;