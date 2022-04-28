import NavBar from './Components/NavBar';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Hypno from './Pages/Hypno';
import Atelier from './Pages/Atelier';
import Ethique from './Pages/Ethique';
import Footer from './Components/Footer'
import Error from './Pages/Error';
import Voyance from './Pages/Voyance';


function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
      <Routes>
          <Route path="/caroline-chaussin/" element={<Home/>} />
          <Route path="/caroline-chaussin/voyance" element={<Voyance/>} />
          <Route path="/caroline-chaussin/hypno" element={<Hypno/>} />
          <Route path="/caroline-chaussin/atelier" element={<Atelier/>}/>
          <Route path="/caroline-chaussin/ethique" element={<Ethique/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
