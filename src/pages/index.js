import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Card from "../components/card";
import { getImage } from "gatsby-plugin-image"
import Container from "../components/container";
import Hero from "../components/hero";
import PostsRecent from "../components/posts-recent";
const IndexPage = ({ data }) => {

  const posts = data.allContentfulPost.edges;

  return (
    <Layout pageTitle="Home Page">
      <Container>
        <Hero text="ヘッドレスCMS"/>
      </Container>
      <PostsRecent edges={posts}/>
      
      {data.allContentfulPost.edges.map((edge) => { 
        const image = getImage(edge.node.image);
        return (
          <Card key={edge.node.id} text={edge.node.title} image={image} />
        )
        
      })}
    </Layout>
  );
};

export const query = graphql`
  query allContentfulPost {
    allContentfulPost {
      edges {
        node {
          title
          slug
          image {
            title
            description
            gatsbyImageData(
              width: 200
            )
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
