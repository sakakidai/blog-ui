const BlogIdolList = ({ idols }) => {
  return (
    <>
      {idols.map((idol) => {
        return <div key={idol.id}>{idol.name}</div>;
      })}
    </>
  );
};

export default BlogIdolList;
