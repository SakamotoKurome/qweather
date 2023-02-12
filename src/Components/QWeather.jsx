import { useEffect, useState } from 'react';
import CitiesLookup from './CitiesLookup';
import CityWeather from './CityWeather';
import { useDispatch, useSelector } from 'react-redux';
import { getCitiesLookupSaga, getCityWeatherSaga, getTopCitiesSaga } from '../Store/actions';

function QWeather() {
    const [cityInputTextValue, setCityInputTextValue] = useState('');
    const citiesLookup = useSelector(state => state.citiesLookup);
    const cityWeather = useSelector(state => state.cityWeather);
    const topCities = useSelector(state => state.topCities);
    const dispath = useDispatch();

    useEffect(() => {
        dispath(getTopCitiesSaga())
    }, []);

    const handleSumit = (e) => {
        e.preventDefault();
        dispath(getCitiesLookupSaga({ location: cityInputTextValue }))
    };

    const handleChange = (e) => {
        setCityInputTextValue(e.target.value);
    }

    const handleClick = (cityID) => {
        console.log('click')
        dispath(getCityWeatherSaga({ cityID: cityID }))
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