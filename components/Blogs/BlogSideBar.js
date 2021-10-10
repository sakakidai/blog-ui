import BlogTagList from '../../components/Blogs/BlogTagList';
import Title from '../../components/UI/Title';
import IdolList from '../Idols/IdolList';

const BlogSideBar = ({ idols, genreList, distributorList }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-5 text-center'>
        <Title text='ジャンル一覧' />
        <BlogTagList tagList={genreList} bgColor='bg-red-400' />
      </div>
      <div className='my-5 text-center'>
        <Title text='販売先一覧' />
        <BlogTagList tagList={distributorList} bgColor='bg-yellow-500' />
      </div>
      <div className='my-5'>
        <Title text='アイドル一覧' />
        <IdolList idols={idols} />
      </div>
    </div>
  );
};

export default BlogSideBar;
