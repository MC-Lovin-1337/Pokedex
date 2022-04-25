import hexToRgba from "hex-to-rgba";
import Image from "next/image";
import pokeColors from "@lib/pokeColors";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (


  <div className={styles.wrapper}>

  <header className={styles.header}>
  <h1 className={styles.header}>Header</h1>
  </header>

  <aside className={`${styles.aside} ${styles.links}`}> 
  <h1>Pokemon</h1>
  </aside>

  <aside className={`${styles.aside} ${styles.rechts}`}> 
  <h1>Name und Beschreibung</h1>
  </aside>

  <footer className={styles.namejapan}>
  <h1>Name in Jap</h1>
  </footer>

  <footer className={styles.footer}>
  <h1>Footer</h1>
  </footer>

  </div>





    );
  }



