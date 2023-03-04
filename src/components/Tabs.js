import styles from "./Tabs.module.scss";

export const Tabs = ({ data, film, setFilm }) => {
  return (
    <div className={styles.tabContainer}>
      {data.map((item, index) => {
        return (
          <div className={styles.tabs} key={index}>
            <button
              id={item.id}
              className={index === film && `${styles.active}`}
              onClick={() => setFilm(index)}
            >
              {item.date}
            </button>
          </div>
        );
      })}
    </div>
  );
};
