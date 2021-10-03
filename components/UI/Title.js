const Title = ({ text, textColor = 'text-black' }) => {
  return <h1 className={`font-bold text-xl mb-4 ${textColor}`}>{text}</h1>;
};

export default Title;
