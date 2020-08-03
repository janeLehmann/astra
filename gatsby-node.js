const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allWordpressCategory {
        nodes {
          name
          slug
        }
      }
      allWordpressWpProjects {
        nodes {
          acf {
            address_eng
            address_rus
            architector_eng
            architector_rus
            city_eng
            city_rus
            main_slider {
              localFile {
                publicURL
              }
            }
            content_eng_projects {
              ... on WordPressAcf_2_photos_in_row {
                id
                photo_1 {
                  localFile {
                    publicURL
                  }
                }
                photo_2 {
                  localFile {
                    publicURL
                  }
                }
              }
              ... on WordPressAcf_quote {
                quote
              }
              ... on WordPressAcf_single_photo {
                single_photo {
                  localFile {
                    publicURL
                  }
                }
                align
              }
              ... on WordPressAcf_text {
                text
              }
            }
            content_rus_projects {
              ... on WordPressAcf_2_photos_in_row {
                id
                photo_1 {
                  localFile {
                    publicURL
                  }
                }
                photo_2 {
                  localFile {
                    publicURL
                  }
                }
              }
              ... on WordPressAcf_quote {
                quote
              }
              ... on WordPressAcf_single_photo {
                single_photo {
                  localFile {
                    publicURL
                  }
                }
                align
              }
              ... on WordPressAcf_text {
                text
              }
            }
            square_eng
            square_rus
            time_eng
            time_rus
            title_eng
            title_rus
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
