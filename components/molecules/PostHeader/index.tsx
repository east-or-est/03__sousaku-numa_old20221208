import Link from 'next/link';

import Date from '../../atoms/Date/';
import styles from './style.module.scss';

interface PostHeaderProps {
  title: string;
  time: string;
  category: {
    name: string;
    id: string;
  }
  feeling: string;
}

function PostHeader({ title, time, category, feeling } : PostHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.date}>
        <Date
          time={time}
        />
      </div>
      <div className={styles.title}>
        <h2>
          <span>
            {title}
          </span>
        </h2>
        <div className={styles.feeling}>
        {( () => {
          switch (feeling[0]) {
            case '楽しい':
              return <img src="/asset/img/feeling/tanoshi.png" alt={feeling} />;
            case '安心':
              return <img src="/asset/img/feeling/anshin.png" alt={feeling} />;
            default:
              return <img src="/asset/img/feeling/default.png" alt={feeling} />;
          }
        }) ()}
        </div>
      </div>
      <p className={styles.category}>
        <Link href={{
          pathname: `/blog/category/${category.id}`
        }}>
          {category.name}
        </Link>
      </p>
    </header>
  );
}

export default PostHeader;