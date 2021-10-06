import Link from 'next/link';

const BlogTagList = ({ tagList, bgColor, textColor = 'text-white' }) => {
  return (
    <>
      {tagList.map((tag) => (
        <button
          key={tag.id}
          className={`${bgColor} ${textColor} inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 transition-opacity ease-in duration-300 hover:opacity-60`}
        >
          <Link href={`/blogs?tag=${tag.name}`}>
            <a>
              {tag.name} {tag.taggingsCount}件
            </a>
          </Link>
        </button>
      ))}
    </>
  );
};

export default BlogTagList;
