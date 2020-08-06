


import React, { Component } from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import OwlCarousel from 'react-owl-carousel';
import MainBanner from '../../img/suscription/MainBanner.png'
import { isMobile, isAndroid, isIOS } from 'mobile-device-detect';
 
const options = {
  items: 1,
  nav: false,
  rewind: true,
  autoplay: true,
  loop: true,
  dots:false,
  nav:false
};
class MainSlider extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  
  

render() {


  return(
    <>


      <section className="suscription-section-1 ">
         
           
            
        
      <OwlCarousel className="owl-theme"  {...options} > 
                                               
                                         {(isMobile === true)?(
                                             <>
                                                 <img src={MainBanner} className="imgfluid" alt=""/>
                                              
                                                </>
                                            ):(
                                              <>
                                                <img src={MainBanner} className="imgfluid" alt=""/>
                                               
                                              
                                               </>
                                          )}
                                          </OwlCarousel>
                                          
                                         
                                  

            
     
          </section>
      

         
      </>     
)
}
}



export default MainSlider;