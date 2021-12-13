import { Link } from "gatsby";
import * as React from "react";
import * as styles from "./posts-recent.module.scss";

const PostsRecent = ({ edges }) => {
  return (
    <div className={styles.container}>
      <div className={styles.recent}>
        {edges.map((edge) => {
          return (
            <div className={styles.post} key={edge.node.id}>
              <Link to={`/post/${edge.node.slug}`}>
               <a>{edge.node.title}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostsRecent;
