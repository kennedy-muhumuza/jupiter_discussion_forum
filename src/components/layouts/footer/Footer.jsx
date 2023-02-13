import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <footer>
        <p className="copyright-msg">
          Copyright &copy; Jupiter Family since 2021 . All rights reserved
        </p>
        <p className="cryptopile-founder-manager">
          This Forum was created by John Kennedy one of Jupiter forerunners.
        </p>
        <p className="follow-msg">Follow us on</p>
      </footer>
    </div>
  );
};

export default Footer;
