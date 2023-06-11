import styles from "../styles/Title.module.scss";

interface TitleProps {
  title: string;
  subTitle: string;
  tag: string;
}

const Title = ({ title, subTitle, tag }: TitleProps) => {
  return (
    <div className={styles.titleContainer}>
      <p className={styles.tag}>{tag}</p>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subHeader}>{subTitle}</h2>
    </div>
  );
};

export default Title;
