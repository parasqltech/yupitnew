import React, { Component } from 'react';
import { Container, Row, Col,Card,Tab ,DropdownButton,Dropdown,Tabs,ListGroup, FormControl, Button} from  'react-bootstrap';

import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import axios from 'axios';
import offer1 from '../img/offer/offer1.png'
import offer2 from '../img/offer/offer2.png'
import offer3 from '../img/offer/offer3.png'
import offer4 from '../img/offer/offer4.png'
import offer5 from '../img/offer/offer5.png'
import resturantSpecialIcon1 from '../img/resturantSpecialIcon1.png'
import resturantSpecialIcon2 from '../img/resturantSpecialIcon2.png'
import StarRatings from 'react-star-ratings';
import FontAwesome from 'react-fontawesome'
import OwlCarousel from 'react-owl-carousel';
import  ReferAFriendSection from '../components/common/ReferAFriendSection'


class OfferPage extends Component {
  
  
    componentWillMount() {
        axios.get(`https://yupit.io/staging/api/restaurantList`)
          .then(res => {
          console.log(res);
                this.setState({Resdata: res.data.ResponseData.RestaurantList});   
                console.log(this.state.Resdata);
        })
    }
  
  
    constructor(props) {
        super(props);
            this.state = {
                Resdata: []
            } 
    }
    
    
    
        
    render() {
        const options = {
        nav: true,
        rewind: true,
        autoplay: true,
        loop: true,
        dots:false,
        nav:false,
       
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            
            992:{
                items:3
            },
            1199:{
                items:4
            },
        }
    };
       
       const Offerrest = this.state.Resdata;
       console.log(Offerrest);
        return (
            <>
                <Layout>
                    <section className="offer-section-1">
                        <Container className="mh-100  d-flex align-items-center justify-content-center ">
                                <Row className="justify-content-center w-100 text-center ">
                                    <Col xl={6} lg={8} md={10}>
                                        <h1 className="section-heading text-white font-weight-bold">Delicious!</h1>
                                        <p className="section-heading-3 text-white ">Best offer that never bites your wallet</p>
                                    </Col>
                                </Row>
                        </Container>
                    </section>
                    <section className="offer-section-2">
                        <Container className="text-center">
                                <h2 className="section-heading font-weight-semi-bold">Reward you’ll Love!!</h2>
                                <p className="label-text-2">Check out the deals you can avail with YupiT as your wingman</p>
                                <Row className="justify-content-center">
                                    <Col xl={10} lg={10} md={12}>
                                <Row className=" ">
                                    <Col xl={6} lg={6} md={6}  sm={6} className="mb-4 pb-1">
                                        <Link to={"/offer/flat_perc_off"}>
                                            <img src={offer1} className="img-fluid  w-100" alt=""/>
                                        </Link>
                                     </Col>
                                    <Col xl={6} lg={6} md={6}  sm={6} >
                                        <Row >
                                            <Col xl={6} lg={6} md={6}  sm={6} className="mb-4 pb-1">
                                                <Link to={"/offer/get_a_freebie"}>
                                                    <img src={offer2} className="img-fluid w-100 " alt=""/>
                                                </Link>
                                            </Col>
                                            <Col xl={6} lg={6} md={6}  sm={6} className="mb-4  pb-1">
                                                <Link to={"/offer/loyalty_reward"}>
                                                    <img src={offer3} className="img-fluid w-100 " alt=""/>
                                                </Link>
                                            </Col>
                                            <Col xl={6} lg={6} md={6}  sm={6} className="mb-4  pb-1">
                                                <Link to={"/offer/happy_hours"}>
                                                    <img src={offer4} className="img-fluid w-100 " alt=""/>
                                                </Link>
                                            </Col>
                                            <Col xl={6} lg={6} md={6}  sm={6} className="mb-4  pb-1">
                                                <Link to={"/offer/last_minute_sale"}>
                                                    <img src={offer5} className="img-fluid w-100" alt=""/>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>  
                                    </Col>
                                    
                                </Row>  
                        </Container>
                    </section>
                    <ReferAFriendSection/>
                    
                    
        <section className="restaurent-section-2">
            <Container>
                <div className="">
                    
                    <h2 className="section-heading text-center mb-4 pb-2">Our Partner Restaurants</h2>
                     
                        <>
                        {Offerrest.length && (
                        <OwlCarousel  key={`carousel_${this.state.Resdata.length}`} className="owl-theme"  {...options} > 
                         {
                            Offerrest && Offerrest.map(prop => {return (  
                            <div className="pl-2 pr-2 pl-md-3 pr-md-3">    
                                <Link to ={"/restaurant/"+prop.URL}>
                                <Card className="resturant-card p-2 ">
                                    <Card.Header className="p-0 border-0">
                                
                                    <div className="resturant-card-image">
                                        <img src={prop.ImageURL} className="img-fluid" alt=""/>
                                    </div>
                                    <div className="resturant-logo">
                                        <img className="img-fluid"  src={prop.LogoURL}/>
                                    </div>
                                    <p className="resturant-name font-weight-semi-bold mb-1">{prop.Name}</p>
                                    <p className="resturant-details">{prop.Desc+"..."}</p>
                                        
                                        <ul class="popoverList">
                                            <li>
                                                <span className="popoverIconMain"><img src={resturantSpecialIcon1} className="img-fluid"/></span>
                                                <div className="popoverBox">
                                                    <p className="popoverTitle mb-2">Service</p>
                                                    <p>{prop.Service}</p>
                                                </div>
                                            </li>
                                            <li>
                                            <span className="popoverIconMain"><img src={resturantSpecialIcon2} className="img-fluid"/></span>
                                            <div className="popoverBox">
                                                <p className="popoverTitle mb-2">Time</p>
                                                <p><span>{(prop.AllData[0].Todaytime === '')?(<>Closed now</>):(<>{prop.AllData[0].Todaytime}</>)}</span></p>
                                            </div>
                                            </li>
                                        </ul>
                                        <StarRatings
                                            rating={2.50}
                                            starDimension="20px"
                                            starSpacing="3px"
                                            starEmptyColor="rgb(203, 211, 227)"
                                            starRatedColor="rgb(102, 155, 0)"
                                        />
                                        <p className="resturant-address border-top mt-2 pt-2 mb-0" ><FontAwesome name="home" className="resturant-address-icon"></FontAwesome>{prop.Address1}, {prop.Address2}</p>
                                    </Card.Header>
                                </Card>
                            </Link>    
                            </div> 
                            )})
                        }           
                        </OwlCarousel>
                        )}
                        </> 
                   
                    <div className="text-center py-2">
                        <Link to="/restaurant" className="btn btn-default-outline">View More</Link>
                    </div>
                </div>
            </Container>
        </section>
                </Layout>
            </>
        );
    }
}

export default OfferPage;
