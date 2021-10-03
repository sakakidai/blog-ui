import { getAllBlogsData } from '../../lib/blogs';
import Layout from '../../components/Layout';
import BlogList from '../../components/Blogs/BlogList';
import BlogSideBar from '../../components/Blogs/BlogSideBar';

const Blogs = ({ blogs, idols, genreList, distributorList }) => {
  console.log(distributorList);

  return (
    <Layout title='ブログ一覧'>
      <div className='p-5 grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-9'>
          <BlogList blogs={blogs} />
        </div>
        <div className='col-span-1 lg:col-span-3 text-center flex flex-col mx-3'>
          <BlogSideBar
            idols={idols}
            genreList={genreList}
            distributorList={distributorList}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;

export async function getStaticProps() {
  const data = await getAllBlogsData();
  const [blogs, idols, genreList, distributorList] = data;

  return {
    props: { blogs, idols, genreList, distributorList },
    revalidate: 60,
  };
}
