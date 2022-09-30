import React from 'react';
import './App.css'; 
import {HashRouter, Routes, Route} from 'react-router-dom';
import Header from "./componentes/header/Header";
import Home from "./pages/home/Home";
import SobreMi from "./pages/sobreMi/SobreMi";
import Proyectos from "./pages/proyectos/Proyectos";
import Contactame from "./pages/contactame/Contactame";




function App() {
  return (
    <>
     <HashRouter>
      <Header/>
     
    

  
      <Routes>
       
        <Route path='/home' element={<Home />} />
        <Route path='/sobremi' element={<SobreMi />} />
        <Route path='proyectos' element={<Proyectos />} />
        <Route path='/contactame' element={<Contactame />} />
      <Route path ='*' element={<p>Not found </p>} />
      </Routes>

     </HashRouter>
     </>
  )
}

export default App;
