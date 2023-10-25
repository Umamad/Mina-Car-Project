import React from 'react';
import styles from '../modules/card.module.css';
import Location from '../icons/Location';
import Link from 'next/link';


const Card = (props) => {
    const {id, name, model , year , distance , location, image , price} = props
    return (
        <Link href={`/cars/${id}`} >
        <div className={styles.container}>
         <img src={image} className={styles.images}></img>
         <h4 className={styles.title}>{`${name} ${model}`}</h4>
         <p className={styles.detail}>{`${year} ${distance}`}</p>
         <span className={styles.price}>{price} $</span> 

         <div className={styles.footer}>
         <Location />
         <p className={styles.location}> {location}    </p>
           
     
           </div>
      
        </div>
        </Link>
    );
};

export default Card;