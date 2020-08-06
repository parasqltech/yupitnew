import React, { Component } from 'react';
import { Container, Row, Col,Card,Tab ,DropdownButton,Dropdown,Tabs,ListGroup, FormControl, Button} from  'react-bootstrap';
import axios from 'axios';
import { Link, StaticQuery, graphql } from 'gatsby'
import resturantThumbnial from '../img/resturantThumbnial.png'
import RestaurantLogo from '../img/BintangxCafe.png'
import StarRatings from 'react-star-ratings';
import resturantSpecialIcon1 from '../img/resturantSpecialIcon1.png'
import resturantSpecialIcon2 from '../img/resturantSpecialIcon2.png'
import Layout from '../components/Layout'
import FontAwesome from 'react-fontawesome'

import Loadable from 'react-loadable';
const MainSlider = Loadable({
    loader: () => import("../components/offer/MainSlider"),
    loading: () => null,
    delay:10,
    timeout: 10,
})

class OfferDetailPage extends Component {
     constructor(props) {
        super(props);
            this.state = {
            } 
        }
       
    componentWillMount() {
        const OfferID = this.props.pageContext.OfferID;
        // console.log("im called2");
        axios.get(`https://yupit.io/staging/api/offerdetails/`+OfferID)
          .then(res => {    
                console.log(res);
                this.setState({
                    OfferData: res.data.ResponseData,
                    Offerdetail: res.data.ResponseData.Details
                });

        })
    }
        
    render() {
        // console.log(this.props.pageContext);
       // const OfferID = this.props.pageContext.OfferID;
       const OfferName = this.props.pageContext.OfferName;
       console.log(this.state.OfferData);
       const offerd = this.state.OfferData;
       const offerRestDetail = this.state.Offerdetail;
        return (
            <>
                <Layout>
                  
                    <MainSlider/>
                    
                    <section className="restaurent-section-2">
                        <Container>
                            <div className="">
                                
                                <h2 className="section-heading text-center mb-4 pb-2">{OfferName}</h2>
                                <Row>
                                   {
                                    offerRestDetail && offerRestDetail.map(prop => {return (
                                    <>
                                        <Col xl={3} lg={4} md={4} sm={6}>
                                            <Link to ={"/restaurant/"+prop.URL}>
                                                <Card className="resturant-card p-2 ">
                                                    <Card.Header className="p-0 border-0">
                                                
                                                    <div className="resturant-card-image">
                                                        <img src={prop.RestaurantCoverImagePath} className="img-fluid" alt=""/>
                                                    </div>
                                                    <div className="resturant-logo">
                                                        <img className="img-fluid"  src={prop.RestaurantLogoImagePath}/>
                                                    </div>
                                                    <p className="resturant-name font-weight-semi-bold mb-1">{prop.RestaurantName}</p>
                                                    <p className="resturant-details">{prop.Desc}</p>
                                                        
                                                        <ul class="popoverList">
                                                            <li>
                                                                <span className="popoverIconMain"><img src={resturantSpecialIcon1} className="img-fluid"/></span>
                                                                <div className="popoverBox">
                                                                    <p className="popoverTitle mb-2">Contact</p>
                                                                    <p>{prop.ContactNo}</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                    <span className="popoverIconMain"><img src={resturantSpecialIcon2} className="img-fluid"/></span>
                                                                    <div className="popoverBox">
                                                                    <p className="popoverTitle mb-2">Time</p>
                                                                    <p>{prop.OpenTime_AMPM} To {prop.CloseTime_AMPM}</p>
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
                                                        <p className="resturant-address border-top mt-2 pt-2 mb-0" ><FontAwesome name="home" className="resturant-address-icon"></FontAwesome>{prop.Address1}, {prop.Address}</p>
                                                    </Card.Header>
                                                </Card>
                                            </Link>
                                        </Col>
                                    </>
                                    )})
                                   } 
                                </Row> 
                            </div>
                        </Container>
                    </section>
                </Layout>
            </>
        );
    }
}

export default OfferDetailPage;
