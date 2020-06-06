import React, { useState } from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout/Layout';
import StartScreen from '../components/StartScreen/StartScreen';
import SEO from '../components/seo';

const IndexPage = ({lang}) => {
  const [magic, setMagic] = useState('black');

  return (
    <Layout
      setMagic={() => {
        setMagic("#"+((1<<24)*Math.random()|0).toString(16));
      }}
      magic={magic}
      isMagic
      isFullScreen
    >
      <SEO title="Home" />

      <StartScreen magic={magic} lang={lang} />
    </Layout>
  );
};

const mapStateToProps = state => ({
  lang: state.lang,
});

export default connect(mapStateToProps)(IndexPage);
