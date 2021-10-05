import React, { useState, useEffect } from 'react';
import { getAllHomeData } from '../../lib/blogs';
import { useRouter } from 'next/router';
import { useBlogs } from '../../hooks/useBlog';
import Layout from '../../components/Layout';
import BlogList from '../../components/Blogs/BlogList';
import BlogSideBar from '../../components/Blogs/BlogSideBar';

const Blogs = ({ staticBlogs, idols, genreList, distributorList }) => {
  const router = useRouter();
  const [blogs, setBlogs] = useState(staticBlogs);
  const queryParams = !!router.query.tag ? `?tag=${router.query.tag}` : '';
  const { data, error } = useBlogs(queryParams);

  useEffect(() => {
    if (data) {
      setBlogs(data);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!blogs) {
    return <p>Loading...</p>;
  }

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

export async function getStaticProps() {
  const data = await getAllHomeData();
  const [blogs, idols, genreList, distributorList] = data;

  return {
    props: { staticBlogs: blogs, idols, genreList, distributorList },
    revalidate: 60,
  };
}

export default Blogs;
