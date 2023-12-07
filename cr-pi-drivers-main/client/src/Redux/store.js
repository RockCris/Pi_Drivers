import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Puedes utilizar Redux Thunk para manejar acciones asíncronas
import rootReducer from './Reducer/driverReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
