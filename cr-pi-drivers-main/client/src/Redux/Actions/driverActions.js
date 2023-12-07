import axios from 'axios';

export const setDrivers = (drivers) => {
  return {
    type: 'SET_DRIVERS',
    payload: drivers,
  };
};

export const fetchDrivers = () => {
    return async (dispatch) => {
      try {
          const response = await axios.get('http://localhost:3001/character'); // Cambia la URL aquí
          dispatch(setDrivers(response.data));
      } catch (error) {
        dispatch({ type: 'FETCH_DRIVERS_FAILURE', payload: error.message });
      }
    };
  };
  
