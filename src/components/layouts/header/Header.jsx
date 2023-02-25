import React from "react";
import jupiter from "../../../assets/primary-color-match.png";
import styles from "./Header.module.scss";
// import Menu from "../../UI/menu/Menu";

const Header = () => {
  return (
    <header className={styles["header-container"]}>
      <div className={styles["logo"]}>
        <span className={styles["logo-container"]}>
          <img
            alt="Jupiter-logo-image"
            src={jupiter}
            className={styles["jupiter-logo-img"]}
          />
        </span>
        <span className={styles["page-title"]}>Title of page</span>
      </div>
      <div className={styles["header-buttons"]}>
        <button className={styles["login-btn"]}>Login</button>
        <button className={styles["sign-up-btn"]}>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
