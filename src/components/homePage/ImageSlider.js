import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

  return (
    <Carousel {...settings}>
        <Slide>
            <img src='/images/slider-badging.jpg' alt=''/>
        </Slide>

        <Slide>
            <img src='/images/slider-scales.jpg' alt=''/>
        </Slide>

        <Slide>
            <img src='/images/slider-badag.jpg' alt=''/>
        </Slide>

        <Slide>
            <img src='/images/slider-scale.jpg' alt=''/>
        </Slide>
        
    </Carousel>
  )
}

export default ImageSlider;

const Carousel = styled(Slider)`
    margin-top: 20px;

    button {
        z-index: -1000;
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    .slick-list {
        overflow: visible;
    }

    .slick-active button::before {
        color: white !important;
    }

`
const Slide = styled.div`

    cursor: pointer;


    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -19px, 
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid transparent;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, .8)
        }
    }

`