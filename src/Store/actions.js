const actions = {
    GET_CITY_WEATHER: "GET_CITY_WEATHER",
    GET_CITIES_LOOKUP: "GET_CITIES_LOOKUP",
    SET_CITY_WEATHER: "SET_CITY_WEATHER",
    SET_CITIES_LOOKUP: "SET_CITIES_LOOKUP",
    GET_TOP_CITIES: "GET_TOP_CITIES",
    SET_TOP_CITIES: "SET_TOP_CITIES"
}

export const getCityWeatherSaga = (data) => ({
    type: actions.GET_CITY_WEATHER,
    payload: data,
})

export const setCityWeatherRedux = (data) => ({
    type: actions.SET_CITY_WEATHER,
    payload: data,
})

export const getCitiesLookupSaga = (data) => ({
    type: actions.GET_CITIES_LOOKUP,
    payload: data,
})

export const setCitiesLookupRedux = (data) => ({
    type: actions.SET_CITIES_LOOKUP,
    payload: data,
})

export const getTopCitiesSaga = () => ({
    type: actions.GET_TOP_CITIES
})

export const setTopCitiesRedux = (data) => ({
    type: actions.SET_TOP_CITIES,
    payload: data
})

export default actions;