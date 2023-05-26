import React, { useState } from "react";
import { Row, Col, Card } from "antd";
import { Container } from "react-bootstrap";
import './Workplace.styles.scss';
import Select from 'react-select';

const Workplace = () => {
  const [selectValue, setSelectValue] = useState({ value: "Gunidy", label: "Gunidy" });
  const handleSelect = (value) => {
    setSelectValue(value);
  }

  const locations = [
    { value: "Gunidy", label: "Gunidy" },
    { value: "Chrompet", label: "Chrompet" },
    { value: "Pallavaram", label: "Pallavaram" }
  ];

  return (
    <>
      <Container className="p-5">

        <p className="subhead" style={{ color: "#008080" }}>
          Coliving with like-minded people
        </p>
        <p className="head" style={{ color: "#008080" }}>
          Wow Hostel @Chennai
        </p>
        <Row>
          <Col>

            <p className="subhead pr-3" style={{ color: "#008080" }}>
              {" "}
              in{" "}
            </p>
          </Col>
          <Col>

            <Select
              className="minimal inline js_attribute js_workplace"
              options={locations}
              onChange={handleSelect}
              value={selectValue}
            />
          </Col>
        </Row>

        {selectValue && selectValue.value === "Chrompet" && (
          <div className="p-5 mx-auto">
            <Row>
              <Col lg={12} className="d-flex">
                <Card className="workplace-icon m-0">
                  <img src="/img/assets/workplace/icon-hcl.svg" alt="HCL Campus" />
                </Card>
                <Col className="p-3">
                  <h3 className="workplace-time">9 min</h3>
                  <p className="workplace-company">to HCL Technologies</p>
                </Col>
              </Col>
              <Col lg={12} className="d-flex">
                <Card className="workplace-icon m-0">
                  <img src="/img/assets/workplace/icon-velankani.svg" alt="velankani Campus" />
                </Card>
                <Col className="p-3">
                  <h3 className="workplace-time">10 min</h3>
                  <p className="workplace-company">to Airport</p>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="d-flex">
                <Card className="workplace-icon m-0">
                  <img src="/img/assets/workplace/icon-hp.svg" alt="HP Campus" />
                </Card>
                <Col className="p-3">
                  <h3 className="workplace-time">12 min</h3>
                  <p className="workplace-company">to HP Campus</p>
                </Col>
              </Col>
              <Col lg={12} className="d-flex">
                <Card className="workplace-icon m-0">
                  <img src="/img/assets/workplace/icon-wipro.svg" alt="Wipro Campus" />
                </Card>
                <Col className="p-3">
                  <h3 className="workplace-time">15 min</h3>
                  <p className="workplace-company">to Wipro Campus</p>
                </Col>
              </Col>
            </Row>
          </div>
        )}

        {selectValue && selectValue.value === "Gunidy" && (
          <div className="p-5 mx-auto">
            <Row>
              <Col lg={12} className="d-flex">
                <Card className="workplace-icon m-0">
                  <img src="/img/assets/workplace/icon-hcl.svg" alt="HCL Campus" />
                </Card>
                <Col className="p-3">
                  <h3 className="workplace-time">15 min</h3>
                  <p className="workplace-company">to HCL Technologies</p>
                </Col>
              </Col>
              <Col lg={12} className="d-flex">
                <Card className="workplace-icon m-0">
                  <img src="/img/assets/workplace/icon-velankani.svg" alt="velankani Campus" />
                </Card>
                <Col className="p-3">
                  <h3 className="workplace-time">18 min</h3>
                  <p className="workplace-company">to Velankani Campus</p>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="d-flex">
                <Card className="workplace-icon m-0">
                  <img src="/img/assets/workplace/icon-infosys.svg" alt="Infosys Campus" />
                </Card>
                <Col className="p-3">
                  <h3 className="workplace-time">22 min</h3>
                  <p className="workplace-company">to Infosys Campus</p>
                </Col>
              </Col>
              <Col lg={12} className="d-flex">
                <Card className="workplace-icon m-0">
                  <img src="/img/assets/workplace/icon-wipro.svg" alt="Infosys Campus" />
                </Card>
                <Col className="p-3">
                  <h3 className="workplace-time">30 min</h3>
                  <p className="workplace-company">to Wipro Campus</p>
                </Col>
              </Col>
            </Row>
          </div>
        )}

        {selectValue && selectValue.value !== "Chrompet" && selectValue.value !== "Gunidy" && (
          <div className="p-5 mx-auto">
            <Row>
              <Col lg={12} className="d-flex">
                <Card className="workplace-icon m-0">
                  <img src="/img/assets/workplace/icon-hcl.svg" alt="HCL Campus" />
                </Card>
                <Col className="p-3">
                  <h3 className="workplace-time">5 min</h3>
                  <p className="workplace-company">to HCL Technologies</p>
                </Col>
              </Col>
              <Col lg={12} className="d-flex">
                <Card className="workplace-icon m-0">
                  <img src="/img/assets/workplace/icon-hp.svg" alt="hp Campus" />
                </Card>
                <Col className="p-3">
                  <h3 className="workplace-time">3 min</h3>
                  <p className="workplace-company">to HP Campus</p>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="d-flex">
                <Card className="workplace-icon m-0">
                  <img src="/img/assets/workplace/icon-biocon.svg" alt="Biocon Campus" />
                </Card>
                <Col className="p-3">
                  <h3 className="workplace-time">20 min</h3>
                  <p className="workplace-company">to Biocon Campus</p>
                </Col>
              </Col>
              <Col lg={12} className="d-flex">
                <Card className="workplace-icon m-0">
                  <img src="/img/assets/workplace/icon-wipro.svg" alt="Wipro Campus" />
                </Card>
                <Col className="p-3">
                  <h3 className="workplace-time">16 min</h3>
                  <p className="workplace-company">to Wipro Campus</p>
                </Col>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </>
  );
};

export default Workplace;
