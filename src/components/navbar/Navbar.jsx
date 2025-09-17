import React from 'react';
import { Link } from 'react-router-dom';
import 'components/Navbar/Navbar.css';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner container">
        <Link to="/" className="logo">Mis Tareas</Link>
        <div className="links">
          <Link to="/">Inicio</Link>
          <Link to="/tareas">Ver Tareas</Link>
          <Link to="/crear-tarea">Crear Tarea</Link>
          <Link to="/tarea/:id">Detalle de Tarea</Link>
        </div>
      </div>
    </nav>
  );
}