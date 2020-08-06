import React, { Component } from "react"
import { Link, StaticQuery, graphql } from 'gatsby'

import { Button } from  'react-bootstrap';
import { isMobile, isAndroid, isIOS } from 'mobile-device-detect';
import AliceCarousel from 'react-alice-carousel'
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from 'react-icons/md'
import 'react-alice-carousel/lib/alice-carousel.css'
const options = {
  items: 1,
  mouseTrackingEnabled:true,
  infinite:true, 
  dotsDisabled :true,
  buttonsDisabled :true,
};

const options2 = {
  items: 1,
  mouseTrackingEnabled:false,
  infinite:true, 
  dotsDisabled :true,
  buttonsDisabled :true,
  autoPlay :true,
  stopAutoPlayOnHover :true,
  autoPlayInterval :3000,
  duration :1000,
};






class SliderHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }




render() {
  const MainSliderData = this.props.data.allWordpressAcfHome;
  const handleOnDragStart = (e) => e.preventDefault()
    
  return(
    <>
     
      <section className="home-section-1 mb-4">
        {MainSliderData && MainSliderData && MainSliderData.edges.map(
          prop => {
            return (
              <>
               
                {(isMobile === true)?(
                    <>
                      <AliceCarousel {...options}  ref={(el) => (this.Carousel = el)}>
                        {prop.node.acf.mainslider.map((Slide1) => (
                            <>
                            <Link to="/help" className="d-block">
                                <img src={Slide1.home_slide_background_image_mobile.localFile.childImageSharp.fixed.base64} alt="" className="img-fluid"/>
                              </Link>
                            </>
                        ))}
                      </AliceCarousel>
                        </>
                        ):(
                          <>
                          <AliceCarousel  {...options2} ref={(el) => (this.Carousel = el)}>
                        {prop.node.acf.mainslider.map((Slide2) => (
                            <>
                              <Link to="/help" className="d-block">
                                    <img src={Slide2.home_slide_background_image_desktop.localFile.childImageSharp.fixed.base64} alt="" className="img-fluid"/>
                                  </Link>
                            </>
                        ))}
                       </AliceCarousel>
                            <Button className="slideButton SlideLeft" onClick={() => this.Carousel.slidePrev()}><MdKeyboardArrowLeft/></Button>
                            <Button  className="slideButton SlideRight" onClick={() => this.Carousel.slideNext()}><MdKeyboardArrowRight/></Button>
                        </>
                        )}

                      </>
                      
                    )
                  }
              )}
            
         

      </section>
    
         
      </>     

)
}
}



const HomeMainSlider = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressAcfHome {
            edges {
              node {
                acf {
                
                  mainslider {
                    home_main_slide_url
                    home_slide_background_image_desktop {
                      localFile {
                        childImageSharp {
                          fixed(base64Width: 1600) {
                            base64
                          }
                        }
                      }
                    }                    
                    home_slide_background_image_mobile {
                      localFile {
                        childImageSharp {
                          fixed(base64Width: 767) {
                            base64
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
            
        }
    `}
    render={(data) => <SliderHome data={data}/>}
   
    />
    
)

export default HomeMainSlider