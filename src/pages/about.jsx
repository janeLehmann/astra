import React from 'react';

import Layout from '../components/Layout/Layout';
import About from '../components/About/About';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="О нас" />
      <About main={data} />
    </Layout>
  );
};

export default AboutPage;

/*export const query = graphql`
  query {
    wordpressPage {
      acf {
        main_page {
          ... on WordPressAcf_content {
            content
          }
          ... on WordPressAcf_team_list {
            team {
              post_title
            }
          }
          ... on WordPressAcf_single_photo {
            single_photo {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  }
`;*/
