import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Img/TalentoInicio.png"; // Importa la imagen de fondo

export default function Login() {
  const navigate = useNavigate(); // Hook para la navegación

  // Estados para almacenar el email y la contraseña
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar si el usuario está logueado

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    try {
      // Envía una solicitud POST al backend para autenticar al usuario
      const url = process.env.REACT_APP_API_BACK + "/login/";

      const response = await axios.post(url, {
        Email,
        Password,
      });

      // Verifica la respuesta del backend
      if (response.status === 200) {
        const { IdUsuario, Email, Nombres, Rol } = response.data.data;

        // Almacenar los datos en sessionStorage
        sessionStorage.setItem("IdUsuario", IdUsuario);
        sessionStorage.setItem("Email", Email);
        sessionStorage.setItem("Nombres", Nombres);
        sessionStorage.setItem("Rol", Rol);

        // Si el inicio de sesión es exitoso, actualiza el estado para ocultar el componente Login
        setIsLoggedIn(true);
        // Redirige al usuario
        navigate("/talentomejorada");
      } else {
        // Si el backend devuelve un estado diferente, muestra un mensaje de error
        alert("El usuario o la contraseña son incorrectos");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      // alert("Error al iniciar sesión. Por favor, intenta nuevamente.");
      alert("El usuario o la contraseña son incorrectos");
    }
  };

  if (isLoggedIn) {
    return null; // No renderiza nada si el usuario está logueado
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Establece la imagen de fondo
        backgroundSize: "cover", // Ajusta el tamaño para cubrir el contenedor
        backgroundRepeat: "no-repeat", // Evita que se repita la imagen
        backgroundPosition: "center", // Centra la imagen
        minHeight: "100vh", // Asegura que ocupe toda la altura de la pantalla
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        className="form bg-white p-8 rounded-lg"
        onSubmit={handleSubmit}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }} // Fondo con transparencia
      >
        <h2 className="text-center mb-4">Inicio de Sesion</h2>
        <input
          type="text"
          name="Email"
          placeholder="Ingrese Email"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
          required
          autoFocus
          className="block w-full h-12 px-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={Password}
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
          Recordarme
        </label>
        <button
          className="button bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
}
