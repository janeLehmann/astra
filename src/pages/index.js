import React, { useState } from 'react';

import Layout from '../components/Layout/Layout';
import StartScreen from '../components/StartScreen/StartScreen';
import SEO from '../components/seo';
import { useStateWithLocalStorage } from '../helpers';

const IndexPage = () => {
  const [magic, setMagic] = useState('black');
  const [lang, setLang] = useStateWithLocalStorage(
    'astraLang'
  );

  return (
    <Layout
      setMagic={() => {
        setMagic("#"+((1<<24)*Math.random()|0).toString(16));
      }}
      magic={magic}
      isFullScreen
      lang={lang}
      engClick={() => setLang('ENG')}
      ruClick={() => setLang('RU')}
    >
      <SEO title="Home" />

      <StartScreen magic={magic} lang={lang} />
    </Layout>
  );
};

export default IndexPage;
