import React from "react";

import styles from "./Header.module.scss";

interface Props {
  count: number;
}

const Header: React.FC<Props> = ({ count }) => {
  return (
    <div className={styles.header}>
      <div>Header</div>

      <div>Count {count}</div>
    </div>
  );
};

export default Header;
