import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Typography } from "../../typography";

interface SlideProps {
  src: string;
  description: string;
}

const Slide: React.FC<SlideProps> = ({ src, description }) => (
  <div className="partnerCard shadow-partner partner-linear rounded-[2.5rem] border-2 bg-black px-6 py-16 text-center">
    <Image className="mx-auto mb-4 w-36" src={src} alt="partner" />
    <Typography Tag="p" variant="infoSubText">
      {description}
    </Typography>
  </div>
);

interface SliderProps {
  slides: { src: string; description: string }[];
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MySlider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Slide key={index} src={slide.src} description={slide.description} />
      ))}
    </Slider>
  );
};

export default MySlider;
