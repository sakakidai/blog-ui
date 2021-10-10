import IdolItem from './IdolItem';

const IdolList = ({ idols }) => {
  return (
    <>
      {idols.map((idol) => {
        return <IdolItem key={idol.id} idol={idol} />;
      })}
    </>
  );
};

export default IdolList;
