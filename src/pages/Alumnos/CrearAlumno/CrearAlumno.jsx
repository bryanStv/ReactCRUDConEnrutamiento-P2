import "./CrearAlumno.css"

import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export const CrearAlumno = () => {
  useEffect(() => {
    document.title = "Crear Alumno";
  }, []);

  return (
    <>
        <Link to="/">Volver al Inicio</Link>
        <Crear />
    </>
  )
}

function Crear(){
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")

    const enviarFormulario = (e) => {
        e.preventDefault()

        const datosAlumno = {nombre,apellido,correo,telefono,direccion}

        fetch("http://localhost:8000/alumnos_crear.php", 
            {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(datosAlumno)
            })
            .then((response) => response.json())
            .then((data) => {
              if (data.mensaje) {
                alert(data.mensaje)
              } else {
                alert("Error: " + data.error)
              }
            })
            .catch((error) => {
              console.error("Error:", error);
              alert("Hubo un problema con la solicitud.")
            });
        }

    return (
        <div className="formularioCrearAlumno">
            <form onSubmit={enviarFormulario}>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                <br/>
                <label>Apellido:</label>
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target
                .value)}/>
                <br/>
                <label>Correo:</label>
                <input type="email" value={correo} onChange={(e) => setCorreo(e.target
                .value)}/>
                <br/>
                <label>Telefono:</label>
                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target
                .value)}/>
                <br/>
                <label>Direccion:</label>
                <input type="text" value={direccion} onChange={(e) => setDireccion(e.target
                .value)}/>
                <br/>
                <button type="submit">Añadir Alumno</button>
                <button type="reset">Resetear</button>
            </form>
        </div>
    )

}