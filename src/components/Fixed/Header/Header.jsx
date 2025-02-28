import "./Header.css"

import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <header className="">
        <h1>Header</h1>

        <div className="home">
          <h1>Navegación por links</h1>
          <Link to="/">Inicio</Link>
          <br />
          <Link to="/alumnos/listar-alumnos">Listar Alumnos</Link>
          <br />
          <Link to="/alumnos/crear">Crear Alumno</Link>
          <br />
          <Link to="/alumnos/actualizar">Actualizar Alumno</Link>
          <br />
          <Link to="/alumnos/borrar">Borrar Alumno</Link>
        </div>
      </header>
    );
}