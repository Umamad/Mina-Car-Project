import React from "react";
import styles from "./carspage.module.css";
import Card from "../modules/Card";

const CarsPage = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
};

export default CarsPage;
