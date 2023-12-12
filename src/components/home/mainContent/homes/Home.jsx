import React from "react"
import Side from "../../sideContent/side/Side"
import NewsCard from "../NewsCard/NewsCard"
import "./style.css"

const Homes = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
           <NewsCard /> 
          </section>
          <section className='sideContent'>
            <Side />
          </section>
        </div>
      </main>
    </>
  )
}

export default Homes
