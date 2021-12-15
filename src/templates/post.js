import * as React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "../components/layout";
const PostTemplate = ({ pageContext }) => {
  const { post } = pageContext;

  return (
    <Layout pageTitle={post.title}>
      {post.content && renderRichText(post.content)}
    </Layout>
  );
};

export default PostTemplate;