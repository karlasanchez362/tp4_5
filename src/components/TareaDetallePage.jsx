import React from 'react';
import { useParams } from 'react-router-dom';

export default function TareaDetallePage() {
  const { id } = useParams(); 

  return (
    <section className= "task-detail">
      <h1>Detalle de la tarea</h1>
        <p>Aquí se mostrarán los detalles de la tarea con ID: {id}</p>
    </section>
  );
}
