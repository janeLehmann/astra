const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
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
  `).then(result => {
    console.log(JSON.stringify(result, null, 4));
    result.data.allWordpressWpProjects.nodes.forEach(item => {
      createPage({
        path: item.slug,
        component: path.resolve(`./src/templates/ProjectTemplate/ProjectTemplate.jsx`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: item.slug,
        },
      });
    });
  });
};
