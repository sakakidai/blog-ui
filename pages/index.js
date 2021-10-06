import Layout from '../components/Layout';

const Home = () => {
  return;
};

export const getStaticProps = async () => {
  return {
    redirect: {
      permanent: true,
      destination: '/blogs',
    },
  };
};

export default Home;
