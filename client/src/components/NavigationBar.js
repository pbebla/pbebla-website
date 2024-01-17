import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #022e3f;
  }
  .navbar-brand {
    font-weight: 700;
    color: #ffffff;
    text-align: center;
  }
  .cssanimation, .cssanimation span {
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  .cssanimation span { display: inline-block }

  .leFlyInBottom span { animation-name: leFlyInBottom }
  @keyframes leFlyInBottom {
    0% {
        transform: translate(0px, 80px);
        opacity: 0
    }
    50% {
        transform: translate(10px, -50px);
        animation-timing-function: ease-in-out
    }
  }
  
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: #12345;
    }
    &:visited {
      color: #bbb;
    }
    &:active {
      color: #ffff00;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Pauldin Bebla</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {<Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          /*<Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>*/}
          <Nav.Item>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="http://localhost:5000/scoreboard">Scoreboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://github.com/pbebla" target="_blank">
              Github
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="https://www.linkedin.com/in/pauldin-bebla-63b87013a/"
              target="_blank"
            >
              Linkedin
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
