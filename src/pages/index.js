import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Card from "../components/card";
import { getImage } from "gatsby-plugin-image"
import Container from "../components/container";
import Hero from "../components/hero";
import PostsRecent from "../components/posts-recent";
import PostsCard from "../components/posts-card";
import Jobs from "../components/jobs";

const IndexPage = ({ data }) => {

  const posts = data.allContentfulPost.edges;
  const jobs = data.allContentfulJobHistory.edges;

  return (
    <Layout pageTitle="Home Page">
      <Container>
        <Hero text="ヘッドレスCMS"/>
      </Container>
      <PostsCard edges={posts}/>
      <PostsRecent edges={posts}/>

      <Jobs edges={jobs}/>

      
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
    allContentfulJobHistory(sort:{fields:order,order:DESC}) {
      edges {
        node {
          id
          title
          content
          start
          end
        }
      }
    }
  }
`;

export default IndexPage;
