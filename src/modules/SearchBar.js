import { useState } from "react";

import { useRouter } from "next/router";

import styles from "../modules/searchbar.module.css";

const SearchBar = () => {
  const router = useRouter();

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("input Min and Max Price");
    }
  };

  return (
    <div className={styles.container}>
      <input
        placeholder="Enter Min Price"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />

      <input
        placeholder="Enter Max Price"
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />

      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default SearchBar;
