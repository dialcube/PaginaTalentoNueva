import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import TalentoMejorada from "./Components/TalentoMejorada";

import { BrowserRouter as Router,  Routes } from "react-router-dom";

import './Components/TalentoMejorada.css';

function App() {
  return (
    <div className="App">
      <Router>
        <TalentoMejorada />
        {/* <Inicio/> */}
        <Routes>
          
          {/* <Route path="/crearusuarios" element={<CrearUsuario />} /> */}
          {/* <Route path="/inicio" element={<Inicio />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
