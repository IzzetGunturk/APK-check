import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarInformation({ kenteken }) {
    const [carData, setCarData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(
                `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${kenteken}`
            );
            setCarData(result.data);
        };
        fetchData();
    }, [kenteken]);

return (
    <div>
        {carData.map((car) => {
            const vervaldatumApk = car.vervaldatum_apk;
            const dag = vervaldatumApk.slice(6, 8);
            const maand = vervaldatumApk.slice(4, 6);
            const jaar = vervaldatumApk.slice(0, 4);
            const datum = `${dag}-${maand}-${jaar}`;
            return <p key={car.kenteken}>{datum}</p>;
        })}
    </div>
)};

export default CarInformation;
