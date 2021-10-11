import { ClockIcon } from '@heroicons/react/outline';
import { MyDate } from '../UI/MyDate';

export const BlogCreatedAtLabel = ({ createdAt }) => {
  return (
    <>
      <ClockIcon className='h-5 w-5 inline-block align-middle text-yellow-400' />
      <span className='align-middle text-yellow-400'>
        <MyDate dateString={createdAt} />
      </span>
    </>
  );
};

export default BlogCreatedAtLabel;
