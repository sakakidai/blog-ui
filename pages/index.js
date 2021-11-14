import { getAllBlogsData, getSidebarData } from '../lib/blogs';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/Layout';
import BlogList from '../components/Blogs/BlogList';
import BlogSideBar from '../components/Blogs/BlogSideBar';
import BorderDashTitle from '../components/UI/BorderDashTitle';
import DmmWidgeBanner from '../components/Scripts/DmmWidgetBanner';

const Home = ({ blogs, sidebar }) => {
  return (
    <>
      <NextSeo
        title='HOME'
        description='グラビアアイドルのマッサージ動画をレビューするサイト「アイドルレビューズ」です。新作のDMMアイドル動画のレビューを主に行っています。マッサージ以外のジャンルもたまにレビューします。'
        openGraph={{
          title: 'アイドルレビューズ - HOME',
          description:
            'グラビアアイドルのマッサージ動画をレビューするサイト「アイドルレビューズ」です。新作のDMMアイドル動画のレビューを主に行っています。マッサージ以外のジャンルもたまにレビューします。',
          url: 'https://idol-review.com/',
          site_name: 'アイドルレビューズ',
          images: [{ url: 'https://idol-review.com/idol-review-home.png' }],
        }}
      />
      <Head>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:domain' content='idol-review.com' />
        <meta name='twitter:title' content='アイドルレビューズ - HOME' />
        <meta
          name='twitter:description'
          content='グラビアアイドルのマッサージ動画をレビューするサイト「アイドルレビューズ」です。新作のDMMアイドル動画のレビューを主に行っています。マッサージ以外のジャンルもたまにレビューします。'
        />
        <meta
          name='twitter:image'
          content='https://idol-review.com/idol-review-home.png'
        />
      </Head>
      <Layout
        idols={sidebar.idols}
        genreList={sidebar.genreList}
        saleList={sidebar.saleList}
      >
        <div className='px-5 grid grid-cols-1 lg:grid-cols-12'>
          <div className='col-span-1 lg:col-span-9 py-5'>
            <DmmWidgeBanner />
            <BorderDashTitle classes='pl-5 font-sans'>HOME</BorderDashTitle>
            <BlogList blogs={blogs} />
            <div className='my-5'>
              <Link href={{ pathname: '/blogs', query: { page: 2 } }}>
                <a className='px-4 py-2 font-bold text-xl font-sans rounded text-yellow-500 trantision-colors ease-in duration-200 hover:text-yellow-300'>
                  もっと見る
                </a>
              </Link>
            </div>
          </div>
          <div className='col-span-1 lg:col-span-3 sm:py-5'>
            <BlogSideBar
              idols={sidebar.idols}
              genreList={sidebar.genreList}
              saleList={sidebar.saleList}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const { _, blogs } = await getAllBlogsData();
  const sidebar = await getSidebarData();

  return {
    props: { blogs, sidebar },
    revalidate: 60,
  };
};

export default Home;
