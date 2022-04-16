import './app.scss';
import Nav from './components/Nav/Nav';
import Slider from './components/Slider/Slider';

const App = () => {
    return (
        <div className="app">
            <Nav />
            <Slider />
        </div>
    );
};

export default App;