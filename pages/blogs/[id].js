import Layout from '../../components/Layout';
import BlogDetail from '../../components/Blogs/BlogDetail';
import { getAllBlogIds, getBlogData, getSidebarData } from '../../lib/blogs';
import Card from '../../components/UI/Card';
import IdolDetail from '../../components/Idols/IdolDetail';
import BlogSideBar from '../../components/Blogs/BlogSideBar';

const Blog = ({ blog, sidebar }) => {
  return (
    <Layout title={blog.title}>
      <div className='p-5 grid grid-cols-1 md:grid-cols-9 lg:grid-cols-12 gap-2'>
        <div className='hidden lg:col-span-3 lg:inline-block p-5'>
          <IdolDetail idol={blog.idol} />
        </div>
        <Card classes='grid-cols-1 md:col-span-6 bg-white p-5'>
          <BlogDetail blog={blog} />
        </Card>
        <div className='grid-cols-1 md:col-span-3 py-5'>
          <BlogSideBar
            idols={sidebar.idols}
            genreList={sidebar.genreList}
            distributorList={sidebar.distributorList}
          />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllBlogIds();

  return {
    paths,
    // TODO: ビルド時にエラーが出たのでfalseに設定
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const blog = await getBlogData(params.id);
  const sidebar = await getSidebarData();

  return {
    props: { blog, sidebar },
    revalidate: 60,
  };
};

export default Blog;
