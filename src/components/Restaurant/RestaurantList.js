import React, { Component } from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col,Card,FormControl ,Button,Form} from  'react-bootstrap';
import resturantThumbnial from '../../img/resturantThumbnial.png'
import RestaurantLogo from '../../img/BintangxCafe.png'
import StarRatings from 'react-star-ratings';
import resturantSpecialIcon1 from '../../img/resturantSpecialIcon1.png'
import resturantSpecialIcon2 from '../../img/resturantSpecialIcon2.png'
import OwlCarousel from 'react-owl-carousel';
import FontAwesome from 'react-fontawesome'

class RestaurantList extends React.Component {
    constructor(props) {
		super(props);
            this.state = {
               
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
  return(
      <>
       
        <OwlCarousel className="owl-theme"  {...options} > 
            <div className="pl-2 pr-2 pl-md-3 pr-md-3">    
                <Link to ="/restaurant-menu">
                <Card className="resturant-card p-2 ">
                    <Card.Header className="p-0 border-0">
                
                    <div className="resturant-card-image">
                        <img src={resturantThumbnial} className="img-fluid" alt=""/>
                    </div>
                    <div className="resturant-logo">
                        <img className="img-fluid"  src={RestaurantLogo}/>
                    </div>
                    <p className="resturant-name font-weight-semi-bold mb-1">Raj's South Indian</p>
                    <p className="resturant-details">Serving sumptuous lunch menus and in the
                        evening, a stylish dinner menu based around
                        dishes to share.</p>
                        
                        <ul class="popoverList">
                            <li>
                                <span className="popoverIconMain"><img src={resturantSpecialIcon1} className="img-fluid"/></span>
                                <div className="popoverBox">
                                    <p className="popoverTitle mb-2">Cuisine</p>
                                    <p>Australian, Indian, Indonesian</p>
                                </div>
                            </li>
                            <li>
                                    <span className="popoverIconMain"><img src={resturantSpecialIcon2} className="img-fluid"/></span>
                                    <div className="popoverBox">
                                    <p className="popoverTitle mb-2">Cuisine</p>
                                    <p>Australian, Indian, Indonesian</p>
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
                        <p className="resturant-address border-top mt-2 pt-2 mb-0" ><FontAwesome name="home" className="resturant-address-icon"></FontAwesome> East Victoria Park WA 6101, Australia</p>
                    </Card.Header>
                </Card>
            </Link>    
            </div>            
        </OwlCarousel>
    </>     
    )
  }
}




export default RestaurantList