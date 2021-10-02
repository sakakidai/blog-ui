export const Text = ({ children, classes }) => {
  return (
    <div className={`whitespace-pre-wrap text-gray-700 text-base ${classes}`}>
      {children}
    </div>
  );
};

export default Text;
