// ExampleComponent.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ExampleComponent() {
  const [data, setData] = useState(null);
  const { param1, param2 } = useParams();

  useEffect(() => {
    fetch(`/api/example/${param1}/${param2}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Data fetched:', data);
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [param1, param2]);

  return (
    <div className="ExampleComponent">
      <h1>Example Component</h1>
      {data && (
        <div>
          <p>Param 1: {data.param1}</p>
          <p>Param 2: {data.param2}</p>
        </div>
      )}
    </div>
  );
}

export default ExampleComponent;
