import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { createGlobalStyle } from "styled-components";
import Slider from "react-slick";
import slider1 from "../images/slider-badag.jpg";
import slider2 from "../images/slider-badging.jpg";
import slider3 from "../images/slider-scale.jpg";
import slider4 from "../images/slider-scales.jpg";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white !important;
  }

  .slick-prev {
    left: 5px;
  }

  .slick-next {
    right: 5px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: auto;
      display: block;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <GlobalStyle />
      <Carousel {...settings}>
        <Wrap>
          <a href="#slider1">
            <img src={slider1} alt="slider1" />
          </a>
        </Wrap>
        <Wrap>
          <a href="#slider2">
            <img src={slider2} alt="slider2" />
          </a>
        </Wrap>
        <Wrap>
          <a href="#slider3">
            <img src={slider3} alt="slider3" />
          </a>
        </Wrap>
        <Wrap>
          <a href="#slider4">
            <img src={slider4} alt="slider4" />
          </a>
        </Wrap>
      </Carousel>
    </>
  );
};

export default ImgSlider;
