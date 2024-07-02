import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import TalentoMejorada from "./Components/TalentoMejorada";
import Inicio from "./Components/Inicio";
import  { useEffect } from "react";


function App() {
  useEffect(() => {
    sessionStorage.clear();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/talentomejorada/*" element={<TalentoMejorada />} />
        <Route path="/talentomejorada/inicio" element={<Inicio />} />

        <Route path="*" element={<Login />} /> {/* Ruta por defecto */}
      </Routes>
    </Router>
  );
}

export default App;
