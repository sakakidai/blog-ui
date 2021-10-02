const Card = ({ children, classes }) => {
  return <div className={`rounded shadow-lg ${classes}`}>{children}</div>;
};

export default Card;
