const Title = ({ text, children, textColor = 'text-black', classes }) => {
  return (
    <h1 className={`font-bold text-xl mb-4 ${textColor} ${classes}`}>
      {text || children}
    </h1>
  );
};

export default Title;
