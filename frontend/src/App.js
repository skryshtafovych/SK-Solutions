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
    console.log(`Fetching data for NPI: ${npi}`);
    try {
      const response = await fetch(`/npi/${npi}`);
      console.log('Fetch response:', response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Fetch result:', result);
      setData(result);
    } catch (error) {
      console.error('Fetch error:', error);
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
