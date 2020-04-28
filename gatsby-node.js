const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allWordpressWpProjects {
        nodes {
          acf {
            square
            city
            address
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
          slug
        }
      }
    }
  `).then(result => {
    result.data.allWordpressWpProjects.nodes.forEach(item => {
      console.log(item.slug);
      createPage({
        path: item.slug,
        component: path.resolve(`./src/templates/ProjectTemplate/ProjectTemplate.jsx`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: item.slug,
        },
      })
    })
  });
};
