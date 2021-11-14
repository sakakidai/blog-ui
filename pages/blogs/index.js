import React, { useState, useEffect } from 'react';
import { getAllBlogsData } from '../../lib/blogs';
import { getSidebarData } from '../../lib/sidebar';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

import Layout from '../../components/Layout';
import BlogSideBar from '../../components/Blogs/BlogSideBar';
import BorderDashTitle from '../../components/UI/BorderDashTitle';
import DmmWidgeBanner from '../../components/Scripts/DmmWidgetBanner';
import BlogsListWithPagination from '../../components/Blogs/BlogsListWithPagination';

const BlogsPage = ({ data, sidebar }) => {
  const router = useRouter();
  const [tag, setTag] = useState(null);

  useEffect(() => {
    setTag(router.query.tag);
  }, [router.query]);

  const tagElement = () => {
    if (tag) {
      return '(' + tag + ')';
    } else {
      return '';
    }
  };

  return (
    <>
      <NextSeo
        title='レビュー一覧'
        description='グラビアアイドルのマッサージ動画をレビューするサイト「アイドルレビューズ」です。新作のDMMアイドル動画のレビューを主に行っています。マッサージ以外のジャンルもたまにレビューします。'
        openGraph={{
          title: 'アイドルレビューズ - レビュー一覧',
          description:
            'グラビアアイドルのマッサージ動画をレビューするサイト「アイドルレビューズ」です。新作のDMMアイドル動画のレビューを主に行っています。マッサージ以外のジャンルもたまにレビューします。',
          url: 'https://idol-review.com/blogs',
          site_name: 'アイドルレビューズ',
          images: [{ url: 'https://idol-review.com/idol-review-home.png' }],
        }}
      />
      <Head>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:domain' content='idol-review.com' />
        <meta
          name='twitter:title'
          content='アイドルレビューズ - レビュー一覧'
        />
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
            <BorderDashTitle classes='pl-5'>{`レビュー一覧${tagElement()}`}</BorderDashTitle>
            <BlogsListWithPagination initialData={data} />
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
  const data = await getAllBlogsData();
  const sidebar = await getSidebarData();

  return {
    props: {
      data,
      sidebar,
    },
    revalidate: 60,
  };
};

export default BlogsPage;
