import React, { useState } from 'react';
import CarInformation from './CarInformation';

function App() {
  const [kenteken, setKenteken] = useState('');

  const handleInputChange = (event) => {
    setKenteken(event.target.value);
  }

  return (
    <div>
      <h1>Car Information</h1>
      <input type="text" value={kenteken} onChange={handleInputChange} />
      <CarInformation kenteken={kenteken} />
    </div>
  );
}

export default App;
