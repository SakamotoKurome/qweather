import { useDispatch, useSelector } from 'react-redux';
import { getCityWeatherSaga } from '../Store/actions';
import { useNavigate } from "react-router-dom";

function CitiesLookup() {
    const citiesLookup = useSelector(state => state.citiesLookup);
    const dispath = useDispatch();
    const navigate = useNavigate();

    const handleClick = (cityID) => {
        console.log('click');
        dispath(getCityWeatherSaga({ cityID: cityID }));
        navigate('/cityweather');
    }

    return (
        <>
            <h1>Cities Lookup</h1>
            <ul>
                {
                    citiesLookup.map(city => (
                        <li key={city.id} onClick={(() => handleClick(city.id))}>
                            {city.adm1 + city.adm2 + city.name}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default CitiesLookup;