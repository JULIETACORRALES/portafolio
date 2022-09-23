import React from 'react';
import Home from './pages/home/Home';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Inicio from './componentes/inicio/Inicio';
import Sobre_mi from './componentes/sobre_mi/Sobre_mi';
import Proyectos from './componentes/proyectos/Proyectos'
import Contactame from './componentes/contactame/Contactame'
import Header from './componentes/header/Header'





function App() {
  return (
    <>
     <HashRouter>
      <Header/>
      
     
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/sobre_mi' element={<Sobre_mi />} />
        <Route path='proyectos' element={<Proyectos />} />
        <Route path='/contactame' element={<Contactame />} />
      <Route path ='*' element={<p>Not found </p>} />
      </Routes>

     </HashRouter>
     </>
  )
}

export default App;
