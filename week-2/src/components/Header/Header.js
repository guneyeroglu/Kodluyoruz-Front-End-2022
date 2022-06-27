import React, { useState } from "react";
import styles from "./header.module.scss";

const Header = () => {
  /**
   * Tıklanan nav üyesi için bir değişken oluşturuyorum. Active olan header takibi için önemli.
   * className için de bir condition koyuyorum ve active olan değişkene eşit ise seçili olmasını sağlayan class'ı ekliyorum.
   */
  const [selectedHeader, setSelectedHeader] = useState(0);

  return (
    <header className={styles.header} id="header">
      <ul className={styles.header__ul}>
        <li
          className={selectedHeader === 0 ? styles.active : ""}
          onClick={() => setSelectedHeader(0)}
        >
          <a href="#header">Home</a>
        </li>
        <li
          className={selectedHeader === 1 ? styles.active : ""}
          onClick={() => setSelectedHeader(1)}
        >
          <a href="#header">Students</a>
        </li>
        <li
          className={selectedHeader === 2 ? styles.active : ""}
          onClick={() => setSelectedHeader(2)}
        >
          <a href="#header">Assistants</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
