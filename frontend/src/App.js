import React, { useState } from 'react';
import './App.css';

function App() {
  const [npi, setNpi] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Fetch data from the backend
    console.log('Fetching data for NPI:', npi);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>NPI Data Lookup</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={npi}
            onChange={(e) => setNpi(e.target.value)}
            placeholder="Enter NPI"
          />
          <button type="submit">Search</button>
        </form>
        {data && (
          <div>
            {/* TODO: Display the fetched data */}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
