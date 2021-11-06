import { useEffect, useState } from 'react';
import { PlayIcon } from '@heroicons/react/outline';

const ReturnTopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow);

    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 100; //ボタンを表示させたい位置
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const normalStyle =
    'transition-opacity ease-in duration-500 pointer-events-none opacity-0';
  const activeStyle = 'transition-opacity ease-in duration-500 opacity-70';
  const classes = isButtonActive ? activeStyle : normalStyle;

  return (
    <div className='fixed bottom-0 right-0'>
      <button
        onClick={returnTop}
        className={`bg-gray-800 text-white text-sm py-2 px-4 m-5 ${classes}`}
      >
        PAGE TOP
        <PlayIcon className='h-6 w-6 inline ml-1 transform -rotate-90' />
      </button>
    </div>
  );
};

export default ReturnTopButton;
