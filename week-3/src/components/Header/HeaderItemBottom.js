import React from "react";

import { ReactComponent as Sort } from "../../assets/svg/Header/sort.svg";

const HeaderItemBottom = (props) => {
  const { styles } = props;
  const { selected, setSelected } = props.value;

  return (
    <div className={styles.header__bottom}>
      <div className={styles.bottom__left}>
        <button type="submit">+ New</button>
      </div>
      <div className={styles.bottom__right}>
        <div className={styles.filter}>
          <ul>
            <li
              onClick={() => setSelected("")}
              className={selected === "" ? styles.active : ""}
            >
              <span>All</span>
            </li>
            <li
              onClick={() => setSelected(false)}
              className={selected === false ? styles.active : ""}
            >
              <span>Inactive</span>
            </li>
            <li
              onClick={() => setSelected(true)}
              className={selected === true ? styles.active : ""}
            >
              <span>Active</span>
            </li>
            <li
              onClick={() => setSelected("On Hold")}
              className={selected === "On Hold" ? styles.active : ""}
            >
              <span>On Hold</span>
            </li>
            <li
              onClick={() => setSelected("Completed")}
              className={selected === "Completed" ? styles.active : ""}
            >
              <span>Completed</span>
            </li>
          </ul>
        </div>
        <div className={styles.sort}>
          <span>Default</span>
          <Sort />
        </div>
      </div>
    </div>
  );
};

export default HeaderItemBottom;
