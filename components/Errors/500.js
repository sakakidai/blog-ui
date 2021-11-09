import Title from '../../components/UI/Title';
const Error500 = () => {
  return (
    <div className='flex justify-center items-center flex-col h-full leading-loose'>
      <Title text='500 - システムエラー' />
      <p className='text-center'>
        申し訳ございません。しばらくしてからアクセスしてください。
      </p>
    </div>
  );
};

export default Error500;
