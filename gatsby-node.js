const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post.js`)
  const result = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
            title
            content {
                raw
            }
          }
        }
      }
    }
  `)
  result.data.allContentfulPost.edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.slug}`,
      component: postTemplate,
      context: {
        post: edge.node,
      }
    })
  })
}