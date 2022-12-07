import { client } from '../../../lib/client';

import Layout from '../../../components/templates/Layout/';
import PostSection from '../../../components/organisms/PostSection/';

import styles from '../../style.module.scss';

interface PageBlogCatIdProps {
  blog: any;
  category: [];
  totalCount: number;
}

interface PageBlogCatIdMapJsonProps {
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

function PageBlogCatId({ blog, category } : PageBlogCatIdProps) {

  return (
    <Layout category={category}>
      <main>
        <div className={styles.main}>
          { blog.length === 0 ?
          <div>
            <p>ブログはない。</p>
          </div>
          :
            blog.map((json: PageBlogCatIdMapJsonProps) =>
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
            )
          }
        </div>
      </main>
    </Layout>
  )
}

export default PageBlogCatId;



export async function getStaticPaths() {
  const data = await client
    .get({
      endpoint: 'category',
      queries: {
        limit: 40,
      }
    });


    const paths = data.contents.map( (content : any) => `/blog/category/${content.id}`);

    return {
      paths,
      fallback: false
    }
}




export async function getStaticProps( context : any ) {
  const id = context.params.id;
  const data = await client
  .get({
    endpoint: 'blog',
    queries: {
      limit: 50,
      orders: '-date',
      filters: `category[equals]${id}`,
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
      category: data_cat.contents,
    },
  }
}
