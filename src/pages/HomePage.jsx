import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className= "home">
      <h1>Bienvenido/a</h1>
      <p>Esta aplicación practica React Router, formularios y useEffect.</p>
      <p>
        <Link to="/tareas">Ver la lista de tareas</Link>
      </p>
    </section>
  );
}
