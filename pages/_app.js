import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { existsGaId, pageview } from '../lib/gtag';
import NProgress from 'nprogress';
import GoogleAnalytics from '../components/GoogleAnalytics';

import '../styles/globals.css';
import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (existsGaId) {
        pageview(url);
      }
    };
    const handleStart = (_url) => {
      NProgress.start();
    };
    const handleStop = (_url) => {
      NProgress.done();
    };
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
