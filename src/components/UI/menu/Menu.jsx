import React from "react";
import styles from "./Menu.module.scss";

const Menu = () => {
  const toggle = document.getElementById("toggle");
  const sidebar = document.getElementById("sidebar");

  document.onclick = function (e) {
    if (e.target.id != "sidebar" && e.target.id != "toggle") {
      toggle.classList.remove("active");
      sidebar.classList.remove("active");
    }
  };

  toggle.onclick = function () {
    toggle.classList.toggle("active");
    sidebar.classList.toggle("active");
  };
  return (
    <div>
      <div id={styles["toggle"]}></div>
      <div id={styles["sidebar"]}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Discussion</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
