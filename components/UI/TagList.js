const TagList = ({ tagList, bgColor, textColor = 'text-white' }) => {
  return (
    <>
      {tagList.map((tag) => (
        <span
          key={tag}
          className={`${bgColor} ${textColor} inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2`}
        >
          {tag}
        </span>
      ))}
    </>
  );
};

export default TagList;
