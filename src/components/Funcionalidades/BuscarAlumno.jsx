import { useState } from "react";

export function BuscarAlumno(id) {
    const [alumno, setAlumno] = useState(null);
    const [error, setError] = useState(null);

    const fetchAlumno = () => {
        fetch(`http://localhost:8000/alumnos_buscar.php?id=${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    setAlumno(false);
                } else {
                    setAlumno(data);
                }
            })
            .catch((err) => {
                console.error('Error:', err);
                setError('Hubo un problema al buscar el alumno');
                setAlumno(false);
            });
    };

    return {
        alumno,
        error,
        fetchAlumno //Así puedo llamar a la api
    };
}