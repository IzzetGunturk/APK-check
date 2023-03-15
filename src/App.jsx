import React, { useState } from 'react';
import CarInformation from './CarInformation';

function App() {
const [kenteken, setKenteken] = useState('');

const handleInputChange = (event) => {
setKenteken(event.target.value);
}

return (
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:px-8">
    <div className="mx-auto">
      <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
        <span className='text-secondary'>APK</span> expiration date check
      </h1>

      <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
        Check when your APK of your car expires through the form!
      </p>

      <form className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-xl sm:p-6 lg:p-8 mx-auto max-w-xl">
        <div>
          <div className="relative">
            <input type="text" className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm"
              placeholder="Enter your license plate: H405TG" onChange={handleInputChange} />
            <CarInformation kenteken={kenteken} />
          </div>
        </div>
      </form>
    </div>
  </div>

</section>

);
}

export default App;