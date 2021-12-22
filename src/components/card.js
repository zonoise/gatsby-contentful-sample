import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./card.module.scss";
const Card = ({ image, text }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{text}</div>
      {<GatsbyImage image={image} alt={text} />}
    </div>
  );
};

export default Card;
