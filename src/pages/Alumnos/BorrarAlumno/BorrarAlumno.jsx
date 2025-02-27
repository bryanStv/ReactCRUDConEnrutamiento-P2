import "./BorrarAlumno.css"

import { useState } from "react";
import { Link } from "react-router-dom";

import { BuscarAlumno } from "../../../components/Funcionalidades/BuscarAlumno";

export const BorrarAlumno = () => {
    return (
        <>
            <Link to="/">Volver al inicio</Link>
            <h1>Borrar Alumno</h1>
            <BusquedaYEliminacionAlumno />
        </>
    )
}

function BusquedaYEliminacionAlumno() {
    const [id, setId] = useState('');
    const { alumno, error, fetchAlumno } = BuscarAlumno(id);
    const { borrarAlumno } = Borrar(id);

    const buscarAlumnoPorId = (e) => {
        e.preventDefault();
        fetchAlumno();
    };

    const confirmarBorrado = () => {
        const confirmar = window.confirm("Seguro que quieres borrar al alumno?");

        if(confirmar) {
            borrarAlumno()
            alert("Alumno borrado correctamente")
        }else{
            alert("No se ha borrado el alumno")
        }
    };


    return (
        <div>
            <form onSubmit={buscarAlumnoPorId}>
                <label>ID del Alumno:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <button type="submit">Buscar Alumno</button>
            </form>

            {error && <p>{error}</p>}

            {alumno === false ? (
                <p>No se encontró el alumno.</p>
            ) : (
                alumno && (
                    <div>
                        <p>Alumno Encontrado:</p>
                        <p>ID: {alumno.id}</p>
                        <p>Nombre: {alumno.nombre}</p>
                        <p>Apellido: {alumno.apellido}</p>
                        <p>Correo: {alumno.correo}</p>
                        <p>Teléfono: {alumno.telefono}</p>
                        <p>Dirección: {alumno.direccion}</p>
                        <button onClick={confirmarBorrado}>Confirmar Borrado</button>
                    </div>
                )
            )}
        </div>
    );
}

function Borrar(id) {
    const [error, setError] = useState(null);
    const [mensaje, setMensaje] = useState(null);

    const borrarAlumno = () => {
        fetch(`http://localhost:8000/alumnos_borrar.php?id=${id}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    setMensaje(null);
                } else {
                    setMensaje(data.mensaje);
                    setError(null);
                }
            })
            .catch((err) => {
                console.error('Error:', err);
                setError('Hubo un problema al borrar el alumno');
                setMensaje(null);
            });
    };

    return {
        mensaje,
        error,
        borrarAlumno // llamar a la API para borrar
    };
}