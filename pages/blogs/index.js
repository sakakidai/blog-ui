import { getAllBlogsData } from '../../lib/blogs';
import Layout from '../../components/Layout';
import BlogList from '../../components/Blogs/BlogList';

const Blogs = ({ blogs }) => {
  return (
    <Layout title='ブログ一覧'>
      <div className='p-5 grid grid-cols-1 lg:grid-cols-12 gap-3'>
        <div className='col-span-1 lg:col-span-9'>
          <BlogList blogs={blogs} />
        </div>
        <div className='col-span-1 lg:col-span-3 bg-green-400'>サイドバー</div>
      </div>
    </Layout>
  );
};

export default Blogs;

export async function getStaticProps() {
  const blogs = await getAllBlogsData();

  return {
    props: { blogs },
  };
}
