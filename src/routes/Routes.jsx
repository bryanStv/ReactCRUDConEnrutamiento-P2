import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";

import { Root } from "./Root.jsx";
import { Home } from "../pages/Home/Home.jsx";
import { Alumnos } from "../pages/Alumnos/ListarAlumnos/ListarAlumnos.jsx"
import { ActualizarAlumno } from "../pages/Alumnos/ActualizarAlumno/ActualizarAlumno.jsx";
import { CrearAlumno } from "../pages/Alumnos/CrearAlumno/CrearAlumno.jsx"
import { BorrarAlumno } from "../pages/Alumnos/BorrarAlumno/BorrarAlumno.jsx"

export const Routes = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/alumnos/listar-alumnos/" element={<Alumnos />} />
          <Route path="/alumnos/actualizar" element={<ActualizarAlumno />} />
          <Route path="/alumnos/crear" element={<CrearAlumno />} />
          <Route path="/alumnos/borrar" element={<BorrarAlumno />} />
        </Route>
      )
    );
  
    return <RouterProvider router={router} />;
  };
  