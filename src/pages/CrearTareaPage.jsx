import React from 'react';
import { useForm } from 'react-hook-form';

export default function CrearTareaPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Datos del formulario:', data);
    alert(`Tarea creada: ${data.titulo}`);
    reset();
  };

  return (
    <section cassName= "container">
      <h1>Crear una nueva tarea</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="titulo">Título</label><br />
          <input
            id="titulo"
            type="text"
            {...register('titulo', { required: true })}
          />
          {errors.titulo && (
            <div role="alert" style={{ color: 'red' }}>
              Este campo es obligatorio.
            </div>
          )}
        </div>
        <div style={{ marginTop: '12px' }}>
          <button type="submit">Crear tarea</button>
        </div>
      </form>
    </section>
  );
}
