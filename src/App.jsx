import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HouseFill, FileTextFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Header from "./components/layouts/header/Header";
import styles from "./App.scss";
// import Sidebar from "./components/layouts/sidebar/SideBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import TrialSideBar from "./components/layouts/trialSideBar/TrialSideBar";

function App() {
  return (
    <Fragment>
      <div className={styles["component-container"]}>
        <BrowserRouter>
          <div className={styles["header-component"]}>
            <Header />
            {/* <Sidebar /> */}
          </div>

          <div className={styles["routes-container"]}>
            <Routes>
              <Route
                path="/"
                element={
                  <div>
                    <Home />
                  </div>
                }
              />
              <Route
                path="about"
                element={
                  <div>
                    <About />
                  </div>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
