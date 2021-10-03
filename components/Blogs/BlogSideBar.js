import BlogTagList from '../../components/Blogs/BlogTagList';
import Title from '../../components/UI/Title';
import BlogIdolList from './BlogIdolList';

const BlogSideBar = ({ idols, genreList, distributorList }) => {
  return (
    <>
      <div className='my-5'>
        <Title text='ジャンル一覧' />
        <BlogTagList tagList={genreList} bgColor='bg-red-400' />
      </div>
      <div className='my-5'>
        <Title text='販売先一覧' />
        <BlogTagList tagList={distributorList} bgColor='bg-yellow-500' />
      </div>
      <div className='my-5'>
        <Title text='アイドル一覧' />
        <BlogIdolList idols={idols} />
      </div>
    </>
  );
};

export default BlogSideBar;
