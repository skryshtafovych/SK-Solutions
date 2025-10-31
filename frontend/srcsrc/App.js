import React, { useState } from 'react';
import './App.css';

function App() {
  const [npi, setNpi] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setData(null);
    try {
      const response = await fetch(`/npi/${npi}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.toString());
    }
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
        {error && <p className="error">{error}</p>}
        {data && (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </header>
    </div>
  );
}

export default App;
