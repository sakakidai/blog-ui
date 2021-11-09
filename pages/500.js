import Layout from '../components/Layout';
import Error500 from '../components/Errors/500';
const Custom500 = () => {
  return (
    <Layout title='500 - システムエラー'>
      <Error500 />
    </Layout>
  );
};

export default Custom500;
