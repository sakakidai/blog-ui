import { useState } from 'react';
import Image from 'next/image';
import TagList from '../UI/TagList';
import BlogTable from './BlogTable';
import ContentImageList from './ContentImageList';
import Text from '../UI/Text';
import Title from '../UI/Title';

const BlogDetail = ({ blog }) => {
  const [processing, setProcessing] = useState(false);

  const handleClickSubmit = () => {
    if (processing) return;

    setProcessing(true);
    location.href = 'https://www.ameamelog.com/html-a-button/';
    setProcessing(false);
  };

  return (
    <div className='m-5'>
      <Title text={blog.title} />
      <Image
        className='w-full'
        src={blog.thumbnail}
        alt='Blog Thumbnail'
        width={1600}
        height={900}
      />
      <BlogTable blog={blog} />
      <Text classes='my-6'>{blog.outline}</Text>
      <ContentImageList contentImages={blog.contentImages} />

      <div className='text-xl my-3'>
        <p className='mb-2'>タグ</p>
        <TagList tagList={blog.genreList} bgColor='bg-red-400' />
        <TagList tagList={blog.distributorList} bgColor='bg-yellow-500' />
      </div>

      <div className='text-center mb-10'>
        <button
          className={`text-white font-bold py-3 px-20 rounded transition-opacity ease-in duration-300 hover:opacity-60 ${
            processing ? 'opacity-60 pointer-events-none' : 'bg-red-400'
          }`}
          onClick={handleClickSubmit}
        >
          動画を見る
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
