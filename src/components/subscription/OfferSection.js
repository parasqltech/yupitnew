import React, { Component } from 'react';
import { Container, Row, Col,Card,Tab ,DropdownButton,Dropdown,Tabs,ListGroup, FormControl, Button} from  'react-bootstrap';

import { Link, StaticQuery, graphql } from 'gatsby'
import GoogleMapReact from 'google-map-react';

import resturantThumbnial from '../../img/icons/OfferThumbnial.png'
import timer from '../../img/icons/timer.png';

import getiscounticon from '../../img/icons/getiscounticon.png';
import flatDiscount from '../../img/icons/flatDiscount.png';
import Getmealwithdrink from '../../img/icons/Getmealwithdrink.png';
import axios from 'axios';
import MapMarker from '../../img/icons/MapMarker.svg';
import WebIcon from '../../img/icons/WebIcon.svg';
import { AiOutlineClockCircle, AiOutlineShareAlt } from 'react-icons/ai'
import { GiOpenedFoodCan } from 'react-icons/gi'

import OwlCarousel from 'react-owl-carousel';
const options = {
    nav: true,
    rewind: true,
    autoplay: true,
    loop: true,
    dots:false,
    nav:false,
    responsive:{
        0 : {
            items: 1,
        },
        576 : {
            items: 2,
        },
        992 : {
            items: 3,
        },
        1200 : {
            items: 4,
        }
    }
    
};
class OfferSection extends Component {
   
    componentWillMount() {
        console.log("im called");
        axios.get(`https://yupit.io/staging/api/restaurantList`)
          .then(res => {
            console.log(res);
            
            this.setState({ResData: res.data.ResponseData.OfferList});   
            console.log(this.state.ResData);
        })
    }

     constructor(props) { 
        super(props);
          this.state = {
             ResData:[],
          }
    }

    render() {
        // console.log(this.state.ResData);
        const Offerdata = this.state.ResData;
        console.log(Offerdata);
        return (
            <section className="offerSection">
                <Container>
                    <h2 className="section-heading text-center font-weight-semi-bold">Our Offer</h2>
                {Offerdata.length && (
                    <OwlCarousel key={`carousel_${this.state.ResData.length}`} className="owl-theme mt-2 mb-2"  {...options} > 
                    { Offerdata && Offerdata.map( prop => {return (
                        <div className="p-2">
                          <Link className="p-0" to={"/offer/"+prop.URL}>
                            <Card className="offer-card p-0">
                            <Card.Header className="p-0">
                                <img src={resturantThumbnial} className="img-fluid w-100" alt/>
                            
                                <div className="offerHeader Getmealwithdrink">
                                    <div className="offerIcon">
                                        <i><img src={prop.Image} className="img-fluid" alt/></i>
                                    </div>
                                    <div className="offerName">{prop.Name}</div>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <p className="offerDetailText">{prop.Desc}</p>
                                <p className="label-text d-none"> <AiOutlineClockCircle className="mr-1 d-none"/> <span className="mr-1 d-none"> 20:00 to 22:30</span> <GiOpenedFoodCan  className="mr-1 d-none"/><span className="d-none"> Dinner</span></p>
                                <span className="shareButton d-none"><AiOutlineShareAlt/></span>
                            </Card.Body>
                            </Card>
                          </Link>
                        </div>
                      )}
                    )}
                    </OwlCarousel>
                )}
              </Container>
            </section>
        );
    }
}

export default OfferSection;