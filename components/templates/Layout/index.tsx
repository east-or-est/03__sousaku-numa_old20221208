import Head from 'next/head';

import { SITE_TITLE } from '../../../const/Meta/';

import Footer from '../../organisms/Footer/';
import Header from '../../organisms/Header/';

interface LayoutProps {
  children: any;
  category: [];
}

function Layout({ children, category }: LayoutProps) {
  return (
    <div>
      <Head>
        <meta name="title" content={SITE_TITLE} />
        <meta
          name="description"
          content="創作活動や戯言のような徒然日記、ゲームプレイ日記を纏めたブログ"
        />
        <title>{SITE_TITLE}</title>
      </Head>
      <Header
        category={category}
      />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;