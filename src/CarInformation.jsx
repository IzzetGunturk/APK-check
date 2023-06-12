import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarInformation({ licensePlate, setError }) {
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        const formattedLicensePlate = licensePlate.toUpperCase();

        const fetchData = async () => {
            try {
                const result = await axios(
                    `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${formattedLicensePlate}`
                );
                if (result.data.length > 0) {
                    setCarData(result.data);
                    setError('');
                }
                else {
                    setError("License plate not found.");
                    setCarData([]);
                    console.log("License plate not found.");
                }
            }
            catch (error) {
                console.log("Data can not be entered.");
            }
        };
        fetchData();
    }, [licensePlate, setError]);

return (
    <section>
         {carData.map((car) => {
            return <div className='pt-9 flex flex-row gap-1 justify-center text-xl' key={car.kenteken}>
                <div>{car.merk}</div>
                <div>{car.handelsbenaming}</div>
            </div>
        })}
        {carData.map((car) => {
            const expireDateApk = car.vervaldatum_apk;
            const day = expireDateApk.slice(6, 8);
            const month = expireDateApk.slice(4, 6);
            const year = expireDateApk.slice(0, 4);
            const date = `${day}-${month}-${year}`;
            return <div className='pt-9 text-center text-base' key={car.kenteken}>Your APK expires on: <strong className='underline'>{date}</strong></div>;
        })}
    </section>
)};

export default CarInformation;
