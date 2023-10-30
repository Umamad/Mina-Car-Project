import Link from "next/link";

import Suv from "../icons/Suv";
import Sport from "../icons/Sport";
import Sedan from "../icons/Sedan";
import Hatchback from "../icons/Hatchback";

import styles from "./categories.list.module.css";

const Categories = () => {
  return (
    <nav className={styles.container}>
      <Link href="categories/suv">
        <div>
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
      </Link>
    </nav>
  );
};

export default Categories;
