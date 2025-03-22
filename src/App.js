import Home from './components/Home/Home';
import AboutUs from './components/About/about';
import Healthy from './components/Healthy/healthy';
import Services from './components/Services/services';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <AboutUs/>
      <Healthy/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
