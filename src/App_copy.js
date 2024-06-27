import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import TalentoMejorada from "./Components/TalentoMejorada";
import Sesiones from "./Components/Sesiones";
import { BrowserRouter as Router,  Routes,Route } from "react-router-dom";

import './Components/TalentoMejorada.css';
import CrearSesion from "./Components/CrearSesion";
import Calificaciones from "./Components/Calificaciones";
import Login from "./Components/Login";
import Inicio from "./Components/Inicio";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Login />
         {/* <TalentoMejorada /> */}
     
        <Routes>
  
          {/* <Route path="/crearusuarios" element={<CrearUsuario />} /> */}
          {/* <Route path="/talentomejorada" element={<TalentoMejorada />} />

          <Route path="/inicio" element={<Inicio/>}/> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
