import Link from 'next/link';
import { client } from '../../lib/client';

import Layout from '../../components/templates/Layout/';
import PostHeader from '../../components/molecules/PostHeader';
import PostConetnt from '../../components/molecules/PostConetnt';

import styles from './style.module.scss';

interface BlogIDProps {
  blog: {
    title: string;
    date: string;
    category: {
      name: string;
      id: string;
    }
    feeling: string;
    contents: any;
    contents_more: any;
  };
  category: [];
}

function BlogID({ blog, category } : BlogIDProps) {

  return (
    <Layout category={category}>
      <main>
        <div className={styles.main}>
          <div className="media-margin">
            <PostHeader
              title={blog.title}
              time={blog.date}
              category={blog.category}
              feeling={blog.feeling}
            />
            <PostConetnt
              contents={blog.contents}
              border="none"
            />
            <PostConetnt
              contents={blog.contents_more}
              border="none"
            />
            <footer className={styles.footer}>
              <div className="parts-btn_01">
                <Link href={{
                  pathname:"/"
                }}>
                  ブログ一覧へ戻る
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default BlogID;


export async function getStaticPaths() {
  const data = await client
    .get({
      endpoint: 'blog',
      queries: {
        limit: 100,
      }
    });
    const paths = data.contents.map( (content : any) => `/blog/${content.id}`);
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
    contentId: id
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
      blog: data,
      category: data_cat.contents,
    }
  }
}
