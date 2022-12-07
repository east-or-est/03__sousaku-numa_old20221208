import reactStringReplace from 'react-string-replace';

import styles from './style.module.scss';

import PostHeadline from '../../atoms/PostHeadline';
import PostFiles from '../../molecules/PostFiles';

interface PostDescProps {
  headline: string;
  headline_component: string | [];
  desc: string;
  files: [];
  secret: boolean;
}

function PostDesc({ headline = '', headline_component = [], desc = '', files = [], secret = false }: PostDescProps) {

  return (
    <div className={styles.content}>
      { headline !== '' ?
        <>
          <PostHeadline
            headline={headline}
            headline_component={headline_component}
          />
        </>
        : false
      }
      { files.length ?
        <div className={styles.files}>
          <PostFiles
            files={files}
          />
        </div>
        : false
      }
      { desc !== '' ?
        <>
          { secret !== true ?
            <div className={styles.desc}>
              <p>
              {
              reactStringReplace(desc, /(https?\:\/\/\S+)/gi, (val, i) => (
                val.match(/^https?:\/\/blog\.est-s\.net/gi) !== null ?
                <a key={i} href={val}>{val}</a>
                : <a key={i} target="_blank" rel="noopener noreferrer" href={val}>{val}</a>
              ))
              }
              </p>
            </div>
            :
            <div className={styles.desc}>
              <details>
                <summary>展開する</summary>
                <div>
                  <p>
                  {
                  reactStringReplace(desc, /(https?\:\/\/\S+)/gi, (val, i) => (
                    val.match(/^https?:\/\/blog\.est-s\.net/gi) !== null ?
                    <a key={i} href={val}>{val}</a>
                    : <a key={i} target="_blank" rel="noopener noreferrer" href={val}>{val}</a>
                  ))
                  }
                  </p>
                </div>
              </details>
            </div>
          }
        </>
        : false
      }
    </div>
  );
}

export default PostDesc;