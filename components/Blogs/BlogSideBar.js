import BlogTagList from '../../components/Blogs/BlogTagList';
import Title from '../../components/UI/Title';
import IdolList from '../Idols/IdolList';

const BlogSideBar = ({ idols, genreList, saleList }) => {
  return (
    <div className='flex flex-col items-center mx-3'>
      <div className='mb-5 text-center'>
        <Title text='ジャンル一覧' />
        <BlogTagList tagList={genreList} bgColor='bg-red-400' />
      </div>
      <div className='my-5 text-center'>
        <Title text='販売先一覧' />
        <BlogTagList tagList={saleList} bgColor='bg-yellow-500' />
      </div>
      <div className='my-5'>
        <Title text='アイドル一覧' />
        <IdolList idols={idols} />
      </div>
    </div>
  );
};

export default BlogSideBar;
