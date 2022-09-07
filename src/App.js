import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Myservices from './pages/myservices';
import AboutMe from './pages/aboutme';
import Mywork from './pages/mywork';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Myservices/>
    <AboutMe/>
    <Mywork/>
    {/* <Footer/>  */}
    </div>
  );
}

export default App;
