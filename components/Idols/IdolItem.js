import Link from 'next/link';

export const IdolItem = ({ idol }) => {
  return (
    <Link href={`/idols/${idol.id}`}>
      <a className='block transition-colors duration-300 ease-in hover:text-yellow-400'>
        {`${idol.name}(${idol.publishBlogsCount}件)`}
      </a>
    </Link>
  );
};

export default IdolItem;
