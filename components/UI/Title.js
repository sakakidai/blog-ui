const Title = ({ text, textColor = 'text-black', children }) => {
  return (
    <h1 className={`font-bold text-xl mb-4 ${textColor}`}>
      {text || children}
    </h1>
  );
};

export default Title;
