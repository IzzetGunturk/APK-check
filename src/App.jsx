import React, { useState } from 'react';
import CarInformation from './CarInformation';

function App() {
const [kenteken, setKenteken] = useState('');

const handleInputChange = (event) => {
setKenteken(event.target.value);
}

return (
<section>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto">
      <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
        APK expiration date check
      </h1>

      <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
        Check when your APK of your car expires through the form!
      </p>

      <form class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 mx-auto max-w-xl">
        <div>
          <div class="relative">
            <input type="text" class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter your license plate: H405TG" onChange={handleInputChange} />
            <CarInformation className='pt-9 mx-auto' kenteken={kenteken} />
          </div>
        </div>
      </form>
    </div>
  </div>

</section>

);
}

export default App;