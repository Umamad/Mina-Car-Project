import Link from "next/link";

import CarCard from "../cards/Car.card";

import styles from "./cars.list.module.css";

const CarsList = ({ cars }) => {
  return (
    <ul className={styles.container} role="list">
      {cars.map((car) => (
        <li key={car.id} role="listitem">
          <Link href={`/cars/${car.id}`}>
            <CarCard car={car} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
