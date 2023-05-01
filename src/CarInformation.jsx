import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarInformation({ kenteken }) {
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        const formattedKenteken = kenteken.toUpperCase();

        const fetchData = async () => {
            const result = await axios(
                `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${formattedKenteken}`
            );
            setCarData(result.data);
        };
        fetchData();
    }, [kenteken]);

return (
    <section>
         {carData.map((car) => {
            return <div className='pt-9 flex flex-row gap-1 justify-center text-xl' key={car.kenteken}>
                <div>{car.merk}</div>
                <div>{car.handelsbenaming}</div>
            </div>
        })}
        {carData.map((car) => {
            const vervaldatumApk = car.vervaldatum_apk;
            const dag = vervaldatumApk.slice(6, 8);
            const maand = vervaldatumApk.slice(4, 6);
            const jaar = vervaldatumApk.slice(0, 4);
            const datum = `${dag}-${maand}-${jaar}`;
            return <div className='pt-9 text-center text-base' key={car.kenteken}>Your APK expires on: <strong className='underline'>{datum}</strong></div>;
        })}
    </section>
)};

export default CarInformation;
