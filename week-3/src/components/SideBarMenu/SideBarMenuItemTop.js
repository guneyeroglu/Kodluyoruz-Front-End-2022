import React from "react";

import { ReactComponent as Menu } from "../../assets/svg/SideBarMenu/menu.svg";

const SideBarMenuItemTop = (props) => {
  const { styles } = props;
  return (
    <div className={styles.main__top}>
      <div className={styles.logo}>
        <span>ChirKuut</span>
      </div>
      <div className={styles.button}>
        <Menu />
      </div>
    </div>
  );
};

export default SideBarMenuItemTop;
