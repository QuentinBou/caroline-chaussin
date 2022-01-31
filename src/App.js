import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Hypno from './Pages/Hypno';
import Carto from './Pages/Carto';
import Ethique from './Pages/Ethique';
import Atelier from './Pages/Atelier'
import Maux from './Pages/Ateliers/Maux';
import Tao from './Pages/Ateliers/Tao';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/caroline-chaussin/" element={<Home/>} />
        <Route path="/caroline-chaussin/hypno" element={<Hypno/>} />
        <Route path="/caroline-chaussin/carto" element={<Carto/>} />
        <Route path="/caroline-chaussin/atelier" element={<Atelier/>}>
          <Route path="/caroline-chaussin/atelier/tao" element={<Tao/>} />
          <Route path="/caroline-chaussin/atelier/maux" element={<Maux/>} />
        </Route>
        <Route path="/caroline-chaussin/ethique" element={<Ethique/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
