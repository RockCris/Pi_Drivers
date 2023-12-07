import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDrivers } from '../redux/Actions/driverActions';

const HomePage = () => {
  const dispatch = useDispatch();  // Asegúrate de tener esta línea

  const drivers = useSelector((state) => state.drivers);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchDrivers());
      } catch (error) {
        console.error('Error fetching drivers:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      {drivers.length > 0 ? (
        drivers.map((driver) => (
          <div key={driver.id}>
            <p>{driver.name.forename} {driver.name.surname}</p>
          </div>
        ))
      ) : (
        <p>No hay conductores disponibles.</p>
      )}
    </div>
  );
};

export default HomePage;
