import Link from "next/link";

import CarsList from "./Cars.list";

import styles from "./carspicks.list.module.css";

const CarsPicksList = ({ title, cars }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <Link href="/cars">See more</Link>
      </div>
      <CarsList cars={cars} />
    </div>
  );
};

export default CarsPicksList;
