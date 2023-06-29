import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ elements }: { elements: JSX.Element[] }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full slick-center dots-up">
      <Slider {...settings}>{elements.map((e) => e)}</Slider>
    </div>
  );
};

export default Carousel;
