import Link from "next/link";

import styles from "../layout/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <Link href="/">
          <h1>Mina's Car 😎</h1>
          <hr />
          <p>Choose and Buy Your Car</p>
        </Link>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
        <p>
          Powerd by <a href="#">Mina</a> &copy;
        </p>
      </footer>
    </div>
  );
};

export default Layout;
