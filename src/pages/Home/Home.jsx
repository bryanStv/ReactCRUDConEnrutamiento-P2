import './Home.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const Home = () => {
    useEffect(() => {
        document.title = "Enrutamiento en React";
    }, []);

    return (
        <div className="home">
            <h1>Navegación por links</h1>
            <Link to="/alumnos/listar-alumnos">Listar Alumnos</Link><br />
            <Link to="/alumnos/crear">Crear Alumno</Link><br />
            <Link to="/alumnos/actualizar">Actualizar Alumno</Link><br />
            <Link to="/alumnos/borrar">Borrar Alumno</Link>
        </div>
    )
}