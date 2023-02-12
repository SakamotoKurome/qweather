import { put, takeLatest } from 'redux-saga/effects'
import actions from './actions';
import { setCitiesLookupRedux, setCityWeatherRedux, setTopCitiesRedux } from './actions'

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

function* getTopCities() {
    const topcities = yield apiRequest(`${GEO_API}top?number=5&range=cn&key=${API_KEY}`);
    console.log(topcities.topCityList);
    yield put(setTopCitiesRedux(topcities.topCityList));
}

function* getCitiesLookup(action) {
    const citiesLookup = yield apiRequest(`${GEO_API}lookup?location=${action.payload.location}&key=${API_KEY}`);
    console.log(citiesLookup.location);
    yield put(setCitiesLookupRedux(citiesLookup.location));
}

function* getCityWeather(action) {
    console.log(action.payload.cityID)
    const weatherNow = yield apiRequest(`${WEATHER_API}now?location=${action.payload.cityID}&key=${API_KEY}`);
    console.log(weatherNow.now);
    yield put(setCityWeatherRedux(weatherNow.now));
}

function* rootSaga() {
    yield takeLatest(actions.GET_CITIES_LOOKUP, getCitiesLookup);
    yield takeLatest(actions.GET_CITY_WEATHER, getCityWeather);
    yield takeLatest(actions.GET_TOP_CITIES, getTopCities)
}

export default rootSaga;