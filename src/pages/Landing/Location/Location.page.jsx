import React from "react";
import { Row, Col, Card } from "antd";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./Location.styles.scss";

const Location = () => {
  const navigate = useNavigate();
  const navigateToSignin = () => {
    navigate("/landing/sign-in");
  };
  return (
    <>
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
                <p className="subhead1">52, east street<br></br> chrompet <br></br> Chennai</p>
                <ul
                  className="workplace-text pb-3"
                  style={{ color: "#F4C2C2" }}
                >
                  {/* <li>52, east street</li>
                  <li>chrompet</li>
                  <li>Chennai</li> */}
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
                <p className="subhead1">52, east street<br></br> chrompet <br></br> Chennai</p>
                <ul
                  className="workplace-text pb-3"
                  style={{ color: "#F4C2C2" }}
                >
                  {/* <li>52, east street</li>
                  <li>chrompet</li>
                  <li>Chennai</li> */}
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
                <p className="subhead1">52, east street<br></br> chrompet <br></br> Chennai</p>
                <ul
                  className="workplace-text pb-3"
                  style={{ color: "#F4C2C2" }}
                >
                  {/* <li>52, east street</li>
                  <li>chrompet</li>
                  <li>Chennai</li> */}
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
          <p className="workplace-time" style={{ color: "#FFFFFF" }}>
            Call us on{" "}
            <span className="workplace-time" style={{ color: "#EEEA89" }}>
              +91-847-4825422
            </span>
          </p>
        </div>
      </Container>
    </>
  );
};
export default Location;
