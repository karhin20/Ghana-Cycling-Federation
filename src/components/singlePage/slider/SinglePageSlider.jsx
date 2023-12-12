import React from "react"
import Slider from "react-slick"
import { Articles } from "../../../dummyData"
import "./style.css"
import { Link } from "react-router-dom"


const SinglePageSlider = () => {
 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <>
    <h3>Read more articles</h3>
      <section className='singlePopular'>
        <div className='content'>
          
            <Slider {...settings}>
              {Articles.map((val) => {
                return (
                  
                  <div className='items'>
                    <Link to={`/SinglePage/${val.id}`}>
                      <div className='box'> 
                        <div className='images'>
                          <img src={val.cover} alt='' />
                        </div>
                        <div className='text'>
                          <h1 className='title'>{val.title}</h1>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </Slider>
          
        </div>
      </section>
    </>
  )
}

export default SinglePageSlider
