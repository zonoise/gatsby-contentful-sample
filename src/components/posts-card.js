import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./posts-card.module.scss";
import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image";

const PostsCard = ({ edges }) => {
  return (
    <div className={styles.container}>
       <div className={styles.cards}>
        {edges.map((edge) => {
          const image = getImage(edge.node.image);

          return (
            <div className={styles.post} key={edge.node.id}>
              <GatsbyImage className={styles.image} image={image} alt={edge.node.title} />

              <Link to={`/post/${edge.node.slug}`}>
               <div className={styles.title}>
                 {edge.node.title}
                </div>
                <p>
                {edge.node.title}
                {edge.node.title}
                {edge.node.title}
                {edge.node.title}
                {edge.node.title}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostsCard;
