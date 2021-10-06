import Layout from '../components/Layout';
import Title from '../components/UI/Title';

const About = () => {
  return (
    <Layout title='サイトについて'>
      <div className='flex justify-center items-center flex-col h-full leading-loose'>
        <Title text='サイトについて' />
        <div className='m-5 md:w-2/4'>
          <p>
            当サイト「アイドルマッサージレビュー」をご利用頂きありがとうございます。グラビアアイドルのマッサージが好きな管理人が趣味のもと運営しております。
          </p>
          <p>
            DMMアイドル動画を中心に良かった動画をレビューとして上げています。
          </p>
        </div>

        <div className='m-5 md:w-2/4'>
          <p>
            アダルトコンテンツは掲載しておりませんが、青少年には刺激が強い画像等が含まれる可能性があるため、18歳未満の方はご退出ください。
          </p>
          <p>
            著作権等の問題がございましたら削除いたしますのでご一報ください。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
