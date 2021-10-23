import Layout from '../components/Layout';
import Title from '../components/UI/Title';

const About = () => {
  return (
    <Layout title='お問い合わせ'>
      <div className='flex justify-center items-center flex-col h-full leading-loose'>
        <Title text='お問い合わせ' />
        <div className='m-5 md:w-2/4'>
          <p className='text-center'>
            当サイトは現在リリース前テスト中のため、お問い合わせができません。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
