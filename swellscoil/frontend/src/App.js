import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExampleComponent from './ExampleComponent';

function App() {
  return (
    <Routes>
      <Route path="/api/example/:param1/:param2" element={<ExampleComponent />} />
      {/* Other routes */}
    </Routes>
  );
}

export default App;