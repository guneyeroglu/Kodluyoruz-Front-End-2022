import React from "react";

import SideBarMenuItemBottom from "./SideBarMenuItemBottom";
import SideBarMenuItemTop from "./SideBarMenuItemTop";

import styles from "./sideBarMenu.module.scss";

const SideBarMenu = () => {
  return (
    <div className={styles.main}>
      <SideBarMenuItemTop styles={styles} />
      <SideBarMenuItemBottom styles={styles} />
    </div>
  );
};

export default SideBarMenu;
