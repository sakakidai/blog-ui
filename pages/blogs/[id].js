import Layout from '../../components/Layout';
import BlogDetail from '../../components/Blogs/BlogDetail';
import { getAllBlogIds, getBlogData } from '../../lib/blogs';
import { useMinBreakPoint } from '../../hooks/useBreakpoint';
import Card from '../../components/UI/Card';

const Blog = ({ blog }) => {
  // console.log(blog);
  const screenSizeMinLg = useMinBreakPoint('lg');

  return (
    <Layout title={blog.title}>
      <div className='p-5 grid grid-cols-1 md:grid-cols-9 lg:grid-cols-12 gap-2'>
        {screenSizeMinLg && (
          <div className='bg-red-500 grid-cols-1 md:col-span-3'>
            <h1>サイドバー</h1>
          </div>
        )}
        <Card classes='grid-cols-1 md:col-span-6 bg-white'>
          <BlogDetail blog={blog} />
        </Card>
        <div className='bg-green-400 grid-cols-1 md:col-span-3'>
          <h1>サイドバー</h1>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllBlogIds();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const blog = await getBlogData(params.id);

  return {
    props: { blog },
  };
};

export default Blog;
