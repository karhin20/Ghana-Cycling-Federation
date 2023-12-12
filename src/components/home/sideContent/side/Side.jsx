import React from "react"
import "./side.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { Events, gallery } from "../../../../dummyData"
import Tpost from "../Tpost/Tpost"
import SocialMedia from "../social/SocialMedia"

//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <section className='banner'>
        <img src='./images/sidebar-banner-new.jpg' alt='' />
      </section>
      <Heading title='Connect With Us' />
      <SocialMedia />

      <section className='upcomingEvents'>
        <Heading title='Upcoming Events' />
        {/*<div className='items'>{allCat}</div>*/}
        {Events.map((val) => {
          return (
            <div className='category1'>
              <span className="title">{val.title}</span>
              <span> {val.date}</span>
            </div>
          )
        })}
      </section>


      <Heading title='Subscribe' />

      <section className='subscribe'>
        <h1 className='title'>Subscribe to our Articles</h1>
        <form action=''>
          <input type='email' placeholder='Email Address...' />
          <button>
            <i className='fa fa-paper-plane'></i> SUBMIT
          </button>
        </form>
      </section>

      <Tpost />

    </>
  )
}

export default Side
