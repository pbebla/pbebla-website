import React from 'react';
import {Jumbotron as Jumbo, Container, Carousel} from 'react-bootstrap';
import styled from 'styled-components';
import VVVVVV from '../assets/VVVVVV.jpg';
import Pokemon from "../assets/Pokemon.jpg";
import MiniNinjas from "../assets/Mini Ninjas.jpg";
import Zelda from "../assets/Zelda.jpg";
import Assassin from "../assets/Assassin's Creed Brotherhood.jpg";
import Cyna from "../assets/Attempt3.png";

const Styles=styled.div`
    .jumbotron {
        background: url(${Cyna}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
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
                <h1>Welcome</h1>
                <p>VVVVV</p>
            </Container>
        </Jumbo>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={VVVVVV}
                    alt="First"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Pokemon}
                    alt="Second"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={MiniNinjas}
                    alt="Third"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Zelda}
                    alt="Fourth"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Assassin}
                    alt="Fifth"
                />
            </Carousel.Item>
        </Carousel>

    </Styles>
)