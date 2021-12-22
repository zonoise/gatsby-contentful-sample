import * as React from "react";
import * as styles from "./jobs.module.scss";

const Jobs = ({ edges }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>経歴</h2>
      <div className={styles.jobs}>
        {edges.map((edge) => {
          return (
            <div className={styles.job}>
              <div className={styles.title}>{edge.node.title}</div>
              <div className={styles.content}>{edge.node.content}</div>
              <p>{edge.node.price}</p>

              {/* start end どちらかが入っていたらレンダリング */}
              {(edge.node.start || edge.node.end) && (
                <div className={styles.startend}>
                  <span className={styles.start}>{edge.node.start}</span>
                  <span className={styles.end}>{edge.node.end}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
