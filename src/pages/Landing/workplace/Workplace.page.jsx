import React from "react";
import { Row, Col, Card } from "antd";
import { Container } from "react-bootstrap";
import Carousel from "better-react-carousel";
import './Workplace.styles.scss';

const Workplace = () => {
  return (
    <>
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
                    <img src="/img/assets/workplace/hcl.png" />
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
                    <img src="/img/assets/workplace/bny.png" style={{marginTop:"8px"}} />
                  </Card>
                </Col>
                <Col className="p-3">
                  <h3 className="workplace-time">12 min</h3>
                  <p className="workplace-company">to BNY Mellon </p>
                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="p-5 mx-auto">
              <Row>
                <Col>
                  <Card className="workplace-icon m-0">
                    <img src="/img/assets/workplace/airport.jpg" />
                  </Card>
                </Col>
                <Col className="p-3">
                  <h3 className="workplace-time">10 min</h3>
                  <p className="workplace-company">to Airport</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="workplace-icon m-0">
                    <img src="/img/assets/workplace/wipro.png" style={{marginTop:"6px"}} />
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
                    <img src="/img/assets/workplace/Biocon.png" style={{marginTop:"10px"}}/>
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
                    <img src="/img/assets/workplace/hp.png" />
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
                    <img src="/img/assets/workplace/siemens.png" style={{marginTop:"8px"}} />
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
                    <img src="/img/assets/workplace/Tata.png"/>
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
    </>
  );
};
export default Workplace;
