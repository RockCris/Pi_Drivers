import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDriver } from '../services/driverService';
import { setDrivers } from '../redux/actions/driverActions';

const FormPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    // Otros campos del formulario
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Crear un nuevo conductor
      const newDriver = await createDriver(formData);

      // Actualizar la lista de conductores en el estado de Redux
      dispatch(setDrivers((prevDrivers) => [...prevDrivers, newDriver]));

      // Limpiar el formulario
      setFormData({
        nombre: '',
        apellido: '',
        // Otros campos del formulario
      });
    } catch (error) {
      console.error('Error creating driver:', error);
    }
  };

  return (
    <div>
      <h1>Form Page</h1>
      {/* Renderizar el formulario aquí */}
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        {/* Otros campos del formulario */}
        <button type="submit">Create Driver</button>
      </form>
    </div>
  );
};

export default FormPage;
