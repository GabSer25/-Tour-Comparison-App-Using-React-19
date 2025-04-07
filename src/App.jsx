// src/App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './styles/styles.css'; // Custom styles
import Gallery from './components/Gallery'; // Tour component

function App() {
  // Keep Vite demo count logic
  const [count, setCount] = useState(0);
  // State for tour data
  const [tours, setTours] = useState([]);

  // Function to remove a tour by id
  const removeTour = (id) => {
    const updatedTours = tours.filter(tour => tour.id !== id);
    setTours(updatedTours);
  };

  return (
    <>
      <div className="header">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Tour Comparison App</h1>

      {/* Optional Vite demo button */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>

      {/* Our main feature: Tour Gallery */}
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
