import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  return (
    <Layout pageTitle="Home Page">

      {data.allContentfulPost.edges.map(edge =>
        <p>{edge.node.title}</p>
      )}

    </Layout>
  )
}

export const query = graphql`
    query allContentfulPost {
      allContentfulPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
`

export default IndexPage