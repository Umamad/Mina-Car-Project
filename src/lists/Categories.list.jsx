import { useMemo } from "react";
import Link from "next/link";

import Suv from "../icons/Suv";
import Sport from "../icons/Sport";
import Sedan from "../icons/Sedan";
import Hatchback from "../icons/Hatchback";

import groupBy from "@/utils/groupBy";
import styles from "./categories.list.module.css";

const Categories = ({ cars }) => {
  const categories = useMemo(() => {
    const groupedCars = groupBy(cars, "category");
    const icons = [Sport, Suv, Sedan, Hatchback];
    return Object.keys(groupedCars).map((category, idx) => ({
      title: category,
      IconComponent: icons[idx],
    }));
  }, []);

  return (
    <nav className={styles.container}>
      {categories.map((category) => (
        <Link href={`categories/${category.title}`} key={category.title}>
          <div className={styles.category_card}>
            <p>{category.title}</p>
            <category.IconComponent />
          </div>
        </Link>
      ))}
      {/* <Link href="categories/suv">
        <div className={styles.category_card}>
          <p>SUv</p>
          <Suv />
        </div>
      </Link>

      <Link href="categories/sport">
        <div>
          <p>Sport</p>
          <Sport />
        </div>
      </Link>

      <Link href="categories/hatchback">
        <div>
          <p>Hatchback</p>
          <Hatchback />
        </div>
      </Link>

      <Link href="categories/sedan">
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link> */}
    </nav>
  );
};

export default Categories;
