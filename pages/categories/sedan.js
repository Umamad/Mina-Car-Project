import React from 'react';
import carsData from '@/data/carsData';
import Carslist from '@/components/templates/Carslist';

const Sedan = () => {
    const sedancars = carsData.filter(
        (car) => car.category === "sedan");
        console.log(sedancars);
    return (
        <div>
            <Carslist data={sedancars} />
        </div>
    );
};

export default Sedan;