import BlogTagList from '../../components/Blogs/BlogTagList';
import Title from '../../components/UI/Title';
import IdolList from '../Idols/IdolList';
import { useMaxBreakPoint } from '../../hooks/useBreakpoint';

const BlogSideBar = ({ idols, genreList, saleList }) => {
  const isPhone = useMaxBreakPoint('sm');

  return (
    <>
      {!isPhone && (
        <div className='flex flex-col items-center mx-3'>
          <div className='mb-5 text-center'>
            <Title text='ジャンル一覧' />
            {genreList && (
              <BlogTagList tagList={genreList} bgColor='bg-red-400' />
            )}
          </div>
          <div className='my-5 text-center'>
            <Title text='販売先一覧' />
            {saleList && (
              <BlogTagList tagList={saleList} bgColor='bg-yellow-500' />
            )}
          </div>
          <div className='my-5'>
            <Title text='アイドル一覧' />
            <IdolList idols={idols} />
          </div>
        </div>
      )}
    </>
  );
};

export default BlogSideBar;
