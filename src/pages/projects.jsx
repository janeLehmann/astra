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
      <SEO title="Projects" />

      <Projects list={data.allWordpressWpProjects.nodes} magic lang={lang} />
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  query {
    allWordpressWpProjects {
      nodes {
        acf
        slug
        categories {
          name
          slug
        }
      }
    }
  }
`;
