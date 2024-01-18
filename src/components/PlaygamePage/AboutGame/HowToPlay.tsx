import React, { useRef } from "react";
import "./HowToPlay.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HowToPlay = () => {
  const ref = useRef(null);
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goTo = (page: number) => {
    if (ref) {
      ref.current.slickGoTo(page);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-[500px] h-[550px] slickSet dotsCustom gap-[15px]">
      <Slider ref={ref} {...settings}>
        <img
          width="500px"
          height="500px"
          src="/img/PlayGamePage/howtoplay-1.svg"
          alt="howtoplay-1"
          className="hover:cursor-pointer"
          onClick={() => goTo(1)}
        />
        <img
          width="500px"
          height="500px"
          src="/img/PlayGamePage/howtoplay-2.svg"
          alt="howtoplay-2"
          className="hover:cursor-pointer"
          onClick={() => goTo(2)}
        />
        <img
          width="500px"
          height="500px"
          src="/img/PlayGamePage/howtoplay-3.svg"
          alt="howtoplay-3"
          className="hover:cursor-pointer"
          onClick={() => goTo(3)}
        />
        <img
          width="500px"
          height="500px"
          src="/img/PlayGamePage/howtoplay-4.svg"
          alt="howtoplay-4"
          className="hover:cursor-pointer"
          onClick={() => goTo(0)}
        />
      </Slider>
      <div className="text-center text-[22px] leading-[35px] font-normal text-white">
        HOW TO PLAY?
      </div>
    </div>
  );
};

export default HowToPlay;
