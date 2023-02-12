import logo from './logo.svg';
import './App.css';
import QWeather from './Components/QWeather';
import rootStore from './Store/rootStore';
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={rootStore}>
            <QWeather />
        </Provider>
    );
}

export default App;
