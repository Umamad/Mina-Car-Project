import { useMemo } from "react";

import CarsPicksList from "../lists/CarsPicks.list";

import groupBy from "@/utils/groupBy";
import styles from "./homepage.view.module.css";

const HomePageView = ({ cars }) => {
  const topsList = useMemo(() => {
    const groupedCars = groupBy(cars, "category");
    return Object.keys(groupedCars).map((category) => ({
      title: category,
      cars: groupedCars[category].slice(0, 3),
    }));
  }, []);

  return (
    <div className={styles.container}>
      {topsList.map((top) => (
        <CarsPicksList title={top.title} cars={top.cars} key={top.title} />
      ))}
    </div>
  );
};

export default HomePageView;
