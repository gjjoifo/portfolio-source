import './App.css';
import './Theme.css'
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom'
import SymSym from './pages/projects/SymSym';
import Ges from './pages/projects/Ges';
import JpegA from './pages/projects/JpegA';
import Engine from './pages/projects/Engine';
import Powder from './pages/projects/Powder';
import Model from './pages/projects/Model';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>

            <Route path="/project/symsym" element={<SymSym/>}/>
            <Route path="/project/ges" element={<Ges />}/>
            <Route path="/project/engine" element={<Engine />}/>
            <Route path="/project/ia" element={<JpegA />}/>
            <Route path="/project/powder" element={<Powder />}/>
            <Route path="/project/model" element={<Model />}/>
      </Routes>     
    </>
  );
}

export default App;
