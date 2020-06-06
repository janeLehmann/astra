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
          address_eng
          address_rus
          architector_eng
          architector_rus
          city_eng
          city_rus
          content_eng
          content_rus
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
