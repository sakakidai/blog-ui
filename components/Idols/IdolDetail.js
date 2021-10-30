import Image from 'next/image';
import Text from '../UI/Text';
import BorderDashTitle from '../UI/BorderDashTitle';

export const IdolDetail = ({ idol }) => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col justify-center items-center max-w-lg w-full'>
        <BorderDashTitle classes='text-center'>{idol.name}</BorderDashTitle>
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
    </div>
  );
};

export default IdolDetail;
