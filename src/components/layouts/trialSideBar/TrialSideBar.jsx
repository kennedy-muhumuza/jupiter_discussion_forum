import React from "react";
import { Fragment } from "react";
import styles from "./TrialSideBar.module.scss";

const TrialSideBar = () => {
  return (
    <Fragment>
      <div className={styles["trial-side-bar-container"]}>
        <ul>
          <li>Home</li>
          <li>Discussions</li>
          <li>Account</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default TrialSideBar;
