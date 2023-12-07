// driverReducer.js

const initialState = {
  drivers: [], // Asegúrate de que esto esté presente
  // Otros estados según sea necesario
};

const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DRIVERS':
      return {
        ...state,
        drivers: action.payload,
      };
    // Otros casos según sea necesario
    default:
      return state;
  }
};

export default driverReducer;
