import { MyDate } from '../UI/MyDate';

const BlogTable = ({ blog }) => {
  return (
    <table className='table-fixed text-gray-700 text-base my-3'>
      <tbody>
        {blog.idol && (
          <tr>
            <th className='text-left pr-3'>名前</th>
            <td>
              {blog.idol.name}
              {blog.idolAge && `(当時 ${blog.idolAge}歳)`}
            </td>
            <td></td>
          </tr>
        )}
        <tr>
          <th className='text-left pr-3'>タイトル</th>
          <td>{blog.pieceTitle}</td>
        </tr>
        <tr>
          <th className='text-left pr-3'>発売日</th>
          <td>
            <MyDate dateString={blog.pieceReleaseOn} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BlogTable;
