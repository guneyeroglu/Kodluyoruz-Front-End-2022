import React from "react";

import HeaderItemBottom from "./HeaderItemBottom";
import HeaderItemTop from "./HeaderItemTop";

import styles from "./header.module.scss";

const Header = ({ value }) => {
  return (
    <div className={styles.header}>
      <HeaderItemTop styles={styles} value={value} />
      <HeaderItemBottom styles={styles} value={value} />
    </div>
  );
};

export default Header;
