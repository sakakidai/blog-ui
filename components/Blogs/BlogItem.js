import Image from 'next/image';
import Link from 'next/link';
import BlogTable from './BlogTable';
import TagList from '../UI/TagList';
import Text from '../UI/Text';

const BlogItem = ({ blog }) => {
  return (
    <li className='rounded overflow-hidden shadow-lg transition hover:opacity-60 duration-300 ease-in hover:bg-gray-300'>
      <Link href={`/blogs/${blog.id}`}>
        <a className='block h-full'>
          <Image
            className='w-full'
            src={blog.thumbnail}
            alt='Blog Thumbnail'
            width={800}
            height={450}
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-4'>{blog.title}</div>
            <BlogTable blog={blog} />
            <Text>{blog.shotOutline}</Text>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <TagList tagList={blog.genreList} bgColor='bg-red-400' />
            <TagList tagList={blog.distributorList} bgColor='bg-yellow-500' />
          </div>
        </a>
      </Link>
    </li>
  );
};

export default BlogItem;
