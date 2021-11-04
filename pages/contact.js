import Layout from '../components/Layout';
import Title from '../components/UI/Title';
import ContactForm from '../components/Contacts/ContactForm';
import Frash from '../components/UI/Flash';
import React, { useState } from 'react';

const About = () => {
  const [open, setOpen] = useState(false);
  const [flashMessage, setFlashMessage] = useState('');
  const [flashStatus, setFlashStatus] = useState('');

  const handleOpenFrash = (response) => {
    setOpen(true);
    if (response.status === 200) {
      setFlashMessage(response.data.message);
      setFlashStatus('success');
    } else if (response.status === 400) {
      setFlashMessage('入力内容にエラーがあります');
      setFlashStatus('error');
    }
  };

  return (
    <Layout title='お問い合わせ'>
      {open && (
        <Frash
          text={flashMessage}
          status={flashStatus}
          handleCloseFrash={() => setOpen(false)}
        />
      )}
      <div className='flex justify-center items-center flex-col h-full leading-loose my-7'>
        <Title text='お問い合わせ' />
        <div className='flex justify-center items-center flex-col m-5 md:w-2/4'>
          <ContactForm
            handleOpenFrash={(response) => handleOpenFrash(response)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
