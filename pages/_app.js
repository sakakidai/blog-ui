import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import '../styles/globals.css';
import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';

// 未使用
import Loader from '../components/Loader';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start();
      setLoading(true);
    };
    const handleStop = (url) => {
      NProgress.done();
      setLoading(false);
    };
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
  }, [router]);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
