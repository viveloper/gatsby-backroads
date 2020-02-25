const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `/tours/${node.slug}`,
      component: path.resolve('./src/templates/tour-template.jsx'),
      context: {
        slug: node.slug,
      },
    })
  })
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve('./src/templates/blog-template.jsx'),
      context: {
        slug: node.slug,
      },
    })
  })

  // amount of posts
  const posts = data.posts.edges
  // posts per page
  const postsPerPage = 5
  // how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  const pages = Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve('./src/templates/blog-list-template.jsx'),
      context: {
        skip: i * postsPerPage,
        limit: postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
