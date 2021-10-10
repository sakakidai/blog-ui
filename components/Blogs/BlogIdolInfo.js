import Image from 'next/image';
import Text from '../UI/Text';
import Title from '../UI/Title';

export const BlogIdolInfo = ({ idol }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Title>
        {idol.name}
        {idol.age && `(${idol.age}歳)`}
      </Title>
      <div className='mb-5'>
        <Image
          className='w-full rounded-full'
          src={idol.image}
          alt='Idol Image'
          width={150}
          height={150}
        />
      </div>
      <Text>{idol.comment}</Text>
    </div>
  );
};

export default BlogIdolInfo;
