import { client } from '../../../lib/client';

import Layout from '../../../components/templates/Layout/';
import PostSection from '../../../components/organisms/PostSection/';

import Pagination from '../../../components/templates/Pagination';

import { PER_PAGE } from '../../../const/Meta/';

import styles from '../../style.module.scss';

interface PageBlogIdProps {
  blog: any;
  category: [];
  totalCount: number;
  selCount: number;
}

interface PageBlogIdMapJsonProps {
  id: string;
  title: string;
  date: string;
  category: {
    name: string;
    id: string;
  }
  feeling: string;
  contents: object;
  read_more: boolean;
}


function PageBlogId({ blog, totalCount, category, selCount } : PageBlogIdProps) {

  return (
    <Layout category={category}>
      <main>
        <div className={styles.main}>
          {blog.map((json: PageBlogIdMapJsonProps) =>
            <PostSection
              key={json.id}
              title={json.title}
              time={json.date}
              category={json.category}
              feeling={json.feeling}
              moreID={json.id}
              more={json.read_more}
              contents={json.contents}
            />
          )}
        </div>
        <Pagination
          totalCount={totalCount}
          selCount={selCount}
        />
      </main>
    </Layout>
  )
}

export default PageBlogId;



export async function getStaticPaths() {
  const data = await client
    .get({
      endpoint: 'blog',
      queries: {
        limit: 100,
        filters: 'category[not_equals]study[and]category[not_equals]rkgk[and]category[not_equals]memo-ifclo[and]category[not_equals]memo-fantasia[and]category[not_equals]memo-malta[and]category[not_equals]memo-outtake[and]category[not_equals]memo-enven'
      }
    });

    const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

    const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`);
    return {
      paths,
      fallback: false
    }
}




export async function getStaticProps(context : any) {
  const id = context.params.id;
  const data = await client
  .get({
    endpoint: 'blog',
    queries: {
      offset: (id - 1) * PER_PAGE,
      limit: PER_PAGE,
      orders: '-date',
      filters: 'category[not_equals]study[and]category[not_equals]rkgk[and]category[not_equals]memo-ifclo[and]category[not_equals]memo-fantasia[and]category[not_equals]memo-malta[and]category[not_equals]memo-outtake[and]category[not_equals]memo-enven'
    }
  });
  const data_cat = await client
    .get({
      endpoint: 'category',
      queries: {
        offset: 0,
        limit: 40,
      }
    });
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      selCount: id,
      category: data_cat.contents,
    },
  }
}
