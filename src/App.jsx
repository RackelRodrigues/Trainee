import { useState, useEffect } from 'react';

function App() {

  //api ping test -- Start
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/ping');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  //api ping test -- Start


  return (
    <>
      <h1>hi</h1>
      {data && <p>Response from API: {data.message}</p>}
    </>
  );
}

export default App;
