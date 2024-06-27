import React, { useState } from "react";
import Inicio from "./TalentoMejorada";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate(); // Hook para la navegación
  
  // Estados para almacenar el email y la contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    // Validación del inicio de sesión
    if (email === "talento@talentotech.com" && password === "123") {
      setIsLoggedIn(true); // Cambia el estado para ocultar el componente
      navigate("/talentomejorada"); // Redirige al usuario al dashboard después de iniciar sesión
    } else {
      alert("El usuario o la contraseña son incorrectos");
    }
  };

  if (isLoggedIn) {
    return null; // No renderiza nada si el usuario está logueado
  }
  return (
    <div className="bg-gradient-to-r from-violet-400 to-purple-300 to-violet-600 min-h-screen flex justify-center items-center">
      <form className="form bg-white p-8 rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Please login</h2>
        <input
          type="text"
          name="userName"
          placeholder="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoFocus
          className="block w-full h-12 px-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className="block w-full h-12 px-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
        />
        <label className="checkbox flex items-center mb-4">
          <input
            type="checkbox"
            value="remember-me"
            id="rememberMe"
            name="rememberMe"
            className="h-4 w-4 mr-2"
          />{" "}
          Remember me
        </label>
        <button
          className="button bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
      </form>
    
    </div>
  );
}
