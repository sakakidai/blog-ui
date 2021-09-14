const Overlay = ({ onClosed }) => {
  return (
    <div className='fixed inset-0 bg-black opacity-25' onClick={onClosed}></div>
  );
};

export default Overlay;
