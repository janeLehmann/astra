import React from 'react';
import { graphql } from 'gatsby';

import { useStateWithLocalStorage } from '../helpers';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import Projects from '../components/Projects/Projects';

const ProjectsPage = ({ data }) => {
  const [lang, setLang] = useStateWithLocalStorage('astraLang');

  return (
    <Layout isInnerPage lang={lang} engClick={() => setLang('ENG')} ruClick={() => setLang('RU')}>
      <SEO title="Home" />

      <Projects list={data.allWordpressWpProjects.nodes} magic lang={lang} />
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  query {
    allWordpressWpProjects {
      nodes {
        acf {
          address_eng
          address_rus
          architector_eng
          architector_rus
          city_eng
          city_rus
          square_eng
          square_rus
          time_eng
          time_rus
          title_eng
          title_rus
          content_eng_projects {
            ... on WordPressAcf_text {
              text
            }
            ... on WordPressAcf_gallery {
              gallery {
                localFile {
                  publicURL
                }
              }
            }
          }
          photo {
            localFile {
              publicURL
            }
          }
        }
        slug
        categories {
          name
          slug
        }
      }
    }
  }
`;
