import Layout from '../components/Layout';
import Title from '../components/UI/Title';
const Custom404 = () => {
  return (
    <Layout title='404 - ページが存在しません'>
      <div className='flex justify-center items-center flex-col h-full leading-loose'>
        <Title text='404 - ページが存在しません' />
      </div>
    </Layout>
  );
};

export default Custom404;
