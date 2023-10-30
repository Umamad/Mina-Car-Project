import Image from "next/image";

import Company from "../icons/Company";
import Model from "../icons/Model";
import Calender from "../icons/Calender";
import Road from "../icons/Road";
import Money from "../icons/Money";
import Location from "../icons/Location";

import customImageLoader from "@/utils/customImageLoader";

import styles from "./cardetail.view.module.css";

const CarDetailView = ({ car }) => {
  const { name, model, year, distance, location, image, price, description } =
    car;

  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image
          src={image}
          loader={customImageLoader}
          alt={`${name} ${model}`}
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <h1 className={styles.header}>
        {name} {model}
      </h1>

      <div className={styles.details}>
        <div>
          <Company />
          <p>Company</p>
          <span>{name}</span>
        </div>
        <div>
          <Model />
          <p>Model</p>
          <span>{model}</span>
        </div>
        <div>
          <Calender />
          <p>First registration</p>
          <span>{year}</span>
        </div>
        <div>
          <Road />
          <p>kms driven</p>
          <span>
            {new Intl.NumberFormat("en-US", {
              style: "unit",
              unit: "kilometer-per-hour",
            }).format(distance)}
          </span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <Location />
          <p>Location</p>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles.details}>
        <p className={styles.descriptionTitle}>Extra Information</p>
        <p className={styles.descriptionText}>{description}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <Money />
          <p>Price:</p>
          <span>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </span>
        </div>
      </div>
      <button className={styles.button}>Buy</button>
    </div>
  );
};

export default CarDetailView;
