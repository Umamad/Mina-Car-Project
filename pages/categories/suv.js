import React from 'react';
import carsData from '@/data/carsData';
import Carslist from '@/components/templates/Carslist';

const Suv  = () => {
    const suvcars = carsData.filter(
        (car) => car.category === "suv");
        console.log(suvcars);
    return (
        <div>
            <Carslist data={suvcars} />
        </div>
    );
};

export default Suv;