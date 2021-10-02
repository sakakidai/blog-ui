import Image from 'next/image';
import Text from '../UI/Text';

export const ContentImageList = ({ contentImages }) => {
  return (
    <>
      {contentImages.map((contentImage) => {
        return (
          <div key={contentImage.id} className='my-5'>
            <Image
              className='w-full'
              src={contentImage.image}
              alt='Content Image'
              width={1600}
              height={900}
            />
            {contentImage.comment.length > 0 && (
              <Text>{contentImage.comment}</Text>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ContentImageList;
