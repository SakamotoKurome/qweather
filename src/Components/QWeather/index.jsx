import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCitiesLookupSaga, getTopCitiesSaga } from '../../Store/actions';
import { useNavigate } from "react-router-dom";
import "./style.css";

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
        if (cityInputTextValue) {
            dispath(getCitiesLookupSaga({ location: cityInputTextValue }));
            navigate('/citiesLookup')
        } else {
            alert("Please input your locaton");
        }
    };

    const handleChange = (e) => {
        setCityInputTextValue(e.target.value);
    }

    return (
        <div className='qweather'>
            <form onSubmit={handleSumit}>
                <label htmlFor="cityInputText">City:</label>
                <input
                    id="cityInputText"
                    type="text"
                    placeholder="e.g. Wuhan"
                    list="searchInput"
                    value={cityInputTextValue}
                    onChange={handleChange} />
                <datalist id="searchInput">
                    {
                        topCities && topCities.map(city => <option key={city.name} value={city.name} />)
                    }
                </datalist>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default QWeather;