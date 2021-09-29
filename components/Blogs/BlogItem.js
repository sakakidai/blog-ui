import Image from 'next/image';
import Link from 'next/link';
import { MyDate } from '../UI/MyDate';

const BlogItem = ({ blog }) => {
  return (
    <li className='rounded overflow-hidden shadow-lg'>
      <Link href={`/blogs/${blog.id}`}>
        <a>
          <Image
            className='w-full'
            src={blog.thumbnail}
            alt='Blog Thumbnail'
            width={800}
            height={450}
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-4'>{blog.title}</div>
            <table className='table-auto text-gray-700 text-base mb-4'>
              <tbody>
                <tr>
                  <th className='pr-10'>名前</th>
                  <td>
                    {blog.idol.name}({blog.idol.age}歳)
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th>タイトル</th>
                  <td>{blog.pieceTitle}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                  <td>
                    <MyDate dateString={blog.pieceReleaseOn} />
                  </td>
                </tr>
              </tbody>
            </table>

            <p className='whitespace-pre-wrap text-gray-700 text-base'>
              {blog.shotOutline}
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            {blog.genreList.map((genre) => (
              <span
                key={genre}
                className='inline-block rounded-full px-3 py-1 text-sm font-semibold text-white
                  bg-red-400 mr-2 mb-2'
              >
                {genre}
              </span>
            ))}
            {blog.distributorList.map((distributor) => (
              <span
                key={distributor}
                className='inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2'
              >
                {distributor}
              </span>
            ))}
          </div>
        </a>
      </Link>
    </li>
  );
};

export default BlogItem;
