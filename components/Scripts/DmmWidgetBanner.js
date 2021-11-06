import React, { useEffect } from 'react';

const DmmWidgeBanner = () => {
  useEffect(() => {
    const target = document.getElementById('widget-banner-wrapper');
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://widget-view.dmm.com/js/banner_placement.js?affiliate_id=idolreviewsd-001&banner_id=17_728_90';
    script.classList.add('widget-banner-script');
    target.appendChild(script);
  }, []);

  return (
    <div id='widget-banner-wrapper' className='flex justify-center mb-5'>
      <ins className='widget-banner'></ins>
    </div>
  );
};

export default DmmWidgeBanner;
