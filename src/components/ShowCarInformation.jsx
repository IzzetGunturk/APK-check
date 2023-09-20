import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShowCarInformation() {
  const [licensePlateSearch, setLicensePlateSearch] = useState('');
  const [error, setError] = useState('');
  const [carData, setCarData] = useState([]);

  const handleInputChange = (event) => {
    setLicensePlateSearch(event.target.value);
    setError('');
  };

  useEffect(() => {
    if (licensePlateSearch) {
      const formattedLicensePlate = licensePlateSearch.toUpperCase();

      const fetchData = async () => {
        try {
          const result = await axios(
            `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${formattedLicensePlate}`
          );
          if (result.data.length > 0) {
            setCarData(result.data);
            setError('');
          } else {
            setError("License plate not found.");
            setCarData([]);
            console.log("License plate not found.");
          }
        } catch (error) {
          console.log("Data can not be fetched.");
        }
      };
      fetchData();
    }
  }, [licensePlateSearch]);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            <span className='text-secondary'>APK</span> expiration date check
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-center text-gray-500">
            Check when your APK of your car expires through the form!
          </p>

          <form className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-xl sm:p-6 lg:p-8 mx-auto max-w-xl">
            <div>
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg p-4 pr-12 text-sm bg-[#ebebeb]"
                  placeholder="Enter your license plate: P814PJ"
                  maxLength={6}
                  onChange={handleInputChange}
                />
                <div className='text-red-500 pt-4'>{error}</div>
              </div>
            </div>

            {carData.map((car) => (
              <div className='pt-3 flex flex-row gap-1 justify-center text-xl' key={car.kenteken}>
                <div>{car.merk}</div>
                <div>{car.handelsbenaming}</div>
              </div>
            ))}
            {carData.map((car) => {
              const expireDateApk = car.vervaldatum_apk;
              const day = expireDateApk.slice(6, 8);
              const month = expireDateApk.slice(4, 6);
              const year = expireDateApk.slice(0, 4);
              const date = `${day}-${month}-${year}`;
              return (
                <div className='pt-3 pb-3 text-center text-base' key={car.kenteken}>
                  Your APK expires on: <strong className='underline'>{date}</strong>
                </div>
              );
            })}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ShowCarInformation;
