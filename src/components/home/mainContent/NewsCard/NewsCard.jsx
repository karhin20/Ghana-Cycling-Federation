import React from "react"
import { Articles } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"
import { Link } from "react-router-dom"

import './NewsCard.css';



const NewsCard = ({ title, description, imageUrl, source, publishedAt }) => {
  return (
  <>
    <Heading title='READ ARTICLES'/>
    <section className="articlesContainer">
      <div className="articles">
        {Articles.map((val) => {
          return (
            <div key={val.id} className="news-card">
              <div className="card-content">
                <img src={val.cover} alt={val.title} className="card-image" />
                <h2 className="card-title">{val.title}</h2>
                <p className="card-description">{val.desc.para1}</p>
               
                <div className ='buttonDate'>
                  <Link to={`/SinglePage/${val.id}`}>
                    <button className='button'>
                      Read More
                    </button>
                  </Link>
                  <span className="card-published-at">{val.date}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
</>
)
};

export default NewsCard
