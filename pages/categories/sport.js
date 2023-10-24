import React from 'react';
import carsData from '@/data/carsData';
import Carslist from '@/components/templates/Carslist';

const Sport  = () => {
    const sportcars = carsData.filter(
        (car) => car.category === "sport");
        console.log(sportcars);
    return (
        <div>
            <Carslist data={sportcars} />
        </div>
    );
};

export default Sport;