import actions from "./actions";

const defaultState = {
    topCities: [],
    citiesLookup: [],
    cityWeather: {},
    topCities: [],
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.SET_CITY_WEATHER: return ({
            ...state,
            cityWeather: action.payload
        });
        case actions.SET_CITIES_LOOKUP: return ({
            ...state,
            citiesLookup: action.payload
        });
        case actions.SET_TOP_CITIES: return ({
            ...state,
            topCities: action.payload
        });
        default: return state;
    }
}

export default rootReducer;