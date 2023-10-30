import { useRouter } from "next/router";

import Back from "../icons/Back";

import styles from "./back.button.module.css";

const BackButton = () => {
  const router = useRouter();

  return (
    <button className={styles.back} onClick={() => router.back()}>
      <Back />
      <p>back</p>
    </button>
  );
};

export default BackButton;
