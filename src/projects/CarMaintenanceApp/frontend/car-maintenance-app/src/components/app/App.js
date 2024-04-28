import React from 'react';
import './App.css';
import Button from '../FrontButton/Button';
import bmwM2 from '../../assets/images/bmwM2.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Car Maintenance App</h1>
      </header>
      <main>
        <section>
          <h2>My Cars</h2>
          <Button>Add New Car</Button>
          <Button>My Cars</Button>
        </section>
        <section>
          <h2>Upcoming Services</h2>
          <p>No upcoming services</p>
        </section>
        <section>
          <h2>Service History</h2>
          <button>View All</button>
        </section>
      </main>
      <footer>
        <p>&copy; Dane's Car Maintenance App</p>
        <img src={bmwM2} alt="BMW M2" /> {/* adding image*/}
      </footer>
    </div>
  );
}

export default App;
