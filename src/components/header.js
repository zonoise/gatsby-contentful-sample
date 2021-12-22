import * as React from "react";
import { Link} from 'gatsby';
import * as styles from "./header.module.scss";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.right}>
          <Link to="/about">Right</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
