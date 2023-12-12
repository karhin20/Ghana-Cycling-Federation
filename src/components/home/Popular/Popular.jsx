import React, { useState } from "react"
import { popular } from "../../../dummyData"
import "./Popular.css"
import Card from "./Card"

const Popular = () => {
  const [items, setIems] = useState(popular)

  return (
    <>
      <section className='hero'>
        <div className='herocontainer'>
          {items.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Popular
