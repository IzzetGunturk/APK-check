import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShowCarInformation() {
  const [searchLicensePlate, setSearchLicensePlate] = useState(''); // Search license plate
  const [carInformation, setCarInformation] = useState([]); // Get information from API
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = (e) => {
    setSearchLicensePlate(e.target.value); // Dynamic search
  }

  useEffect(() => {
    if (searchLicensePlate) {
      const formattedLicensePlate = searchLicensePlate.toUpperCase();
  
      const fetchData = async () => {
        try {
          const result = await axios(
            `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${formattedLicensePlate}`
          );

          if (result.data.length > 0) {
            setCarInformation(result.data);
            setErrorMessage('');
          } else {
            setCarInformation([]);
            setErrorMessage('License plate not found.');
          }
  
        } catch (error) {
          console.log("Data can not be fetched.");
        }
      };
  
      fetchData();
    }
    else {
      setErrorMessage('');
    }
  }, [searchLicensePlate]);

  return (
    <section>
      <div className="mx-auto max-w-screen-md px-4 py-28 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            <span className='text-secondary'>APK</span> expiration date check
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-center text-gray-500">
            Check when your APK of your car expires through the form!
          </p>

          <div className="mt-6 mb-0 space-y-4 rounded-lg shadow-xl p-4 sm:p-6 lg:p-8 mx-auto max-w-xl">
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg p-4 pr-12 text-sm bg-[#ebebeb]"
                placeholder="Enter your license plate: P814PJ"
                maxLength={6}
                onChange={handleSearch}
              />
              <div className='text-red-500 pt-4'>{errorMessage}</div>
            </div>

            {carInformation.map((car) => (
            <div className='pt-3 flex flex-row gap-1 justify-center text-xl' key={car.kenteken}>
              <div>{car.merk}</div>
              <div>{car.handelsbenaming}</div>
            </div>
            ))}

            {carInformation.map((car) => {

              const expireDateApk = car.vervaldatum_apk;
              const year = expireDateApk.slice(0, 4);
              const month = expireDateApk.slice(4, 6);
              const day = expireDateApk.slice(6, 8);
              const sliceExpireDateApk = `${day}-${month}-${year}`

              return (
              <div className='pt-3 pb-3 text-center text-base'>
                APK expires on: <strong className='underline'>{sliceExpireDateApk}</strong>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowCarInformation;
