// Implement service for making API requests related to drivers
import axios from 'axios';

const baseURL = 'http://localhost:3001'; // Ajusta la URL de acuerdo a tu configuración del backend

const api = axios.create({
  baseURL,
});

export const getAllDrivers = async () => {
  try {
    const response = await api.get('/drivers');
    return response.data;
  } catch (error) {
    console.error('Error fetching drivers:', error);
    throw error;
  }
};

export const createDriver = async (driverData) => {
  try {
    const response = await api.post('/drivers', driverData);
    return response.data;
  } catch (error) {
    console.error('Error creating driver:', error);
    throw error;
  }
};

// Otros métodos para actualizar y eliminar conductores si es necesario
