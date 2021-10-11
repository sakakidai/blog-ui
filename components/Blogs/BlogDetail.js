import { useState } from 'react';

import Image from 'next/image';
import TagList from '../UI/TagList';
import BlogTable from './BlogTable';
import ContentImageList from './ContentImageList';
import Text from '../UI/Text';
import Title from '../UI/Title';
import BlogCreatedAtLabel from './BlogCreatedAtLabel';

const BlogDetail = ({ blog }) => {
  const [processing, setProcessing] = useState(false);

  const handleClickSubmit = (redirectUrl) => {
    if (processing) return;

    setProcessing(true);
    location.href = redirectUrl;
    setProcessing(false);
  };

  return (
    <div>
      <div className='mb-4'>
        <Title text={blog.title} />
        <BlogCreatedAtLabel createdAt={blog.createdAt} />
      </div>
      <Image
        className='w-full'
        src={blog.pieceImage || blog.thumbnail}
        alt='Blog Pice Image or Thumbnail'
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

      <div className='flex flex-col items-center'>
        {blog.distributors.map((distributor) => (
          <button
            key={distributor.id}
            className={`text-white font-bold py-3 w-72 my-2 rounded block transition-opacity ease-in duration-300 hover:opacity-60 ${
              processing ? 'opacity-60 pointer-events-none' : 'bg-red-400'
            }`}
            onClick={() => handleClickSubmit(distributor.url)}
          >
            {`${distributor.name}で詳細を見る`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
