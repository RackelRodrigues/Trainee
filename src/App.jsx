<<<<<<< HEAD
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

    <h1>hi
    </h1>
      
    </>
  );
}

export default App;
=======
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
>>>>>>> 540d07b5129557805023eeb8217691786bb3d9b1
