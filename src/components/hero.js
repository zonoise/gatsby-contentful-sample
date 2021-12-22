import * as React from "react";
import * as styles from "./hero.module.scss";

const Hero = ({text}) => {
  return (
    <div className={styles.hero}>
      <img className={styles.images} src={process.env.HERO_IMG} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Hero;
