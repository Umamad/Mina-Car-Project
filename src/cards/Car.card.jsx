import Image from "next/image";

import Location from "../icons/Location";

import customImageLoader from "@/utils/customImageLoader";
import styles from "./car.card.module.css";

const CarCard = ({ car }) => {
  const { name, model, year, distance, location, image, price } = car;

  return (
    <div className={styles.container}>
      <div className={styles.card_media}>
        <Image
          src={image}
          loader={customImageLoader}
          width={0}
          height={0}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: 8,
          }}
        />
      </div>
      <div className={styles.card_content}>
        <h6 className={styles.title}>
          {name} {model}
        </h6>
        <div className={styles.detail}>
          <span>Year: {year}</span>
          <span>Distance: {new Intl.NumberFormat().format(distance)}</span>
          <div>
            <Location />
            <span>{location}</span>
          </div>
        </div>
        <span className={styles.price}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </span>
      </div>
    </div>
  );
};

export default CarCard;
