// Styles.
import styles from "../styles/List.module.scss";

interface ListProps {
  header: string;
  items: string[];
}

const List = ({ header, items }: ListProps) => {
  return (
    <div className={styles.listContainer}>
      <h3 className={styles.header}>{header}</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
