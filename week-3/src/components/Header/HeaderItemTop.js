import React from "react";

import { ReactComponent as Mail } from "../../assets/svg/Header/mail.svg";
import { ReactComponent as Notification } from "../../assets/svg/Header/notification.svg";
import { ReactComponent as Settings } from "../../assets/svg/Header/settings.svg";
import { ReactComponent as Search } from "../../assets/svg/Header/search.svg";
import profiles from "../../assets/image/profile.png";

const HeaderItemTop = (props) => {
  const { styles } = props;
  const { search, setSearch } = props.value;
  return (
    <div className={styles.header__top}>
      <div className={styles.top__left}>
        <span>Projects</span>
      </div>
      <div className={styles.top__mid}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search />
      </div>
      <div className={styles.top__right}>
        <div className={styles.notification}>
          <Mail />
          <Notification />
          <Settings />
        </div>
        <div className={styles.profile}>
          <img src={profiles} alt="profile" />
          <div className={styles.profile__info}>
            <span>Asfak Mahmud</span>
            <span>asfakmahmudbd@gmaill.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderItemTop;
