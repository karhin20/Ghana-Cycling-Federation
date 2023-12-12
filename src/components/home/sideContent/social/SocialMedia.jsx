import React from "react"

const SocialMedia = () => {
  return (
    <>
      <section className='social' style={{fontSize: '13px'}}>
        <div className='socBox'>
          <i className='fab fa-facebook-f'></i>
          <span>Ghana Cycling Federation</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-twitter'></i>
          <span>Official Ghana Cycling</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-instagram'></i>
          <span>Ghana Cycling Federation</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-youtube'></i>
          <span>Ghana Cycling Federation TV</span>
        </div>
      </section>
    </>
  )
}

export default SocialMedia
