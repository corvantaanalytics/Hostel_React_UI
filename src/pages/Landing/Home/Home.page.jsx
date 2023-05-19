import React, { useState } from "react";
import Text from "components/Text/Text.component";
import Section from "components/Section/Section.component";
import "./LandHome.styles.scss";
import { Card, Row, Col, Divider, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { LandingLayout } from "layout/Landing.layout";
import { Container, Button, CarouselItem } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
import Carousel from "better-react-carousel";
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
      <section className="p-4" style={{ backgroundColor: "#FFFFFF" }}>
        <Container className="p-5">
          <h4 className="pb-3">Location</h4>
          <p className="subhead" style={{ color: "#008080" }}>
            Coliving with like-minded people
          </p>
          <p className="head" style={{ color: "#008080" }}>
            Wow Hostel @Chrompet
          </p>
          <Row>
            <Col>
              <p className="subhead pr-3" style={{ color: "#008080" }}>
                {" "}
                in{" "}
              </p>
            </Col>
            <Col>
              <select
                class="minimal inline js_attribute js_workplace"
                data-name="workplace"
              >
                <option value="None">CHN - Pallavaram</option>
                <option value="Attached">CHN - Chrompet</option>
                <option value="Attached">CHN - Gunidy</option>
              </select>
            </Col>
          </Row>
          <Carousel cols={2} rows={1} gap={10} loop>
            <Carousel.Item>
              <div className="p-5 mx-auto">
                <Row>
                  <Col>
                    <Card className="workplace-icon m-0">
                      <img src="/img/assets/workplace/icon-hcl.svg" />
                    </Card>
                  </Col>
                  <Col className="p-3">
                    <h3 className="workplace-time">9 min</h3>
                    <p className="workplace-company">to HCL Technologies</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card className="workplace-icon m-0">
                      <img src="/img/assets/workplace/icon-infosys.svg" />
                    </Card>
                  </Col>
                  <Col className="p-3">
                    <h3 className="workplace-time">12 min</h3>
                    <p className="workplace-company">to Infosys Campus</p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="p-5 mx-auto">
                <Row>
                  <Col>
                    <Card className="workplace-icon m-0">
                      <img src="/img/assets/workplace/icon-velankani.svg" />
                    </Card>
                  </Col>
                  <Col className="p-3">
                    <h3 className="workplace-time">10 min</h3>
                    <p className="workplace-company">to Velankani Campus</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card className="workplace-icon m-0">
                      <img src="/img/assets/workplace/icon-wipro.svg" />
                    </Card>
                  </Col>
                  <Col className="p-3">
                    <h3 className="workplace-time">13 min</h3>
                    <p className="workplace-company">to WIPRO</p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="p-5 mx-auto">
                <Row>
                  <Col>
                    <Card className="workplace-icon m-0">
                      <img src="/img/assets/workplace/icon-biocon.svg" />
                    </Card>
                  </Col>
                  <Col className="p-3">
                    <h3 className="workplace-time">15 min</h3>
                    <p className="workplace-company">to Biocon</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card className="workplace-icon m-0">
                      <img src="/img/assets/workplace/icon-hp.svg" />
                    </Card>
                  </Col>
                  <Col className="p-3">
                    <h3 className="workplace-time">9 min</h3>
                    <p className="workplace-company">to Hewlett Packard</p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="p-5 mx-auto">
                <Row>
                  <Col>
                    <Card className="workplace-icon m-0">
                      <img src="/img/assets/workplace/icon-siemens.svg" />
                    </Card>
                  </Col>
                  <Col className="p-3">
                    <h3 className="workplace-time">15 min</h3>
                    <p className="workplace-company">to Siemens</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card className="workplace-icon m-0">
                      <img src="/img/assets/workplace/icon-tata.svg" />
                    </Card>
                  </Col>
                  <Col className="p-3">
                    <h3 className="workplace-time">17 min</h3>
                    <p className="workplace-company">to Tata BP Solar</p>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      {/* <section className="p-5" style={{ backgroundColor: "white" }}>
        <Row className="px-5">
          <Col lg={8} className="py-3 booking-section">
            <Container>
              <div className="block">
                <img
                  src="/img/Pricing/1person.png"
                  style={{
                    width: "400px",
                    height: "283px",
                    marginBottom: "8px",
                  }}
                />
              </div>
              <Card
                className="module-border-wrap px-5 py-10"
                id="scale-up-1"
                hoverable
                style={{
                  width: 400,
                  // padding: "15px",
                  height: "100%",
                  boxShadow: "1px 4px 8px rgba(0,0,0,0.1)",
                  background: "#0C0404",
                }}
                cover={
                  <div>
                    <p
                      style={{
                        fontSize: 25,
                        fontWeight: 600,
                        color: "#F4C2C2",
                      }}
                    >
                      A Dedicated room in a 2 or 3 Bedroom Flat.
                    </p>
                    <p style={{ margin: 0, color: "#F4C2C2", marginTop: "3" }}>
                      {" "}
                      Preferred by Managers living alone in Bangalore, away from
                      their family.
                    </p>
                  </div>
                }
              >
                <div class="config space-min mt-3">
                  <div class="flex" style={{ margin: 0, color: "#F4C2C2" }}>
                    <div
                      class="strong opacity-50 inline"
                      style={{ fontSize: 25 }}
                    >
                      Balcony
                    </div>
                    <select
                      class="minimal inline js_attribute js_balcony"
                      data-name="balcony"
                    >
                      <option value="None">None</option>
                      <option value="Attached">Attached</option>
                    </select>
                  </div>

                  <div class="flex" style={{ margin: 0, color: "#F4C2C2" }}>
                    <div
                      class="strong opacity-50 inline"
                      style={{ fontSize: 25 }}
                    >
                      Bathroom
                    </div>
                    <select
                      class="minimal inline js_attribute js_bathroom"
                      data-name="bathroom"
                    >
                      <option value="Attached">Attached</option>
                      <option value="Detached">Detached</option>
                    </select>
                  </div>

                  <div class="flex" style={{ margin: 0, color: "#F4C2C2" }}>
                    <div
                      class="strong opacity-50 inline"
                      style={{ fontSize: 25 }}
                    >
                      Duration
                    </div>
                    <select
                      class="minimal inline js_attribute js_duration"
                      data-name="duration"
                    >
                      <option value="11 Months">11 Months</option>
                      <option value="6 Months">6 Months</option>
                      <option value="3 Months">3 Months</option>
                      <option value="2 Months">2 Months</option>
                      <option value="3 Day Trial">3 Day Trial</option>
                    </select>
                  </div>

                  <div class="flex" style={{ margin: 0, color: "#F4C2C2" }}>
                    <div
                      class="strong opacity-50 inline"
                      style={{ fontSize: 25 }}
                    >
                      @
                    </div>
                    <select
                      class="minimal inline js_attribute js_balcony"
                      data-name="balcony"
                    >
                      <option value="Alta Vista - BLR">Alta Vista - BLR</option>
                      <option value="Dwellington - BLR">
                        Dwellington - BLR
                      </option>
                    </select>
                  </div>
                </div>

                <div style={{ textAlign: "center", marginTop: "2px" }}>
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: "900",
                      color: "#F4C2C2",
                    }}
                  >
                    ₹17,800*
                  </div>
                  <div style={{ color: "#F4C2C2" }}>
                    PER PERSON, *PAID MONTHLY
                  </div>
                </div>

                <div style={{ textAlign: "center", marginTop: "2px" }}>
                  <button
                    type="ghost"
                    className="mt-4 p-2 purchase-Button hover:#F08EDB text-black w-full mb-2 rounded-md h-14 hover:bg-pink-600/[.8] ease-in duration-200"
                    onClick={() => {
                      navigate("/sign-up");
                    }}
                  >
                    Package Details
                  </button>
                </div>
              </Card>
            </Container>
          </Col>

          <Col lg={8} className="py-3 booking-section">
            <Container>
              <div className="block">
                <img src="/img/Pricing/2person.png" />
              </div>
              <Card
                className="module-border-wrap px-5 py-10"
                id="scale-up-1"
                hoverable
                style={{
                  width: 400,
                  // padding: "15px",
                  height: "100%",
                  boxShadow: "1px 4px 8px rgba(0,0,0,0.1)",
                  background: "#0C0404",
                }}
                cover={
                  <div>
                    <p
                      style={{
                        fontSize: 25,
                        fontWeight: 600,
                        color: "#F4C2C2",
                      }}
                    >
                      Twin Sharing room in a 2 or 3 Bedroom Flat.
                    </p>
                    <p style={{ margin: 0, color: "#F4C2C2", marginTop: "3" }}>
                      {" "}
                      Preferred by corporate professionals living alone in
                      Bangalore.
                    </p>
                  </div>
                }
              >
                <div class="config space-min mt-3">
                  <div class="flex" style={{ margin: 0, color: "#F4C2C2" }}>
                    <div
                      class="strong opacity-50 inline"
                      style={{ fontSize: 25 }}
                    >
                      Balcony
                    </div>
                    <select
                      class="minimal inline js_attribute js_balcony"
                      data-name="balcony"
                    >
                      <option value="None">None</option>
                      <option value="Attached">Attached</option>
                    </select>
                  </div>

                  <div class="flex" style={{ margin: 0, color: "#F4C2C2" }}>
                    <div
                      class="strong opacity-50 inline"
                      style={{ fontSize: 25 }}
                    >
                      Bathroom
                    </div>
                    <select
                      class="minimal inline js_attribute js_bathroom"
                      data-name="bathroom"
                    >
                      <option value="Attached">Attached</option>
                      <option value="Detached">Detached</option>
                    </select>
                  </div>

                  <div class="flex" style={{ margin: 0, color: "#F4C2C2" }}>
                    <div
                      class="strong opacity-50 inline"
                      style={{ fontSize: 25 }}
                    >
                      Duration
                    </div>
                    <select
                      class="minimal inline js_attribute js_duration"
                      data-name="duration"
                    >
                      <option value="11 Months">11 Months</option>
                      <option value="6 Months">6 Months</option>
                      <option value="3 Months">3 Months</option>
                      <option value="2 Months">2 Months</option>
                      <option value="3 Day Trial">3 Day Trial</option>
                    </select>
                  </div>

                  <div class="flex" style={{ margin: 0, color: "#F4C2C2" }}>
                    <div
                      class="strong opacity-50 inline"
                      style={{ fontSize: 25 }}
                    >
                      @
                    </div>
                    <select
                      class="minimal inline js_attribute js_balcony"
                      data-name="balcony"
                    >
                      <option value="Alta Vista - BLR">Alta Vista - BLR</option>
                      <option value="Dwellington - BLR">
                        Dwellington - BLR
                      </option>
                    </select>
                  </div>
                </div>

                <div style={{ textAlign: "center", marginTop: "2px" }}>
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: "900",
                      color: "#F4C2C2",
                    }}
                  >
                    ₹10,200*
                  </div>
                  <div style={{ color: "#F4C2C2" }}>
                    PER PERSON, *PAID MONTHLY
                  </div>
                </div>

                <div style={{ textAlign: "center", marginTop: "2px" }}>
                  <button
                    type="ghost"
                    className="mt-4 p-2 purchase-Button hover:#F08EDB text-black w-full mb-2 rounded-md h-14 hover:bg-pink-600/[.8] ease-in duration-200"
                    onClick={() => {
                      navigate("/sign-up");
                    }}
                  >
                    Package Details
                  </button>
                </div>
              </Card>
            </Container>
          </Col>

          <Col lg={8} className="py-3 booking-section">
            <Container>
              <div className="block">
                <img
                  src="/img/Pricing/3person.png"
                  style={{
                    width: "400px",
                    height: "283px",
                    marginBottom: "8px",
                  }}
                />
              </div>
              <Card
                className="module-border-wrap px-5 py-10"
                id="scale-up-1"
                hoverable
                style={{
                  width: 400,
                  // padding: "15px",
                  height: "100%",
                  boxShadow: "1px 4px 8px rgba(0,0,0,0.1)",
                  background: "#0C0404",
                }}
                cover={
                  <div>
                    <p
                      style={{
                        fontSize: 25,
                        fontWeight: 600,
                        color: "#F4C2C2",
                      }}
                    >
                      Triple Sharing room in a 2 or 3 Bedroom Flat.
                    </p>
                    <p style={{ margin: 0, color: "#F4C2C2", marginTop: "3" }}>
                      Preferred by Students, Interns and Trainees living alone
                      in Bangalore.
                    </p>
                  </div>
                }
              >
                <div class="config space-min mt-3">
                  <div class="flex" style={{ margin: 0, color: "#F4C2C2" }}>
                    <div
                      class="strong opacity-50 inline"
                      style={{ fontSize: 25 }}
                    >
                      Balcony
                    </div>
                    <select
                      class="minimal inline js_attribute js_balcony"
                      data-name="balcony"
                    >
                      <option value="None">None</option>
                      <option value="Attached">Attached</option>
                    </select>
                  </div>

                  <div class="flex" style={{ margin: 0, color: "#F4C2C2" }}>
                    <div
                      class="strong opacity-50 inline"
                      style={{ fontSize: 25 }}
                    >
                      Bathroom
                    </div>
                    <select
                      class="minimal inline js_attribute js_bathroom"
                      data-name="bathroom"
                    >
                      <option value="Attached">Attached</option>
                      <option value="Detached">Detached</option>
                    </select>
                  </div>

                  <div class="flex" style={{ margin: 0, color: "#F4C2C2" }}>
                    <div
                      class="strong opacity-50 inline"
                      style={{ fontSize: 25 }}
                    >
                      Duration
                    </div>
                    <select
                      class="minimal inline js_attribute js_duration"
                      data-name="duration"
                    >
                      <option value="11 Months">11 Months</option>
                      <option value="6 Months">6 Months</option>
                      <option value="3 Months">3 Months</option>
                      <option value="2 Months">2 Months</option>
                      <option value="3 Day Trial">3 Day Trial</option>
                    </select>
                  </div>

                  <div class="flex" style={{ margin: 0, color: "#F4C2C2" }}>
                    <div
                      class="strong opacity-50 inline"
                      style={{ fontSize: 25 }}
                    >
                      @
                    </div>
                    <select
                      class="minimal inline js_attribute js_balcony"
                      data-name="balcony"
                    >
                      <option value="Alta Vista - BLR">Alta Vista - BLR</option>
                      <option value="Dwellington - BLR">
                        Dwellington - BLR
                      </option>
                    </select>
                  </div>
                </div>

                <div style={{ textAlign: "center", marginTop: "2px" }}>
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: "900",
                      color: "#F4C2C2",
                    }}
                  >
                    ₹8,500*
                  </div>
                  <div style={{ color: "#F4C2C2" }}>
                    PER PERSON, *PAID MONTHLY
                  </div>
                </div>

                <div style={{ textAlign: "center", marginTop: "2px" }}>
                  <button
                    type="ghost"
                    className="mt-4 p-2 purchase-Button hover:#F08EDB text-black w-full mb-2 rounded-md h-14 hover:bg-pink-600/[.8] ease-in duration-200"
                    onClick={() => {
                      navigate("/sign-up");
                    }}
                  >
                    Package Details
                  </button>
                </div>
              </Card>
            </Container>
          </Col>
        </Row>
      </section> */}
      <section className="p-5 environment">
        <Container>
          <div className="p-3">
            <p className="title-card" style={{ color: "#008080" }}>
              The Environment at WoW
            </p>
            <p className="subhead" style={{ color: "#596e79" }}>
              we built cultural spaces into your environment.
            </p>
          </div>
        </Container>
        <Carousel cols={3} rows={1} gap={10} loop>
          <Carousel.Item>
            <img
              src="/img/assets/environment/Swimming_pool.jpg"
              className="img-border"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/img/assets/environment/building.jpg"
              className="img-border"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/img/assets/environment/room.jpg"
              className="img-border"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/img/assets/environment/openarea.jpg"
              className="img-border"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/img/assets/environment/Dinnerarea.jpg"
              className="img-border"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/img/assets/environment/entertainment.jpg"
              className="img-border"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/img/assets/environment/gym.jpg" className="img-border" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/img/assets/environment/playarea.jpg"
              className="img-border"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="/img/assets/environment/kitchen.jpg"
              className="img-border"
            />
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="p-5" style={{ backgroundColor: "#FFFFFF" }}>
        <Container className="px-5">
          <h4 className="pb-3">CHECK-IN</h4>
          <p className="head" style={{ color: "#008080" }}>
            10 Minute Check-in
          </p>
          <p className="subhead" style={{ color: "#596e79" }}>
            Just carry the{" "}
            <span className="workplace-time" style={{ color: "#008080" }}>
              3 mandatory KYC documents
            </span>{" "}
            for a quick check-in.
          </p>
          <Button
            type="ghost"
            className="learnButton px-4 py-2 mt-5 hover:#F08EDB text-white rounded-md hover:bg-pink-600/[.8] ease-in duration-200"
            style={{ border: "none" }}
          >
            Read the full KYC Policy
          </Button>
        </Container>
      </section>
      <section className="booknow">
        <Container>
          <Row>
            <Col lg={18} className="book-text">
              <p className="subhead mt-5" style={{ color: "#008080" }}>
                Peace of mind for you and your parents
              </p>
              <p
                className="booknow-title text-shadow"
                style={{ color: "#EEEA89" }}
              >
                Women's only block
              </p>
              <div>
                <Button
                  type="ghost"
                  className="learnButton px-4 py-2 mt-5 hover:#F08EDB text-white rounded-md hover:bg-pink-600/[.8] ease-in duration-200"
                  style={{ border: "none" }}
                  onClick={navigateToSignin}
                >
                  Book Now
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <img
                src="/img/assets/section/happymom.png"
                className="booknow-img"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="p-5 location-bg">
        <Container className="px-5">
          <p className="head center pb-5">Location</p>
          <Row>
            <Col lg={8}>
              <Row>
                <Col>
                  <p className="pr-3 subhead">@</p>
                </Col>
                <Col>
                  <p className="subhead">Chrompet</p>
                  <ul className="workplace-text pb-3" style={{ color: "#F4C2C2" }}>
                    <li>52, east street</li>
                    <li>chrompet</li>
                    <li>Chennai</li>
                    <li>
                      <Button
                        type="ghost"
                        className="learnButton px-4 py-2 mt-3 hover:#F08EDB text-white rounded-md hover:bg-pink-600/[.8] ease-in duration-200"
                        style={{ border: "none" }}
                        onClick={navigateToSignin}
                      >
                        Book Now
                      </Button>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col lg={8}>
              <Row>
                <Col>
                  <p className="pr-3 subhead">@</p>
                </Col>
                <Col>
                  <p className="subhead">Chrompet</p>
                  <ul className="workplace-text pb-3" style={{ color: "#F4C2C2" }}>
                    <li>52, east street</li>
                    <li>chrompet</li>
                    <li>Chennai</li>
                    <li>
                      <Button
                        type="ghost"
                        className="learnButton px-4 py-2 mt-3 hover:#F08EDB text-white rounded-md hover:bg-pink-600/[.8] ease-in duration-200"
                        style={{ border: "none" }}
                        onClick={navigateToSignin}
                      >
                        Book Now
                      </Button>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col lg={8}>
              <Row>
                <Col>
                  <p className="pr-3 subhead">@</p>
                </Col>
                <Col>
                  <p className="subhead">Chrompet</p>
                  <ul className="workplace-text pb-3" style={{ color: "#F4C2C2" }}>
                    <li>52, east street</li>
                    <li>chrompet</li>
                    <li>Chennai</li>
                    <li>
                      <Button
                        type="ghost"
                        className="learnButton px-4 py-2 mt-3 hover:#F08EDB text-white rounded-md hover:bg-pink-600/[.8] ease-in duration-200"
                        style={{ border: "none" }}
                        onClick={navigateToSignin}
                      >
                        Book Now
                      </Button>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="center pt-5">
            <p className="workplace-time" style={{color: '#FFFFFF'}}>Call us on <span className="workplace-time" style={{color: '#EEEA89'}}>+91-847-4825422</span></p>
          </div>
        </Container>
      </section>
    </LandingLayout>
  );
};
export default LandHome;
