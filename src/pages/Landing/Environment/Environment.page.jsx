import React from "react";
import { Row, Col, Card } from "antd";
import { Container } from "react-bootstrap";
import Carousel from "better-react-carousel";
import "./Environment.styles.scss";

const Environment = () => {
  return (
    <> 
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
          <img src="/img/assets/environment/room.jpg" className="img-border" />
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
    </>
  );
};
export default Environment;
