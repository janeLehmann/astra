import React, { useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';

const Projects = ({ data }) => {
  const [magic, setMagic] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Layout>
      <SEO title="Home" />
      <Header
        setMagic={() => {
          setMagic(prevState => !prevState);
        }}
        magic={magic}
        setIsMenuOpen={() => {
          setIsMenuOpen(true);
        }}
      />

      {data.allWordpressWpProjects.nodes.map((item) => (
        <div>{item.acf.square}</div>
      ))}

      <Footer magic={magic} />
      {isMenuOpen && (
        <Menu
          closeMenu={() => {
            setIsMenuOpen(false);
          }}
        />
      )}
    </Layout>
  );
};

export default Projects;

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
        }
        featured_media {
          localFile {
            url
            publicURL
          }
        }
      }
    }
  }
`;
