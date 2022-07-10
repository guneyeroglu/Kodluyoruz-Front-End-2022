import React from "react";

import { ReactComponent as Dashboard } from "../../assets/svg/SideBarMenu/dashboard.svg";
import { ReactComponent as Project } from "../../assets/svg/SideBarMenu/projects.svg";
import { ReactComponent as Modules } from "../../assets/svg/SideBarMenu/modules.svg";
import { ReactComponent as Sprint } from "../../assets/svg/SideBarMenu/sprint.svg";
import { ReactComponent as Members } from "../../assets/svg/SideBarMenu/members.svg";
import { ReactComponent as Reports } from "../../assets/svg/SideBarMenu/reports.svg";
import { ReactComponent as LogOut } from "../../assets/svg/SideBarMenu/logout.svg";

const SideBarMenuItemBottom = (props) => {
  const { styles } = props;

  return (
    <div className={styles.main__bottom}>
      <div className={styles.menu__bar}>
        <ul>
          <li>
            <Dashboard />
            <span>Dashboard</span>
          </li>
          <li className={styles.selected}>
            <Project />
            <span>Projects</span>
          </li>
          <li>
            <Modules />
            <span>Modules</span>
          </li>
          <li>
            <Sprint />
            <span>Sprint</span>
          </li>
          <li>
            <Members />
            <span>Members</span>
          </li>
          <li>
            <Reports />
            <span>Reports</span>
          </li>
        </ul>
      </div>
      <div className={styles.menu__out}>
        <LogOut />
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default SideBarMenuItemBottom;
