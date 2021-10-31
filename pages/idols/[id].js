import { NextSeo } from 'next-seo';
import { getAllIdolIds, getIdolData } from '../../lib/idols';
import { getSidebarData } from '../../lib/sidebar';

import Layout from '../../components/Layout';
import BlogList from '../../components/Blogs/BlogList';
import BlogSideBar from '../../components/Blogs/BlogSideBar';
import IdolDetail from '../../components/Idols/IdolDetail';
import BorderDashTitle from '../../components/UI/BorderDashTitle';

export const Idol = ({ idol, sidebar }) => {
  return (
    <>
      <NextSeo title={idol.name} description={idol.comment} />
      <Layout>
        <div className='p-5 grid grid-cols-1 lg:grid-cols-12'>
          <div className='col-span-1 lg:col-span-9'>
            <div className='py-5'>
              <IdolDetail idol={idol} />
            </div>
            <div className='py-5'>
              <BorderDashTitle classes='pl-5'>{`${idol.name}のレビュー一覧`}</BorderDashTitle>
              <BlogList blogs={idol.blogs} />
            </div>
          </div>
          <div className='col-span-1 lg:col-span-3 py-5'>
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

export const getStaticPaths = async () => {
  const paths = await getAllIdolIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const idol = await getIdolData(params.id);
  const sidebar = await getSidebarData();

  if (!idol) {
    return {
      notFound: true,
    };
  }

  return {
    props: { idol, sidebar },
    revalidate: 60,
  };
};

export default Idol;
