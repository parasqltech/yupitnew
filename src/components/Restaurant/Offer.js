import React, { Component } from 'react';
import { Container, Row, Col,Card,Tab ,DropdownButton,Dropdown,Tabs,ListGroup, FormControl, Button} from  'react-bootstrap';

import { Link, StaticQuery, graphql } from 'gatsby'
import GoogleMapReact from 'google-map-react';

import resturantThumbnial from '../../img/icons/OfferThumbnial.png'
import timer from '../../img/icons/timer.png';

import getiscounticon from '../../img/icons/getiscounticon.png';
import flatDiscount from '../../img/icons/flatDiscount.png';
import Getmealwithdrink from '../../img/icons/Getmealwithdrink.png';


import MapMarker from '../../img/icons/MapMarker.svg';
import WebIcon from '../../img/icons/WebIcon.svg';
import { AiOutlineClockCircle, AiOutlineShareAlt } from 'react-icons/ai'
import { GiOpenedFoodCan } from 'react-icons/gi'

import { MdMessage,MdInfo,MdHome,MdPhotoLibrary,MdSearch } from 'react-icons/md'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Offer extends Component {

    static defaultProps = {
        center: {
          lat: 23.023984,
          lng: 72.567750
        },
        zoom: 11
      };
    render() {
       
        return (
            <>
            <Row>
                
                <Col lg={4} sm={6} className="mb-3">
                    <Card className="offer-card p-0">
                    <Card.Header className="p-0">
                        <img src={resturantThumbnial} className="img-fluid w-100" alt/>
                        <div className="offerHeader Getmealwithdrink">
                            <div className="offerIcon">
                                <i>
                                <img src={timer} className="img-fluid" alt/>
                                </i>
                            </div>
                            <div className="offerName">
                            Happy Hours
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <p className="offerDetailText">Get a new reward every hour but you gotta be there at the venue to avail them and these just keep coming</p>
                        <p className="label-text"> <AiOutlineClockCircle className="mr-1"/> <span className="mr-1"> 20:00 to 22:30</span> <GiOpenedFoodCan  className="mr-1"/><span > Dinner</span></p>
                        <span className="shareButton"><AiOutlineShareAlt/></span>
                    </Card.Body>
                    </Card>

                </Col>
                <Col lg={4} sm={6} className="mb-3">
                    <Card className="offer-card p-0">
                    <Card.Header className="p-0">
                        <img src={resturantThumbnial} className="img-fluid w-100" alt/>
                        <div className="offerHeader Get30discount">
                            <div className="offerIcon">
                                <i>
                                <img src={getiscounticon} className="img-fluid" alt/>
                                </i>
                            </div>
                            <div className="offerName">
                            Flat % off
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <p className="offerDetailText">Maybe 5 or even a 75% discount on your bill as a reward guaranteed</p>
                        <p className="label-text"> <AiOutlineClockCircle className="mr-1"/> <span className="mr-1"> 20:00 to 22:30</span> <GiOpenedFoodCan  className="mr-1"/><span > Dinner</span></p>
                        <span className="shareButton"><AiOutlineShareAlt/></span>
                    </Card.Body>
                    </Card>

                </Col>
                <Col lg={4} sm={6} className="mb-3">
                    <Card className="offer-card p-0">
                    <Card.Header className="p-0">
                        <img src={resturantThumbnial} className="img-fluid w-100" alt/>
                        <div className="offerHeader Flat10Discount">
                            <div className="offerIcon">
                                <i>
                                <img src={flatDiscount} className="img-fluid " alt/>
                                </i>
                            </div>
                            <div className="offerName">
                            Flat $ off
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <p className="offerDetailText">We simply slash off the $s from your total bill so you receive additional value out of your dining experience</p>
                        <p className="label-text"> <AiOutlineClockCircle className="mr-1"/> <span className="mr-1"> 20:00 to 22:30</span> <GiOpenedFoodCan  className="mr-1"/><span > Dinner</span></p>
                        <span className="shareButton"><AiOutlineShareAlt/></span>
                    </Card.Body>
                    </Card>

                </Col>
                <Col lg={4} sm={6} className="mb-3">
                    <Card className="offer-card p-0">
                    <Card.Header className="p-0">
                        <img src={resturantThumbnial} className="img-fluid  w-100" alt/>
                        <div className="offerHeader Getfreemealwithdrink">
                            <div className="offerIcon">
                                <i>
                                <img src={Getmealwithdrink} className="img-fluid" alt/>
                                </i>
                            </div>
                            <div className="offerName">
                            Last-minute sale
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <p className="offerDetailText">The best offers don’t last long. Gotta be quick to avail them as they’re lightning fast</p>
                        <p className="label-text"> <AiOutlineClockCircle className="mr-1"/> <span className="mr-1"> 20:00 to 22:30</span> <GiOpenedFoodCan  className="mr-1"/><span > Dinner</span></p>
                        <span className="shareButton"><AiOutlineShareAlt/></span>
                    </Card.Body>
                    </Card>

                </Col>
                <Col lg={4} sm={6} className="mb-3">
                    <Card className="offer-card p-0">
                    <Card.Header className="p-0">
                        <img src={resturantThumbnial} className="img-fluid w-100" alt/>
                        <div className="offerHeader Getmealwithdrink">
                            <div className="offerIcon">
                                <i>
                                <img src={timer} className="img-fluid" alt/>
                                </i>
                            </div>
                            <div className="offerName">
                            Loyalty reward
                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <p className="offerDetailText">The more you order from YupiT the better your rewards get. These are connected with the order frequency</p>
                        <p className="label-text"> <AiOutlineClockCircle className="mr-1"/> <span className="mr-1"> 20:00 to 22:30</span> <GiOpenedFoodCan  className="mr-1"/><span > Dinner</span></p>
                        <span className="shareButton"><AiOutlineShareAlt/></span>
                    </Card.Body>
                    </Card>

                </Col>
                <Col lg={4} sm={6} className="mb-3">
                    <Card className="offer-card p-0">
                    <Card.Header className="p-0">
                        <img src={resturantThumbnial} className="img-fluid w-100" alt/>
                        <div className="offerHeader Get30discount">
                            <div className="offerIcon">
                                <i>
                                <img src={getiscounticon} className="img-fluid" alt/>
                                </i>
                            </div>
                            <div className="offerName">
                            Get a Freebie!!

                            </div>
                        </div>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <p className="offerDetailText">Once you’ve made your nth order, you’ll earn a free dish or a drink that you are definitely going yo love </p>
                        <p className="label-text"> <AiOutlineClockCircle className="mr-1"/> <span className="mr-1"> 20:00 to 22:30</span> <GiOpenedFoodCan  className="mr-1"/><span > Dinner</span></p>
                        <span className="shareButton"><AiOutlineShareAlt/></span>
                    </Card.Body>
                    </Card>

                </Col>
               
            </Row>
                
                          
            </>
        );
    }
}

export default Offer;