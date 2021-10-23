import Layout from '../components/Layout';
import Title from '../components/UI/Title';
const Custom500 = () => {
  return (
    <Layout title='500 - システムエラー'>
      <div className='flex justify-center items-center flex-col h-full leading-loose'>
        <Title text='500 - システムエラー' />
        <p className='text-center'>
          申し訳ございません。しばらくしてからアクセスしてください。
        </p>
      </div>
    </Layout>
  );
};

export default Custom500;
