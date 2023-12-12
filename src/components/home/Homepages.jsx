import React from "react"
import Popular from "./Popular/Popular"
import Homes from "./mainContent/homes/Home"
import SponsorsLogo from "./SponsorsSlider/SponsorsLogo"
import HomeSlider from "./HomeSlider/HomeSlider"

const Homepages = () => {
    const sponsorsLogoInstance = new SponsorsLogo();
   
  return (
    <>
      <HomeSlider />
      <Popular />
      <Homes />
      {sponsorsLogoInstance.render()}
      
    </>
  )
}

export default Homepages
