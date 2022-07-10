import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import HomeItemCard from "./HomeItemCard";

const HomeItemWrapper = (props) => {
  const { styles } = props;

  const [projectData, setProjectData] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const value = { search, selected, setSearch, setSelected };

  const fetchData = async () => {
    const result = await axios(
      "https://private-e6514c-projectsinfo.apiary-mock.com/getProjects"
    );
    setProjectData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      <Header value={value} />
      <HomeItemCard styles={styles} data={projectData} value={value} />
    </div>
  );
};

export default HomeItemWrapper;
