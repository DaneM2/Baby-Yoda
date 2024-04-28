import React, { useState } from 'react';

const CarList = ({ cars, onSelectCar }) => (
  <div>
    <h2>Select a Car</h2>
    {cars.map(car => (
      <button key={car.id} onClick={() => onSelectCar(car)}>
        {car.make} {car.model}
      </button>
    ))}
  </div>
);

const App = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleSelectCar = car => {
    setSelectedCar(car);
  };

  return (
    <div>
      <CarList cars={/* Your list of cars */} onSelectCar={handleSelectCar} />
      {selectedCar && <Car selectedCar={selectedCar} />}
    </div>
  );
};

export default App;