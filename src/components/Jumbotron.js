import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import Cyna from "../assets/Attempt3.png";
import Typical from 'react-typical';
import 'animate.css';
const Styles = styled.div`
  .jumbotron {
    background: url(${Cyna}) no-repeat;
    background-size: cover;
    background-position: center;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: 0;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1 className="animate__animated animate__fadeInDown">Welcome</h1>
        <p>
        <Typical
          wrapper="b"
          steps={['I\'m Pauldin Bebla, and I\'m a developer.', 1000]}
        /></p>
      </Container>
    </Jumbo>
  </Styles>
);
