import React from 'react';
import carsData from '@/data/carsData';
import CarsPage from '@/components/templates/CarsPage';
import Categories from '@/components/modules/Categories';
import SearchBar from '@/components/modules/SearchBar';

const cars = () => {
    return (
        <>
        <SearchBar />
        <Categories />
          <CarsPage data={carsData} />
        </>
    );
};

export default cars;