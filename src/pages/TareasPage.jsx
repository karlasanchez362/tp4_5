import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TareasPage() {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timerId = setTimeout(() => {
      const datos = [
        { id: 1, titulo: 'Aprender React' },
        { id: 2, titulo: 'Rendir el examen de Desarrollo Web' },
        { id: 3, titulo: 'Hacer el proyecto final para Desarrollo Web' },
      ];
      setTareas(datos);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timerId);
  }, []); 

  if (loading) return <p>Cargando tareas...</p>;

  if (!tareas || tareas.length === 0) return <p>No hay tareas por el momento.</p>;

  return (
    <section className= "task-list">
      <h1>Lista de Tareas</h1>
      <ul>
        {tareas.map((t) => (
          <li key={t.id}>
            <Link to={`/tarea/${t.id}`}>{t.titulo}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
