import styles from './style.module.scss';

interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {

  return (
    <div className={styles.title}>
      <h2 className={styles.title_text}>{title}</h2>
    </div>
  );
}

export default PageTitle;