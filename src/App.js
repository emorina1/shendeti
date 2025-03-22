import Home from './components/Home/Home';
import Navbar from './components/NavBar/NavBar';
import AboutUs from './components/About/about';
import Healthy from './components/Healthy/healthy';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <Navbar/>
      <AboutUs/>
      <Healthy/>
    </div>
  );
}

export default App;
