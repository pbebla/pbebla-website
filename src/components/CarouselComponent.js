import React from 'react';
import {Carousel, Container} from 'react-bootstrap';
import VVVVVV from '../assets/VVVVVV.jpg';
import Pokemon from "../assets/Pokemon.jpg";
import MiniNinjas from "../assets/Mini Ninjas.jpg";
import Zelda from "../assets/Zelda.jpg";
import Assassin from "../assets/Assassin's Creed Brotherhood.jpg";
import styled from "styled-components";

const Styles = styled.div`
    .carousel {
        background-color: black;
    }
`;

export const CarouselComponent = () => (
    <Styles>
    <Container>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block mx-auto w-50"
                    src={VVVVVV}
                    alt=""
                    fluid
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto w-50"
                    src={Pokemon}
                    alt="Second"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto w-50"
                    src={MiniNinjas}
                    alt="Third"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto w-50"
                    src={Zelda}
                    alt="Fourth"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto w-50"
                    src={Assassin}
                    alt="Fifth"
                />
            </Carousel.Item>
        </Carousel>
    </Container>
    </Styles>
)