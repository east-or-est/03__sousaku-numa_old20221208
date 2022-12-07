import PostHeader from '../../molecules/PostHeader/';
import PostConetnt from '../../molecules/PostConetnt/';
import PostMoreLink from '../../molecules/PostMoreLink/';
import styles from './style.module.scss';

interface PostSectionProps {
  title: string;
  time: string;
  category: {
    name: string;
    id: string;
  }
  feeling: string;
  contents: object;
  moreID: string;
  more: boolean;
}

function PostSection({ title, time, category, feeling, contents, moreID, more = false } : PostSectionProps) {
  return (
    <section className={styles.section}>
      <div className="media-margin">
        <PostHeader
          title={title}
          time={time}
          category={category}
          feeling={feeling}
        />
        <PostConetnt
          contents={contents}
        />
        <PostMoreLink
          moreID={moreID}
          more={more}
        />
      </div>
    </section>
  );
}

export default PostSection;