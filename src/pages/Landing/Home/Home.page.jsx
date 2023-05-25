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
import Workplace from "../workplace/Workplace.page";
import Environment from "../Environment/Environment.page";
import Location from "../Location/Location.page";

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
                <Workplace />
            </section>
           
            <section className="p-5" style={{ backgroundColor: "#FFFFFF" }}>
                <Container>
                    <div>
                        <div className="small large">
                            <div className="head" style={{ color: "#008080" }}>The Environment at Guesture</div>
                            <div className="subhead" style={{ color: "#596e79" }}>we built cultural spaces into your environment.</div>
                        </div>

                        <div className="description columns small-offset-1 large-7 space-50-bottom scroll-reveal">
                            <div className="head" style={{ color: "#008080", fontSize: "1.5rem" }}>Urban living often forces people to abandon their passions & interests.</div>
                            <div className="subhead" style={{ color: "#596e79", fontSize: "1rem" }}>The environment at Guesture is designed and built to provide interaction spaces, spaces for yoga and meditation, studio and
                                amphitheater spaces for cultural activities, coworking spaces for working, sports areas for pursuing fitness and sports interests,
                                and an overall sustainable system which does not hurt nature or the environment.</div>
                        </div>
                    </div>
                    <div>
                        <Row className="small-offset-1" style={{ marginBottom: "30px" }}>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/logo.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Swimming Pool
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/yoga.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Yoga Hall
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className="small-offset-1" style={{ marginBottom: "30px" }}>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/gym.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Gymnasium
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/snooker.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Snooker Tables
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className="small-offset-1" style={{ marginBottom: "30px" }}>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/amphitheater.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Amphitheater
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/laundry.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Laundry
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className="small-offset-1" style={{ marginBottom: "30px" }}>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/tabletennis.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Table Tennis
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/meditation.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Meditation Hall
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className="small-offset-1" style={{ marginBottom: "30px" }}>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/tennis.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Tennis Courts
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/openairscreen.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Open Air Screen
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className="small-offset-1" style={{ marginBottom: "30px" }}>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/basketball.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Basket Ball Court
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/doctor.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Doctor on-call
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className="small-offset-1" style={{ marginBottom: "30px" }}>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/bowling.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Outdoor Bowling <br></br> Alley
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/shuttle.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Shuttle Bus Service
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className="small-offset-1" style={{ marginBottom: "30px" }}>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/football.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Mini Football Courts
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={8}>
                                <Row>
                                    <Col>
                                        <img src="/img/icon/canteen.svg" />
                                    </Col>
                                    <Col>
                                        <p className="feature-1 space-left">
                                            Cafeteria
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </section>
            <section className="p-5 environment">
                <Environment />
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
                                src="/img/assets/section/happywomen2.png"
                                className="booknow-img"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* pricing starts */}
            <section class="pricing-one">
                <Container >
                    <div class="tabs-content" >

                        <div className="tab" id="package-yearly">
                            <div className="content" style={{ marginTop: "80px" }}>

                                <div className="row clearfix">

                                    {/* <!-- Price Block -1--> */}
                                    <div className="price-block col-lg-4 col-md-6 col-sm-12" style={{ position: 'relative' }}>

                                        <div className="inner-box">
                                            {/* <!-- Title Box --> */}
                                            <div style={{ position: 'absolute', bottom: '85%' }}>
                                                <img
                                                    src="/img/pricing/1person.png"
                                                />
                                            </div>
                                            <div className="title-box">
                                                <h5 style={{ fontSize: 25, fontWeight: 600, color: "#F4C2C2", marginTop: "7rem" }}>A Dedicated room in a 2 or 3 Bedroom Flat.</h5>
                                                <div className="text">Preferred by Managers living alone in Bangalore, away from their family.</div>
                                            </div>
                                            <div className="config space-min">
                                                <div className="lower-box grid grid-cols-2" style={{ margin: 0, color: "#F4C2C2" }}>
                                                    <div className="strong opacity-50 inline" style={{ fontSize: 20 }}>Balcony</div>
                                                    <select className="minimal inline js_attribute js_balcony" data-name="balcony">
                                                        <option value="None">None</option>
                                                        <option value="Attached">Attached</option>
                                                    </select>
                                                </div>

                                                <div className="lower-box grid grid-cols-2" style={{ margin: 0, color: "#F4C2C2" }}>
                                                    <div className="strong opacity-50 inline" style={{ fontSize: 20 }}>Bathroom</div>
                                                    <select className="minimal inline js_attribute js_bathroom" data-name="bathroom">
                                                        <option value="Attached">Attached</option>
                                                        <option value="Detached">Detached</option>
                                                    </select>
                                                </div>

                                                <div className="lower-box grid grid-cols-2" style={{ margin: 0, color: "#F4C2C2" }}>
                                                    <div className="strong opacity-50 inline" style={{ fontSize: 20 }}>Duration</div>
                                                    <select className="minimal inline js_attribute js_duration" data-name="duration">
                                                        <option value="11 Months">11 Months</option>
                                                        <option value="6 Months">6 Months</option>
                                                        <option value="3 Months">3 Months</option>
                                                        <option value="2 Months">2 Months</option>
                                                        <option value="3 Day Trial">3 Day Trial</option>
                                                    </select>
                                                </div>


                                                <div className="lower-box grid grid-cols-2" style={{ margin: 0, color: "#F4C2C2" }}>
                                                    <div className="strong opacity-50 inline" style={{ fontSize: 20 }}>@</div>
                                                    <select className="minimal inline js_attribute js_balcony" data-name="balcony">
                                                        <option value="Alta Vista - BLR">Alta Vista - BLR</option>
                                                        <option value="Dwellington - BLR">Dwellington - BLR</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div style={{ textAlign: "center", marginTop: "4px" }}>
                                                <div style={{ fontSize: 25, fontWeight: "900", color: "#F4C2C2" }}>
                                                    ₹17,800*
                                                </div>
                                                <div style={{ color: "#F4C2C2" }}>
                                                    PER PERSON, *PAID MONTHLY
                                                </div>
                                            </div>

                                            <div style={{ textAlign: "center", marginTop: "2px" }}>
                                                <button
                                                    type="ghost"
                                                    className="mt-4 p-2 purchase-Button hover:#F08EDB text-black w-50 mb-2 rounded-md h-14 hover:bg-pink-600/[.8] ease-in duration-200"
                                                    onClick={() => {
                                                        navigate("/sign-up");
                                                    }}
                                                >
                                                    Package Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Price Block-2 --> */}
                                    <div className="price-block  col-lg-4 col-md-6 col-sm-12">

                                        <div className="inner-box">
                                            <div style={{ position: 'absolute', bottom: '85%', paddingTop: '5px' }}>
                                                <img
                                                    src="/img/pricing/2person.png"
                                                />
                                            </div>
                                            {/* <!-- Title Box --> */}
                                            <div className="title-box">
                                                <h5 style={{ fontSize: 25, fontWeight: 600, color: "#F4C2C2", marginTop: "7rem" }}>Twin Sharing room in a 2 or 3 Bedroom Flat.</h5>
                                                <div className="text">Preferred by corporate professionals living alone in Bangalore.</div>
                                            </div>
                                            <div className="config space-min">
                                                <div className="lower-box grid grid-cols-2" style={{ margin: 0, color: "#F4C2C2" }}>
                                                    <div className="strong opacity-50 inline" style={{ fontSize: 20 }}>Balcony</div>
                                                    <select className="minimal inline js_attribute js_balcony" data-name="balcony">
                                                        <option value="None">None</option>
                                                        <option value="Attached">Attached</option>
                                                    </select>
                                                </div>

                                                <div className="lower-box grid grid-cols-2" style={{ margin: 0, color: "#F4C2C2" }}>
                                                    <div className="strong opacity-50 inline" style={{ fontSize: 20 }}>Bathroom</div>
                                                    <select className="minimal inline js_attribute js_bathroom" data-name="bathroom">
                                                        <option value="Attached">Attached</option>
                                                        <option value="Detached">Detached</option>
                                                    </select>
                                                </div>

                                                <div className="lower-box grid grid-cols-2" style={{ margin: 0, color: "#F4C2C2" }}>
                                                    <div className="strong opacity-50 inline" style={{ fontSize: 20 }}>Duration</div>
                                                    <select className="minimal inline js_attribute js_duration" data-name="duration">
                                                        <option value="11 Months">11 Months</option>
                                                        <option value="6 Months">6 Months</option>
                                                        <option value="3 Months">3 Months</option>
                                                        <option value="2 Months">2 Months</option>
                                                        <option value="3 Day Trial">3 Day Trial</option>
                                                    </select>
                                                </div>


                                                <div className="lower-box grid grid-cols-2" style={{ margin: 0, color: "#F4C2C2" }}>
                                                    <div className="strong opacity-50 inline" style={{ fontSize: 20 }}>@</div>
                                                    <select className="minimal inline js_attribute js_balcony" data-name="balcony">
                                                        <option value="Alta Vista - BLR">Alta Vista - BLR</option>
                                                        <option value="Dwellington - BLR">Dwellington - BLR</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div style={{ textAlign: "center", marginTop: "4px" }}>
                                                <div style={{ fontSize: 25, fontWeight: "900", color: "#F4C2C2" }}>
                                                    ₹10,200*
                                                </div>
                                                <div style={{ color: "#F4C2C2" }}>
                                                    PER PERSON, *PAID MONTHLY
                                                </div>
                                            </div>

                                            <div style={{ textAlign: "center", marginTop: "2px" }}>
                                                <button
                                                    type="ghost"
                                                    className="mt-4 p-2 purchase-Button hover:#F08EDB text-black w-50 mb-2 rounded-md h-14 hover:bg-pink-600/[.8] ease-in duration-200"
                                                    onClick={() => {
                                                        navigate("/sign-up");
                                                    }}
                                                >
                                                    Package Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <-- Price Block -3 --> */}
                                    <div className="price-block  col-lg-4 col-md-6 col-sm-12">

                                        <div className="inner-box">
                                            <div style={{ position: 'absolute', bottom: '85%', marginTop: '5px' }}>
                                                <img
                                                    src="/img/pricing/3person.png"
                                                />
                                            </div>
                                            {/* <!-- Title Box --> */}
                                            <div className="title-box" >
                                                <h5 style={{ fontSize: 25, fontWeight: 600, color: "#F4C2C2", marginTop: "7rem" }}>Triple Sharing room in a 2 or 3 Bedroom Flat.</h5>
                                                <div className="text">Preferred by Students, Interns and Trainees living alone in Bangalore.</div>
                                            </div>
                                            <div className="config space-min">
                                                <div className="lower-box grid grid-cols-2" style={{ margin: 0, color: "#F4C2C2" }}>
                                                    <div className="strong opacity-50 inline" style={{ fontSize: 20 }}>Balcony</div>
                                                    <select className="minimal inline js_attribute js_balcony" data-name="balcony">
                                                        <option value="None">None</option>
                                                        <option value="Attached">Attached</option>
                                                    </select>
                                                </div>

                                                <div className="lower-box grid grid-cols-2" style={{ margin: 0, color: "#F4C2C2" }}>
                                                    <div className="strong opacity-50 inline" style={{ fontSize: 20 }}>Bathroom</div>
                                                    <select className="minimal inline js_attribute js_bathroom" data-name="bathroom">
                                                        <option value="Attached">Attached</option>
                                                        <option value="Detached">Detached</option>
                                                    </select>
                                                </div>

                                                <div className="lower-box grid grid-cols-2" style={{ margin: 0, color: "#F4C2C2" }}>
                                                    <div className="strong opacity-50 inline" style={{ fontSize: 20 }}>Duration</div>
                                                    <select className="minimal inline js_attribute js_duration" data-name="duration">
                                                        <option value="11 Months">11 Months</option>
                                                        <option value="6 Months">6 Months</option>
                                                        <option value="3 Months">3 Months</option>
                                                        <option value="2 Months">2 Months</option>
                                                        <option value="3 Day Trial">3 Day Trial</option>
                                                    </select>
                                                </div>


                                                <div className="lower-box grid grid-cols-2" style={{ margin: 0, color: "#F4C2C2" }}>
                                                    <div className="strong opacity-50 inline" style={{ fontSize: 20 }}>@</div>
                                                    <select className="minimal inline js_attribute js_balcony" data-name="balcony">
                                                        <option value="Alta Vista - BLR">Alta Vista - BLR</option>
                                                        <option value="Dwellington - BLR">Dwellington - BLR</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div style={{ textAlign: "center", marginTop: "4px" }}>
                                                <div style={{ fontSize: 25, fontWeight: "900", color: "#F4C2C2" }}>
                                                    ₹8,500*
                                                </div>
                                                <div style={{ color: "#F4C2C2" }}>
                                                    PER PERSON, *PAID MONTHLY
                                                </div>
                                            </div>

                                            <div style={{ textAlign: "center", marginTop: "2px" }}>
                                                <button
                                                    type="ghost"
                                                    className="mt-4 p-2 purchase-Button hover:#F08EDB text-black w-50 mb-2 rounded-md h-14 hover:bg-pink-600/[.8] ease-in duration-200"
                                                    onClick={() => {
                                                        navigate("/sign-up");
                                                    }}
                                                >
                                                    Package Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </Container>
            </section>
            <section className="p-5 location-bg">
                <Location />
            </section>
        </LandingLayout>
    );
};
export default LandHome;