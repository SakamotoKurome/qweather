import logo from './logo.svg';
import './App.css';
import QWeather from './Components/QWeather';
import { Routes, Route, Link } from "react-router-dom";
import CityWeather from './Components/CityWeather/index';
import CitiesLookup from './Components/CitiesLookup/index';
import NotFound from './Components/NotFound';

function App() {
    return (
        <Routes>
            <Route path='/' element={<QWeather />} />
            <Route path='/citiesLookup' element={<CitiesLookup />} />
            <Route path='/cityweather' element={<CityWeather />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
