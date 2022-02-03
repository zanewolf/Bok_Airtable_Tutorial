const path = require(`path`)

exports.createPages = async ({graphql, actions}) => {

    const { data } = await graphql(`
    query Monsters {
      allAirtable {
        nodes {
          data {
            slug
          }
        }
      }
    }
  `)

    data.allAirtable.nodes.forEach(node => {
        actions.createPage({
            path: '/monster/'+ node.data.slug,
            component: path.resolve('./src/templates/monster-details.js'),
            context: { slug: node.data.slug }
        })
    })
}