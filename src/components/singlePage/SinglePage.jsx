import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { HomeSliderNews, Articles, popular} from "../../dummyData"
import Side from "../home/sideContent/side/Side"
import "../home/mainContent/homes/style.css"
import "./singlepage.css"
import "../home/sideContent/side/side.css"
import SinglePageSlider from "./slider/SinglePageSlider"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const allItems = [...HomeSliderNews, ...Articles, ...popular]
    const SelectedItem = allItems.find((item) => item.id === parseInt(id))
    window.scrollTo(0, 0)
    if (SelectedItem) {
      setItem(SelectedItem)
    }
  }, [id])

  return (
    <>
      {item ? (
        <main>
          <div className='container'>
            <section className='mainContent details'>
              <h1 className='title'>{item.title}</h1>

              <div className='author'>
        
    
                <label>{item.time}</label>
              </div>

              <div className='social' style={{fontSize: '11px'}}>
                <div className='socBox'>
                  <i className='fab fa-facebook-f'></i>
                  <span>SHARE</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-twitter'></i>
                  <span>TWITTER</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-pinterest'></i>
                </div>
                <div className='socBox'>
                  <i className='fa fa-envelope'></i>
                </div>
              </div>

              <div className='desctop'>
                {item.desc.map((val, index) => {
                  return (
                    <>
                    <div key={index}>
                      <p>{val.para1}</p>
                      <p>{val.para2}</p>
                    </div> 
                    </>
                  )
                })}
              </div>
              <div className="coverImage">
                <img src={item.cover} alt='' />
              </div> 
              {item.desc.map((val, index) => (
                <div key={index}>
                  <p>{val.para3}</p>
                </div>
              ))}

              <div className='descbot'>
                {item.details.map((data, index) => {
                  return (
                    <>
                    <div key={index}>
                      <h1>{data.title}</h1>
                      <p>{data.para1}</p>
                    </div>
                    </>
                  )
                })}
              </div>

              <div className='quote'>
                <i className='fa fa-quote-left'></i>
                {item.details.map((data, index) => (
                  <div key={index}>
                    <p>{data.quote}</p>
                  </div>
                ))}
              </div>

              <div className='desctop'>
                {item.details.map((data, index) => {
                  return (
                    <div key={index}>
                      <p>{data.para2}</p>
                      <p>{data.para3}</p>
                    </div>
                    
                  )
                })}
              </div>
            </section>
            <section className='sideContent'>
              <Side />
            </section>
          </div>
          <SinglePageSlider />
        </main>
      ) : (
        <h1>loading...</h1>
      )}
    </>
  )
}

export default SinglePage
