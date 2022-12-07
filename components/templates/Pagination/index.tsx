import Link from 'next/link';

import styles from './style.module.scss';

import { PER_PAGE } from '../../../const/Meta/';

interface PaginationProps {
  totalCount: number;
  selCount?: number;
  type?: string;
  selCategory?: string | undefined;
}

function Layout({ totalCount, selCount = 1, type = 'archive', selCategory }: PaginationProps) {

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <div className={styles.pager}>
      <div className="media-margin">
        <ul>
          {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
            <li key={index}>
              { number === Number(selCount) ?
              <span>
                {number}
              </span>
              :
                <>
                  { (type === 'category') ?
                    <Link href={ `/blog/category/${selCategory}/${number}`}>
                      {number}
                    </Link>
                  :
                    <Link href={ `/blog/page/${number}`}>
                      {number}
                    </Link>
                  }
                </>
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Layout;