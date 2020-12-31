import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./AboutGroup.css";

class AboutGroup extends Component {
  render() {
    return (
      <Container fluid className="mt-5 Container__c">
        <Row className="justify-content-center align-items-center">
          {" "}
          <h3
            className=" mb-5 "
            style={{ fontSize: "2.8rem", fontWeight: "700" }}
          >
            ABOUT
          </h3>
        </Row>
        <Row className="row__Slide justify-content-center pt-4 ">
          <Col className="col__slide " lg="auto">
            <h3 className="h3__slide1 ">Only the best is good enough</h3>
            <h2 className="h2__slide1 ">
              As children shape their own worlds with LEGO bricks, we play our
              part in having <strong>a positive impact on the world</strong>{" "}
              they live in today and will inherit in the future.
            </h2>
            <a href="!#" className="a__slide1 mt-4">
              Learn about the LEGO Group
              <i class="fas fa-chevron-right pl-2" />
            </a>
          </Col>
        </Row>
        <Row className="row__Slide2 justify-content-center pt-4 ">
          <Col className="col__slide " lg="auto">
            <h3 className="h3__slide2 " style={{ color: "white" }}>
              Inspire and Develop the Builders of Tomorrow
            </h3>
            <h2 className="h2__slide1" style={{ color: "white" }}>
              LEGO play starts to release a child’s potential from the moment
              they pick up their first brick.
            </h2>
            <a href="!#" className="a__slide1 mt-4" style={{ color: "white" }}>
              Learn about the LEGO Brand
              <i
                class="fas fa-chevron-right pl-2"
                style={{
                  color: "#333",
                  fontSize: ".752rem",
                  fontWeight: "300 !important",
                }}
              />
            </a>
          </Col>
        </Row>
        <Row className="mid__slide">
          <Col
            className="mid__slide__left pl-5 pr-2 mt-5 justify-content-start"
            lg={4}
            mid={4}
            sm={12}
          >
            <h3 className="mid__slide__left__header">The LEGO History</h3>
            <p className="mid__slide__left__p">
              Founded in 1932 by Ole Kirk Kristiansen, and based on the iconic
              LEGO brick, it is one of the world’s leading manufacturers of play
              materials.
            </p>
            <div className="mid__slide__left__links">
              <a href="!#" className="a__center  ml-0 mb-4">
                LEGO history timeline overview
                <i
                  class="fas fa-chevron-right pl-2"
                  style={{
                    color: "#333",
                    fontSize: ".752rem",
                    fontWeight: "300 !important",
                  }}
                />
              </a>
              <a href="!#" className="a__center  ml-0 mr-3 ">
                LEGO history deep dive
                <i
                  class="fas fa-chevron-right pl-2"
                  style={{
                    color: "#333",
                    fontSize: ".752rem",
                    fontWeight: "300 !important",
                  }}
                />
              </a>
            </div>
          </Col>
          <Col
            className="mid__slide__right"
            lg={8}
            mid={8}
            sm={12}
            xs={12}
          ></Col>
        </Row>
        <Row>
          <Col
            className="map__header justify-content-center align-content-center"
            lg={12}
            mid={12}
            sm={12}
            xs={12}
          >
            <h3 className="h3__mid">18,800 people in 40+ countries</h3>
            <a href="!#" className=" a__slide2   align-items-center ">
              Contact Us
              <i
                class="fas fa-chevron-right pl-2"
                style={{
                  color: "#333",
                  fontSize: ".752rem",
                  fontWeight: "300 !important",
                }}
              />
            </a>
          </Col>
          <Col className="Last__slide" lg={12} mid={12} sm={12} xs={12}>
            <div className="map__slide"></div>
          </Col>
          <Col
            className="map__header justify-content-center "
            lg={12}
            mid={12}
            sm={12}
            xs={12}
          >
            <h2 className="Last__h2">
              Supporting a more creative and resilient society
            </h2>
          </Col>
        </Row>

        <Row className="justify-content-between p-3 mb-4">
          <Col className="last__link">
            <a href="!#" className="last__link__item">
              <img
                className="last__link__item__img mb-5"
                src="https://www.lego.com/cdn/cs/aboutus/assets/blt7ccb3ee2a1092c77/logo-lego-education.jpg?disable=upscale&width=480&quality=50"
                alt="education"
              />
            </a>

            <a href="!#" className="link__item    align-items-center ">
              LEGO Education website
              <i
                class="fas fa-chevron-right pl-2"
                style={{
                  color: "#333",
                  fontSize: ".752rem",
                  fontWeight: "300 !important",
                }}
              />
            </a>
          </Col>
          <Col className="last__link">
            <a href="!#" className="last__link__item">
              <img
                className="last__link__item__img mb-5"
                src="https://www.lego.com/cdn/cs/aboutus/assets/blt6a61058dcede0743/logo-lego-foundation.jpg?disable=upscale&width=480&quality=50"
                alt="education"
              />
            </a>

            <a href="!#" className="link__item    align-items-center ">
              LEGO Foundation website
              <i
                class="fas fa-chevron-right pl-2"
                style={{
                  color: "#333",
                  fontSize: ".752rem",
                  fontWeight: "300 !important",
                }}
              />
            </a>
          </Col>
          <Col className="last__link">
            <a href="!#" className="last__link__item">
              <img
                className="last__link__item__img mb-5"
                src="https://www.lego.com/cdn/cs/aboutus/assets/blt39a30c18df3b0931/logo-lego-house.jpg?disable=upscale&width=480&quality=50"
                alt="education"
              />
            </a>

            <a href="!#" className="link__item    align-items-center ">
              LEGO House website
              <i
                class="fas fa-chevron-right pl-2"
                style={{
                  color: "#333",
                  fontSize: ".752rem",
                  fontWeight: "300 !important",
                }}
              />
            </a>
          </Col>
          <Col className="last__link">
            <a href="!#" className="last__link__item">
              <img
                className="last__link__item__img mb-5"
                src="https://www.lego.com/cdn/cs/aboutus/assets/bltbbb58736caa9d33f/logo-Ventures.jpg?disable=upscale&width=480&quality=50"
                alt="education"
              />
            </a>

            <a href="!#" className="link__item    align-items-center ">
              LEGO Ventures website
              <i
                class="fas fa-chevron-right pl-2"
                style={{
                  color: "#333",
                  fontSize: ".752rem",
                  fontWeight: "300 !important",
                }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutGroup;
