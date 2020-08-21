import React from 'react'
import Slider from "react-slick";

import slideOne from '../../resources/images/slide_one.jpg'
import slideTwo from '../../resources/images/slide_two.jpg'
import slideThree from '../../resources/images/slide_three.jpg'

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true
    };

    return (
        <div
            className="carousel_wrapper"
        >
            <Slider {...settings}>
                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${slideOne})`,
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${slideTwo})`,
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carousel_image"
                        style={{
                            background: `url(${slideThree})`,
                        }}
                    ></div>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel
