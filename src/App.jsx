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
      <input type="text" placeholder='vul uw kenteken in!' onChange={handleInputChange} />
      <CarInformation kenteken={kenteken} />
    </div>
  );
}

export default App;
