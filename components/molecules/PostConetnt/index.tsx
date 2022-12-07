import styles from './style.module.scss';
import PostDesc from '../../molecules/PostDesc';

interface PostConetntProps {
  contents: any;
  border?: string;
}

interface PostConetntMapConProps {
  headline: string;
  headline_component: string | [];
  desc: string;
  files: [];
  secret: boolean;
}

function PostConetnt({ contents, border = '' }: PostConetntProps) {
  return (
    <div className={styles.content} data-border={ border === 'none' ? 'none' : 'def'} data-headline-style="blog">
      {contents.map(( con: PostConetntMapConProps, index: number ) =>
        <div
          key={index}
          className={styles.content_inner}
        >
          <PostDesc
            headline={con.headline}
            headline_component={con.headline_component}
            desc={con.desc}
            files={con.files}
            secret={con.secret}
          />
        </div>
      )}
    </div>
  );
}

export default PostConetnt;