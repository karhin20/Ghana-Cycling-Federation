import React, { Component } from "react";
import Slider from "react-slick";
import "./homeslider.css"
import { HomeSliderNews } from "../../../dummyData";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"


const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <MdNavigateNext className='icon' />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <GrFormPrevious className='icon' />
      </button>
    </div>
  )
}
export default function HomeSlider(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3200,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseonHover: true,
  
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  }

  return (
    <>
      <section className='homeslider'>
        <div className='content'>
          <Slider {...settings}>
            {HomeSliderNews.map((item) => (
              <div className='boxs'>
                <div className='box' key={item.id}>
                  <img src={item.cover} alt='cover' />
                  <div className='overlay'>
                  <Link to={`/SinglePage/${item.id}`}>
                    <h4>{item.title}</h4>
                      <button className="button">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}