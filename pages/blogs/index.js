import { getAllBlogsData } from '../../lib/blogs';
import Layout from '../../components/Layout';
import BlogList from '../../components/Blogs/BlogList';
import Image from 'next/image';

const Blogs = ({ blogs }) => {
  return (
    <Layout title='Blog Page'>
      <BlogList blogs={blogs} />
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
