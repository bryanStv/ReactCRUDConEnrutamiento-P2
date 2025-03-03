import "./Header.css"

import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <header>
        <h1>Gestión de alumnos</h1>
        <nav className="header-barra-nav">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/alumnos/listar-alumnos">Listar Alumnos</Link>
            </li>
            <li>
              <Link to="/alumnos/crear">Crear Alumno</Link>
            </li>
            <li>
              <Link to="/alumnos/actualizar">Actualizar Alumno</Link>
            </li>
            <li>
              <Link to="/alumnos/borrar">Borrar Alumno</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}
