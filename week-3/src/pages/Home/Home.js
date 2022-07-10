import SideBardMenu from "../..//components/SideBarMenu/SideBarMenu";
import HomeItemWrapper from "./HomeItemWrapper";

import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <SideBardMenu />
      <HomeItemWrapper styles={styles} />
    </div>
  );
};

export default Home;
