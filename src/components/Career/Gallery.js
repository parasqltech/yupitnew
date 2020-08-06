



import React, {Component} from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import OwlCarousel from 'react-owl-carousel';


import {LightgalleryProvider, LightgalleryItem} from "react-lightgallery";
class GallerySlide extends React.Component {
render() {
 
  const GallerySlideData = this.props.data.allWordpressWpCareer;

  const options = {
    items: 3,
    nav: true,
    rewind: true,
    autoplay: true,
    loop: true,
    dots:false,
    nav:false,
    
};

  return(
    <>
      <section className="career-section-3 mt-0 mb-4">
      <LightgalleryProvider lightgallerySettings={{ mode: 'lg-fade',download:false,
                                              cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)' }}
                                              galleryClassName="my_custom_classname"
                                              >
            {GallerySlideData && GallerySlideData && GallerySlideData.edges.map(
                                    prop => {
                                      return (
                                         <>
                                           <OwlCarousel className="owl-theme"  {...options} > 
                                        
                                     
                                       
                                          

                                        
                {prop.node.acf.career_page_gallery.map((Slide1, index) => (
                                            <>                 
                             

                              <LightgalleryItem group="any" src={Slide1.gallery_image.localFile.childImageSharp.fixed.base64}>
                                  
                              <img src={Slide1.gallery_image.localFile.childImageSharp.fixed.base64} alt="" className="img-fluid"/>
                                     
                              </LightgalleryItem>
                          </>
                          ))
                    }
                                             
                                                  
                                  
                                             </OwlCarousel>                 
                                               

                                  
                                        </>
                                      )
                                    }
                                  )}

            
</LightgalleryProvider>
          </section>
      
         
         
      </>     
)
}
}
const Gallery = () => (
    <StaticQuery
      query={graphql`
      query {
        allWordpressWpCareer {
            edges {
            node {
                acf {
                career_page_gallery {
                    gallery_image {
                    localFile {
                        childImageSharp {
                        fixed(base64Width: 500) {
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
     
      render={(data) => <GallerySlide data={data}/>}
     
      />
  )
  
  export default Gallery
