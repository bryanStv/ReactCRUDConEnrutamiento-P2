import './ListarAlumnos.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Alumnos = () => {
    useEffect(() => {
        document.title = "Lista de Alumnos";
      }, []);

    return (
        <>
            <Link to="/">Volver al Inicio</Link>
            <h1>Lista de Alumnos</h1>
            <ListarAlumnos />
        </>
    )
}

function ListarAlumnos(){

    const [alumnos,setAlumnos] = useState([]);

    useEffect (() => {
        fetch('http://localhost:8000/alumnos.php')
            .then(response => response.json())
            .then(data => {
                setAlumnos(data);
            });
        }, []);

        return (
            <div className="alumnos">
                {alumnos.length > 0 ? (
                    alumnos.map((alumno) => (
                        <div key={alumno.id} className="alumno">
                            <h2>{alumno.id}</h2>
                            <p><b>Nombre:</b> {alumno.nombre} {alumno.apellido}</p>
                            <p><b>Correo:</b> {alumno.correo}</p>
                            <p><b>Teléfono:</b> {alumno.telefono}</p>
                            <p><b>Dirección:</b> {alumno.direccion}</p>
                            <br />
                        </div>
                    ))
                ) : (
                    <p>No hay alumnos</p>
                )}
            </div>
        );

}