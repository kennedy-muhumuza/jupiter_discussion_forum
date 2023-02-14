import React, { Fragment } from "react";
import ImageSlider, { Slide } from "react-auto-image-slider";
import styles from "./Home.module.scss";
import DiscImage from "../../assets/lower-size-img.jpg";
import testimonialImage from "../../assets/testimonial-img-1.jpg";
import opportunities from "../../assets/opportunities.jpg";
import exploration from "../../assets/exploration.jpg";
import infoShare from "../../assets/info-sharing-compressed2.jpg";
import networking from "../../assets/networking2.jpg";
import inspireOthers from "../../assets/inspiration.jpg";
import Footer from "../../components/layouts/footer/Footer";
import { IconContext } from "react-icons";
import { RxDoubleArrowRight } from "react-icons/rx";
import { SiGooglescholar } from "react-icons/si";
import { BsFillArrowDownLeftCircleFill } from "react-icons/bs";
import { RiMoneyPoundBoxFill } from "react-icons/ri";
import { BsFillCloudSunFill } from "react-icons/bs";
import { GiFallingRocks } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { AiFillFileWord } from "react-icons/ai";
import { MdTour } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { MdAssignment } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiInspiration } from "react-icons/gi";
import { SiHandshake } from "react-icons/si";

const Home = () => {
  return (
    <Fragment>
      <div className={styles["home-page-container"]}>
        <div className={styles["title-disc-img-container"]}>
          <div className={styles["title-div"]}>
            <h1 className={styles["heading-one"]}>
              An online community for Geologists
            </h1>
            <span className={styles["border-line"]}></span>
            <p className={styles["paragraph-one"]}>
              Where we connect and share useful information. It is an academic
              forum with real-time charts, quizzes, blogs and various relevant
              information on ongoing opportunities in the Oil and gas industry
              as well communication for constant connectivity.{" "}
            </p>
            <button className={styles["join-us-btn"]}>Join us</button>
          </div>
          <div>
            <img
              src={DiscImage}
              alt="image showing some of the group members"
              className={styles["disc-img"]}
            />
          </div>
        </div>
        <section className={styles["testimonial-section"]}>
          <div className={styles["testimonial-grid-3-cols"]}>
            <img
              src={testimonialImage}
              alt="some group members out for a trip"
            />
            <div className={styles["testimonial-box"]}>
              <h2>
                "We just can't imagine our academic journey without this family"
              </h2>
              <blockquote className={styles["testimonial-text"]}>
                We don't regret ending up where we are and neither do we wish to
                ever part from Jupiter. The beautiful moments we've spent
                together, the useful information we've shared and especially the
                academic support we've gained from one another will for ever be
                cherished.
              </blockquote>
              <p className={styles["testimonial-author"]}>
                &mdash; Timothy and Wycliffe
              </p>
            </div>
          </div>
        </section>
        <div className={styles["key-benefits-container"]}>
          <h2>Key benefits you won't want to miss</h2>
        </div>

        {/* <section className={styles["card-container"]}>
          <div class={styles["grid-3-cols"]}>
            <figure class={styles["chair"]}>
              <img src={opportunities} alt="Big men from TotalEnergies" />
              <div class={styles["chair-box"]}>
                <h3>Opportunities</h3>
                <ul class={styles["chair-details"]}>
                  <li>
                    <span>Job opportunities</span>
                  </li>
                  <li>
                    <span>Internship opportunities</span>
                  </li>
                  <li>
                    <span>Scholarship opportunities</span>
                  </li>
                  <li>
                    <span>Exploration opportunities</span>
                  </li>
                </ul>

                <div class={styles["chair-price"]}>
                  <strong>$250</strong>
                  <button class={styles["btn btn-small"]}>Read more</button>
                </div>
              </div>
            </figure>

            <figure class={styles["chair"]}>
              <img src={exploration} alt="Doru Winnie" />
              <div class={styles["chair-box"]}>
                <h3>Exploration</h3>
                <ul class={styles["chair-details"]}>
                  <li>
                    <span>Geological trips</span>
                  </li>
                  <li>
                    <span>Important research programs</span>
                  </li>
                  <li>
                    <span>Report writing</span>
                  </li>
                  <li>
                    <span>Local tour programs</span>
                  </li>
                </ul>

                <div class={styles["chair-price"]}>
                  <strong>$525</strong>
                  <button class={styles["btn btn-small"]}>Read more</button>
                </div>
              </div>
            </figure>

            <figure class={styles["chair"]}>
              <img src={infoShare} alt="Emmanuella" />
              <div class={styles["chair-box"]}>
                <h3>Information Sharing</h3>
                <ul class={styles["chair-details"]}>
                  <li>
                    <span>Software skills like ArcGIS and petrel</span>
                  </li>
                  <li>
                    <span>Project designs</span>
                  </li>
                  <li>
                    <span>Assignment hustles</span>
                  </li>
                  <li>
                    <span>Important functions</span>
                  </li>
                </ul>

                <div class={styles["chair-price"]}>
                  <strong>$1450</strong>
                  <button class={styles["btn btn-small"]}>Read more</button>
                </div>
              </div>
            </figure>

            <figure class={styles["chair"]}>
              <img
                src={inspireOthers}
                alt="Emmanuella inspiring the younger generation"
              />
              <div class={styles["chair-box"]}>
                <h3>Inspiring Others</h3>
                <ul class={styles["chair-details"]}>
                  <li>
                    <span>
                      Inspiring the younger generation For example the person in
                      the image above is doing exactly that.
                    </span>
                  </li>
                </ul>

                <div class={styles["chair-price"]}>
                  <strong>$1450</strong>
                  <button class={styles["btn btn-small"]}>Read more</button>
                </div>
              </div>
            </figure>

            <figure class={styles["chair"]}>
              <img src={networking} alt="Networking with others" />
              <div class={styles["chair-box"]}>
                <h3>Networking</h3>
                <ul class={styles["chair-details"]}>
                  <li>
                    <span>
                      Meeting Important people in the Industry either physically
                      or even online like on this platform depending on how much
                      blessed this becomes.{" "}
                    </span>
                  </li>
                </ul>

                <div class={styles["chair-price"]}>
                  <strong>$1450</strong>
                  <button class={styles["btn btn-small"]}>Read more</button>
                </div>
              </div>
            </figure>
          </div>
        </section> */}

        <section className={styles["card-container"]}>
          <div className={styles["grid-3-cols"]}>
            <ImageSlider effectDelay={500} autoPlayDelay={1500}>
              <Slide>
                <figure className={styles["chair"]}>
                  <img
                    src={opportunities}
                    alt="Big men from TotalEnergies"
                    className={styles["opportunities"]}
                  />
                  <div className={styles["chair-box"]}>
                    <div className={styles["chair-box-child"]}>
                      <h3>Opportunities</h3>
                      <ul className={styles["chair-details"]}>
                        <li>
                          <span>
                            {" "}
                            <RiMoneyPoundBoxFill /> &nbsp; Job opportunities
                          </span>
                        </li>
                        <li>
                          <span>
                            {" "}
                            <BsFillArrowDownLeftCircleFill />
                            &nbsp; Internship opportunities
                          </span>
                        </li>
                        <li>
                          <span>
                            <SiGooglescholar /> &nbsp; Scholarship opportunities
                          </span>
                        </li>
                        <li>
                          <span>
                            <BsFillCloudSunFill /> &nbsp; Exploration
                            opportunities
                          </span>
                        </li>

                        <div className={styles["chair-price"]}>
                          <a href="#" className={styles["link-small"]}>
                            <div>
                              <p>Read more</p>
                            </div>
                            <div className={styles["read-more-container"]}>
                              <IconContext.Provider
                                value={{
                                  color: "var(--color-primary)",
                                  className: "global-class-name",
                                }}
                              >
                                <div className={styles["read-more-icon"]}>
                                  <RxDoubleArrowRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                          </a>
                        </div>
                      </ul>
                    </div>
                  </div>
                </figure>
              </Slide>
              <Slide>
                <figure className={styles["chair"]}>
                  <img
                    src={exploration}
                    alt="Doru Winnie"
                    className={styles["exploration"]}
                  />
                  <div className={styles["chair-box"]}>
                    <h3>Exploration</h3>
                    <ul className={styles["chair-details"]}>
                      <li>
                        <span>
                          <GiFallingRocks /> &nbsp; Geological trips
                        </span>
                      </li>
                      <li>
                        <span>
                          <FaBook /> &nbsp; Important research programs
                        </span>
                      </li>
                      <li>
                        <span>
                          <AiFillFileWord /> &nbsp; Report writing
                        </span>
                      </li>
                      <li>
                        <span>
                          <MdTour /> &nbsp; Local tour programs
                        </span>
                      </li>
                      <div className={styles["chair-price"]}>
                        <a href="#" className={styles["link-small"]}>
                          <div>
                            <p>Read more</p>
                          </div>
                          <div className={styles["read-more-container"]}>
                            <IconContext.Provider
                              value={{
                                color: "var(--color-primary)",
                                className: "global-class-name",
                              }}
                            >
                              <div className={styles["read-more-icon"]}>
                                <RxDoubleArrowRight />
                              </div>
                            </IconContext.Provider>
                          </div>
                        </a>
                      </div>
                    </ul>
                  </div>
                </figure>
              </Slide>
              <Slide>
                <figure className={styles["chair"]}>
                  <img
                    src={infoShare}
                    alt="Emmanuella"
                    className={styles["info-share"]}
                  />
                  <div className={styles["chair-box"]}>
                    <h3>Information Sharing</h3>
                    <ul className={styles["chair-details"]}>
                      <li>
                        <span>
                          <RiComputerFill /> &nbsp; Software skills like ArcGIS
                          and petrel
                        </span>
                      </li>
                      <li>
                        <span>
                          <AiFillProject /> &nbsp; Project designs
                        </span>
                      </li>
                      <li>
                        <span>
                          <MdAssignment /> &nbsp; Assignment hustles
                        </span>
                      </li>
                      <li>
                        <span>
                          <BsFillPeopleFill /> &nbsp; Important functions
                        </span>
                      </li>
                      <div className={styles["chair-price"]}>
                        <a href="#" className={styles["link-small"]}>
                          <div>
                            <p>Read more</p>
                          </div>
                          <div className={styles["read-more-container"]}>
                            <IconContext.Provider
                              value={{
                                color: "var(--color-primary)",
                                className: "global-class-name",
                              }}
                            >
                              <div className={styles["read-more-icon"]}>
                                <RxDoubleArrowRight />
                              </div>
                            </IconContext.Provider>
                          </div>
                        </a>
                      </div>
                    </ul>
                  </div>
                </figure>
              </Slide>
              <Slide>
                <figure className={styles["chair"]}>
                  <img
                    src={inspireOthers}
                    alt="Emmanuella inspiring the younger generation"
                    className={styles["inspire-others"]}
                  />
                  <div className={styles["chair-box"]}>
                    <h3>Inspiring Others</h3>
                    <ul className={styles["chair-details"]}>
                      <li>
                        <span className={styles["inspiring-others-container"]}>
                          <div>
                            <GiInspiration />
                          </div>
                          <p>
                            Inspiring the younger generation For example the
                            person in the image above is doing exactly that.
                          </p>
                        </span>
                      </li>
                      <div className={styles["chair-price"]}>
                        <a href="#" className={styles["link-small"]}>
                          <div>
                            <p>&nbsp; &nbsp; &nbsp; &nbsp; Read more</p>
                          </div>
                          <div className={styles["read-more-container"]}>
                            <IconContext.Provider
                              value={{
                                color: "var(--color-primary)",
                                className: "global-class-name",
                              }}
                            >
                              <div className={styles["read-more-icon"]}>
                                <RxDoubleArrowRight />
                              </div>
                            </IconContext.Provider>
                          </div>
                        </a>
                      </div>
                    </ul>
                  </div>
                </figure>
              </Slide>
              <Slide>
                <figure className={styles["chair"]}>
                  <img
                    src={networking}
                    alt="Networking with others"
                    className={styles["networking"]}
                  />
                  <div className={styles["chair-box"]}>
                    <h3>Networking</h3>
                    <ul className={styles["chair-details"]}>
                      <li>
                        <span className={styles["networking-container"]}>
                          <div>
                            <SiHandshake />
                          </div>
                          <p>
                            Meeting Important people in the Industry either
                            physically or even online like on this platform
                            depending on how much blessed this becomes.{" "}
                          </p>
                        </span>
                      </li>
                      <div className={styles["chair-price"]}>
                        <a href="#" className={styles["link-small"]}>
                          <div>
                            <p>&nbsp; &nbsp; &nbsp; &nbsp; Read more</p>
                          </div>
                          <div className={styles["read-more-container"]}>
                            <IconContext.Provider
                              value={{
                                color: "var(--color-primary)",
                                className: "global-class-name",
                              }}
                            >
                              <div className={styles["read-more-icon"]}>
                                <RxDoubleArrowRight />
                              </div>
                            </IconContext.Provider>
                          </div>
                        </a>
                      </div>
                    </ul>
                  </div>
                </figure>
              </Slide>
            </ImageSlider>
          </div>
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
