import Title from './Title';

export const BorderDashTitle = ({ children, classes }) => {
  return (
    <Title
      classes={`border-t-2 border-b-2 border-dashed border-yellow-500 bg-white py-2 w-full h-12 ${classes}`}
    >
      {children}
    </Title>
  );
};

export default BorderDashTitle;
