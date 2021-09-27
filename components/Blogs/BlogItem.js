import Image from 'next/image';

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
        <p className='text-gray-700 text-base'>{blog.outline}</p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #photography
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #travel
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #winter
        </span>
      </div>
    </li>
  );
};

export default BlogItem;
