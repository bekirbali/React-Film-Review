import { useState } from "react";
import { Reviews } from "../components/Reviews";
import { Tabs } from "../components/Tabs";
import { data } from "../utils/data";
import styles from "./Home.module.scss";

const Home = () => {
  const [film, setFilm] = useState(0);
  return (
    <div className={styles.main}>
      <div className={styles.tab}>
        <Tabs data={data} film={film} setFilm={setFilm} />
      </div>
      <div className={styles.review}>
        <Reviews data={data[film]} />
      </div>
    </div>
  );
};

export default Home;
