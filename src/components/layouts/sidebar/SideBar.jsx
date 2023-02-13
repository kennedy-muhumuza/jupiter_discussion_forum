import React from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaWindowClose } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdSettings } from "react-icons/md";
import { BsFillChatTextFill } from "react-icons/bs";
import { MdExplore } from "react-icons/md";
import { closeSideBar } from "../../../store/actions/sideBar";
import { Link } from "react-bootstrap-icons";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const user = useSelector((state) => state.auth.user);

  const sideBarSectionStyles = {
    height: "100vh",
    width: "0",
    boxShadow: "0rem 0rem 0.2rem 0.2rem hsla(0, 0%, 0%, 0.15)",
    position: "fixed",
    zIndex: "1200",
    top: "0",
    left: "0",
    overflowX: "hidden",
    transition: "0.5s",
    backgroundColor: "green",
  };

  const closeSideBarHandler = async () => {
    await dispatch(closeSideBar());
  };

  return (
    <Fragment>
      <section id="sidebar-section" style={sideBarSectionStyles}>
        <div className={styles["sidebar"]}>
          <span
            className={styles["sidebar--close"]}
            onClick={() => closeSideBarHandler()}
          >
            <IconContext.Provider value={{ size: "20px" }}>
              <FaWindowClose />
            </IconContext.Provider>
          </span>

          <nav className={styles["sidebar__nav"]}>
            {/* <li className={styles["sidebar__nav__list"]}>
              <NavLink
                to="explore"
                className={styles["sidebar__nav__list__link"]}
                onClick={() => closeSideBarHandler()}
              >
                <span className={styles["sidebar__nav__list__link--icon"]}>
                  <IconContext.Provider
                    value={{
                      size: "20px",
                    }}
                  >
                    <MdExplore />
                  </IconContext.Provider>
                </span>
                <span className={styles["sidebar__nav__list__link--text"]}>
                  Explore
                </span>
              </NavLink>
            </li> */}

            <li className={styles["sidebar__nav__list"]}>
              <Link
                to="settings"
                className={styles["sidebar__nav__list__link"]}
                onClick={() => closeSideBarHandler()}
              >
                <span className={styles["sidebar__nav__list__link--icon"]}>
                  <IconContext.Provider value={{ size: "20px" }}>
                    <MdSettings />
                  </IconContext.Provider>
                </span>
                <span className={styles["sidebar__nav__list__link--text"]}>
                  Settings
                </span>
              </Link>
            </li>
            <li className={styles["sidebar__nav__list"]}>
              <Link to="login" className={styles["sidebar__nav__list__link"]}>
                <span className={styles["sidebar__nav__list__link--icon"]}>
                  <IconContext.Provider value={{ size: "20px" }}>
                    <RiLogoutCircleRLine />
                  </IconContext.Provider>
                </span>
                <span className={styles["sidebar__nav__list__link--text"]}>
                  Log out
                </span>
              </Link>
            </li>
          </nav>
          <footer className={styles["sidebar__footer"]}>
            <div className={styles["sidebar__footer__content"]}>
              <span>
                Jupiter Discussion forum &copy; {new Date().getFullYear()}
              </span>
            </div>
          </footer>
        </div>
      </section>
    </Fragment>
  );
};

export default SideBar;
