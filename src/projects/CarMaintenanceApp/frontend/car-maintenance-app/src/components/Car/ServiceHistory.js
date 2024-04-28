import React, { useState, useEffect } from 'react';

const Car = ({ selectedCar }) => {
  const [serviceRecords, setServiceRecords] = useState([]);

  useEffect(() => {
    // Fetch service records for the selected car when the component mounts or the selected car changes
    fetchServiceRecords(selectedCar).then(records => setServiceRecords(records));
  }, [selectedCar]);

  const addServiceRecord = record => {
    // Add a new service record
    // This should also update the server
    setServiceRecords([...serviceRecords, record]);
  };

  const updateServiceRecord = updatedRecord => {
    // Update a service record
    // This should also update the server
    setServiceRecords(serviceRecords.map(record =>
      record.id === updatedRecord.id ? updatedRecord : record
    ));
  };

  const deleteServiceRecord = recordId => {
    // Delete a service record
    // This should also update the server
    setServiceRecords(serviceRecords.filter(record => record.id !== recordId));
  };

  return (
    <div>
      <h2>{selectedCar.make} {selectedCar.model}</h2>
      <h3>Service Records</h3>
      {serviceRecords.map(record => (
        <div key={record.id}>
          <p>{record.description}</p>
          <button onClick={() => updateServiceRecord(record)}>Update</button>
          <button onClick={() => deleteServiceRecord(record.id)}>Delete</button>
        </div>
      ))}
      <button onClick={addServiceRecord}>Add Service Record</button>
    </div>
  );
};

export default Car;