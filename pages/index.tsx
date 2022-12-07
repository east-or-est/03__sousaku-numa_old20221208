import { client } from '../lib/client';

import Layout from '../components/templates/Layout/';
import PostSection from '../components/organisms/PostSection/';

import Pagination from '../components/templates/Pagination';

import { PER_PAGE } from '../const/Meta/';

import styles from './style.module.scss';

interface HomeProps {
  blog: any;
  category: [];
  totalCount: number;
}

interface HomeMapJsonProps {
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


function Home({ blog, totalCount, category } : HomeProps) {

  return (
    <Layout category={category}>
      <main>
        <div className={styles.main}>
          {blog.map((json: HomeMapJsonProps, index: number) =>
            <PostSection
              key={index}
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
        <Pagination totalCount={totalCount} />
      </main>
    </Layout>
  )
}

export default Home;


export async function getStaticProps() {
  const data = await client
  .get({
    endpoint: 'blog',
    queries: {
      offset: 0,
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
      category: data_cat.contents,
    },
  }
}
