import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCitiesLookupSaga, getTopCitiesSaga } from '../Store/actions';
import { useNavigate } from "react-router-dom";

function QWeather() {
    const [cityInputTextValue, setCityInputTextValue] = useState('');
    const topCities = useSelector(state => state.topCities);
    const dispath = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispath(getTopCitiesSaga())
    }, []);

    const handleSumit = (e) => {
        e.preventDefault();
        dispath(getCitiesLookupSaga({ location: cityInputTextValue }));
        navigate('/citiesLookup')
    };

    const handleChange = (e) => {
        setCityInputTextValue(e.target.value);
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
        </>
    );
}

export default QWeather;