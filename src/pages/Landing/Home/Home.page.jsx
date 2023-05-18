import React, { useState } from "react";
import Text from "components/Text/Text.component";
import Section from "components/Section/Section.component";
import "./LandHome.styles.scss";
import { Card, Row, Col, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { LandingLayout } from "layout/Landing.layout";
import { Container, Button, CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { SelectOutlined } from "@ant-design/icons";

const LandHome = () => {
  const navigate = useNavigate();
  const navigateToSignin = () => {
    navigate("/landing/sign-in");
  };
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <LandingLayout>
      <section className="section-bg">
        <Container>
          <div className="center">
            <img src="/img/pinkletter.png" className="mx-auto p-5" />
          </div>
          <Row>
            <Col lg={16}>
              <div className="">
                <h2 className="head px-3">Just bring your bag.</h2>
                <p className="subhead px-3">
                  Say no to landlords, brokers and PGs.
                </p>
              </div>
              <Row className="p-5">
                <Col lg={12} className="py-3">
                  <Row>
                    <Col>
                      <img src="/img/assets/icon/icon-clock.png" />
                    </Col>
                    <Col>
                      <p className="feature px-2">
                        10 min <br></br> check-in
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col lg={12} className="py-3">
                  <Row>
                    <Col>
                      <img src="/img/assets/icon/icon-women.png" />
                    </Col>
                    <Col>
                      <p className="feature px-2">
                        Women's Only<br></br>Block
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="px-5 pb-5">
                <Col lg={12} className="py-3">
                  <Row>
                    <Col>
                      <img src="/img/assets/icon/icon-clock.png" />
                    </Col>
                    <Col>
                      <p className="feature px-2">
                        10 min <br></br> check-in
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col lg={12} className="py-3">
                  <Row>
                    <Col>
                      <img src="/img/assets/icon/icon-women.png" />
                    </Col>
                    <Col>
                      <p className="feature px-2">
                        Women's Only<br></br>Block
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="px-5">
                <Col lg={12} className="py-3">
                  <Row>
                    <Col>
                      <img src="/img/assets/icon/icon-clock.png" />
                    </Col>
                    <Col>
                      <p className="feature px-2">
                        10 min <br></br> check-in
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col lg={12} className="py-3">
                  <Row>
                    <Col>
                      <img src="/img/assets/icon/icon-women.png" />
                    </Col>
                    <Col>
                      <p className="feature px-2">
                        Women's Only<br></br>Block
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg={8} className="pb-5">
              <img src="/img/women.webp" className="img-border" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="px-5 py-4" style={{ backgroundColor: "#FFFF8F" }}>
        <Container>
          <Row>
            <Col style={{ marginTop: "-100px" }}>
              <img src="/img/assets/rent-badge.png" className="rentimg" />
            </Col>
            <Col>
              <p className="title">Furnished Flat in Electronic City</p>
            </Col>
            <Col className="px-5">
              <Button
                type="ghost"
                className="learnButton px-4 py-2 mt-2 hover:#F08EDB text-white rounded-md hover:bg-pink-600/[.8] ease-in duration-200"
                style={{ border: "none" }}
              >
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="p-4" style={{ backgroundColor: "#dcdcdc" }}>
        <Container className="p-5">
          <h4 className="pb-3">Location</h4>
          <p className="subhead">Coliving with like-minded people</p>
          <p className="head">Guesture @Alta Vista</p>
          {/* <Carousel autoplay>
            <div style={contentStyle}>
              
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel> */}
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <CarouselItem>
              <div className="p-5 mx-auto">
                <img src="/img/assets/icon/icon-women.png" />
              </div>
              
              <Carousel.Caption>
                <h3 className="subhead">First Slider</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
              <div className="p-5 mx-auto">
                <img src="/img/assets/icon/icon-clock.png" />
              </div>
              <Carousel.Caption>
                <h3 className="subhead">second Slider</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
              <div className="p-5 mx-auto">
                <img src="/img/assets/icon/icon-women.png" />
              </div>
              <Carousel.Caption>
                <h3 className="subhead">third Slider</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </CarouselItem>
          </Carousel>
        </Container>
      </section>
      <section className="p-5" style={{ backgroundColor: "white" }}>
          <Container>
          <Card
          className="module-border-wrap"
          id="scale-up-1"
          hoverable
          style={{
            width: 400,
            padding: "8px",
            height: 500,
            boxShadow: "1px 4px 8px rgba(0,0,0,0.1)",
          }}
          cover={
            <div style={{ paddingBottom: 24 }}>
              <p style={{ fontSize: 32, margin: 0, fontWeight: 600 }}>
                Golden Package
              </p>
              <p style={{ fontSize: 32, margin: 0, fontWeight: 600 }}>$200</p>
            </div>
          }
        >
          <div style={{ textAlign: "left" }}>
          <p style={{ marginBottom: 32 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <h3>
            <b>Respondents</b>
          </h3>
          <p style={{ marginBottom: 4 }}>
            Provide Email/ Mobile for the respondents
          </p>
          <p style={{ marginBottom: 4 }}>Live feed of responses</p>
          <p style={{ marginBottom: 4 }}>Max 24 hours</p>
        </div>
        </Card>
          </Container>
        
      </section>
    </LandingLayout>
  );
};
export default LandHome;
