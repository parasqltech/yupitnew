import React, { Component } from 'react';
import { Container, Row, Col,Card,Tab ,Form,Dropdown,Tabs,ListGroup, FormControl, Button} from  'react-bootstrap';


import thumbnial1 from '../../img/restaurant/gallery/thumbnial1.png'
import thumbnial2 from '../../img/restaurant/gallery/thumbnial2.png'
import thumbnial3 from '../../img/restaurant/gallery/thumbnial3.png'
import thumbnial4 from '../../img/restaurant/gallery/thumbnial4.png'
import thumbnial5 from '../../img/restaurant/gallery/thumbnial5.png'
import thumbnial6 from '../../img/restaurant/gallery/thumbnial6.png'
import thumbnial7 from '../../img/restaurant/gallery/thumbnial7.png'
import thumbnial8 from '../../img/restaurant/gallery/thumbnial8.png'
import thumbnial9 from '../../img/restaurant/gallery/thumbnial9.png'
import thumbnial10 from '../../img/restaurant/gallery/thumbnial10.png'
import thumbnial11 from '../../img/restaurant/gallery/thumbnial11.png'
import thumbnial12 from '../../img/restaurant/gallery/thumbnial12.png'
import {LightgalleryProvider, LightgalleryItem} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
class Gallery extends Component {
   
    render() {
        return (
            <>
                    <LightgalleryProvider lightgallerySettings={{ mode: 'lg-fade',download:false,
                                              cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)' }}
                                              galleryClassName=""
                                              >
                                                  <Row>
                                                 {[thumbnial1,thumbnial2,thumbnial3,thumbnial4,thumbnial5,thumbnial6,thumbnial7,thumbnial8,thumbnial9,thumbnial10,thumbnial11,thumbnial12].map((galleryItem) => (
                                            <Col lg={4} md={4}  sm={6}  className="mb-4 col-6">
                                        <LightgalleryItem  src={galleryItem} >
                                            <img src={galleryItem} className="img-fluid" alt=""/>
                                        </LightgalleryItem>    
                                        </Col>                   
                                        
                                  ))}  
                                      </Row>
                    </LightgalleryProvider>           
                          
            </>
        );
    }
}

export default Gallery;