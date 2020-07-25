import React from 'react';

import Layout from '../components/Layout/Layout';
import About from '../components/About/About';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import { useStateWithLocalStorage } from '../helpers';

const AboutPage = ({ data }) => {
  const [lang, setLang] = useStateWithLocalStorage('astraLang');

  return (
    <Layout isInnerPage lang={lang} engClick={() => setLang('ENG')} ruClick={() => setLang('RU')}>
      <SEO title={lang === 'RU' ? 'О нас' : 'About'} />
      <About
        // main={
        //   data &&
        //   data.allWordpressAcfPages &&
        //   data.allWordpressAcfPages.edges.filter(
        //     item =>
        //       item.node &&
        //       (item.node.acf.about_content_eng ||
        //         item.node.acf.about_content_rus ||
        //         item.node.acf.about_image),
        //   )
        // }
        team={data && data.allWordpressAcfTeam && data.allWordpressAcfTeam.nodes}
        lang={lang}
      />
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    allWordpressAcfTeam {
      nodes {
        acf {
          desc_eng
          desc_rus
          name_eng
          name_rus
          photo {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`;
