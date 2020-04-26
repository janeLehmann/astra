import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import Projects from '../components/Projects/Projects';

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <Projects list={data.allWordpressWpProjects.nodes} magic />
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  query {
    allWordpressWpProjects {
      nodes {
        acf {
          square
          text
          time
        }
        categories {
          name
          slug
          id
        }
        featured_media {
          localFile {
            url
            publicURL
          }
        }
        id
        title
      }
    }
  }
`;
