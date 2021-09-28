import Image from 'next/image';
import { MyDate } from '../UI/MyDate';

const BlogItem = ({ blog }) => {
  return (
    <li className='rounded overflow-hidden shadow-lg'>
      <Image
        className='w-full'
        src={blog.thumbnail}
        alt='Blog Thumbnail'
        width={400}
        height={225}
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{blog.title}</div>
        <p className='text-gray-700 text-base'>
          {blog.idol.name}({blog.idol.age}歳)
        </p>
        <p className='text-gray-700 text-base'>
          タイトル:
          {blog.pieceTitle}
        </p>
        <p className='text-gray-700 text-base'>
          発売日:
          <MyDate dateString={blog.pieceReleaseOn} />
        </p>
        <p className='text-gray-700 text-base'>{blog.outline}</p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        {blog.genreList.map((genre) => (
          <span
            key={genre}
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
          >
            {genre}
          </span>
        ))}
        {blog.distributorList.map((distributor) => (
          <span
            key={distributor}
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
          >
            {distributor}
          </span>
        ))}
      </div>
    </li>
  );
};

export default BlogItem;
