import React from "react";

import { Button, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import styles from "./Header.module.scss";

interface Props {
  count: number;
  onCartOpen: () => void;
}

const Header: React.FC<Props> = ({ count, onCartOpen }) => {
  return (
    <div className={styles.header}>
      <div>Header</div>

      <Badge count={count}>
        <Button
          className={styles.button}
          type="primary"
          icon={<ShoppingCartOutlined />}
          size={"large"}
          onClick={onCartOpen}
        />
      </Badge>
    </div>
  );
};

export default Header;
