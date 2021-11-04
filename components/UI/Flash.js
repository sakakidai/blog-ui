const Frash = ({ text, status, classes, handleCloseFrash }) => {
  const bgColor = () => {
    if (status === 'success') {
      return 'bg-yellow-400';
    } else if (status === 'error') {
      return 'bg-red-400';
    } else {
      return;
    }
  };

  return (
    <div
      className={`absolute w-full flex flex-row shadow-md border border-gray-100 rounded-lg overflow-hidden ${bgColor()} ${classes}`}
    >
      <div className='flex-1 p-3'>
        <h1 className='md:text-xl text-white'>{text}</h1>
      </div>

      <div
        className='cursor-pointer border-l hover:bg-yellow-300 border-gray-100 px-4 flex place-items-center'
        onClick={() => handleCloseFrash()}
      >
        <p className='text-white text-xs'>CLOSE</p>
      </div>
    </div>
  );
};

export default Frash;
