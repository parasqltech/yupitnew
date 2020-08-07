import React, { Component } from 'react';
import { Container, Row, Col,Card,FormControl ,Button,Form} from  'react-bootstrap';
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from 'gatsby' 
import resturantThumbnial from '../img/resturantThumbnial.png'
import RestaurantLogo from '../img/fav-icon.png'
import StarRatings from 'react-star-ratings';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import FontAwesome from 'react-fontawesome'
import Layout from '../components/Layout'
import resturantSpecialIcon1 from '../img/resturantSpecialIcon1.png'
import resturantSpecialIcon2 from '../img/resturantSpecialIcon2.png'


class Restaurant extends Component {
   
   state = {
    headersearch: "",
    sidebarsearch: "",
    cuisines: "",
    foodfor: "",
    tags: ""
  }
  
  componentWillMount() {
	console.log("im called");
    axios.get(`https://yupit.io/staging/api/restaurantList`)
      .then(res => {
			console.log(res);
			this.setState({Resdata: res.data.ResponseData.RestaurantList});	
			this.setState({favfood: res.data.ResponseData.SidebarSearch[0].Details});
			this.setState({foodfor: res.data.ResponseData.SidebarSearch[1].Details});
			this.setState({tags: res.data.ResponseData.SidebarSearch[2].Details});
//          console.log(this.state.favfood);
      })
  }
  constructor(props) {
    super(props);
      this.validator = new SimpleReactValidator();
      this.state = {
          FilterActive: false,
          loading: true,
          Resdata: [],
          favfood: [],
          foodfor: [],
          tags: []
         

      } 
      this.filterOpen = this.filterOpen.bind(this);
      this.filterClose = this.filterClose.bind(this);
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })

  }

  handleSideChange = events => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })

  }

  handleSubmit = event => {
    event.preventDefault()
   if (this.validator.allValid()) {
    axios.post('https://yupit.io/staging/api/headersearch', { Search: `${this.state.headersearch}` })
    .then(res => {
        // console.log(res.data);
        // console.log(res.data.ResponseData.RestaurantList);
        this.setState({Resdata: res.data.ResponseData.RestaurantList});
        
    })
    .catch(error => console.log(error));
   }
        else {
            this.validator.showMessages();
            this.forceUpdate();
        }
  }

  handleSidebarSubmit = events =>{
    events.preventDefault()
if (this.validator.allValid()) {
    var checkedTags = $("input[name=tags]:checked").map(function() {
      return this.value;
    }).get().join(",");
    var checkedCuisines = $('input[name=cuisines]:checked').map(function() {
        return this.value;
    }).get();

  axios.post('https://yupit.io/staging/api/sidebarsearch', { FavouriteFood: `${checkedCuisines}`, Tag: `${checkedTags}`, Foodfor: `${this.state.foodfor}` })
    .then(result => {
        console.log(result.data);
        
        this.setState({Resdata: result.data.ResponseData.RestaurantList});
        
        console.log(this.state.Resdata);
    })
    .catch(error => console.log(error));
 }
        else {
            this.validator.showMessages();
            this.forceUpdate();
        }
  }

    
        filterOpen() {
            document.body.classList.add('overly-bg');
           this.setState({FilterActive: true})
        }
        filterClose() {
            document.body.classList.remove('overly-bg');
            this.setState({FilterActive: false})
        }
       
   
    render() {
     
      
       const res = this.state.Resdata;
       const favfood = this.state.favfood;
       const foodfor = this.state.foodfor;
       const tags = this.state.tags;
      
     
        return (
            
            <>
             <Layout>
                 <section className="restaurent-section-1 ">
                     <Container className="mh-100  d-flex align-items-center justify-content-center ">
                        <Row className="justify-content-center w-100 text-center ">
                            <Col xl={7} lg={8} md={10}>
                                <h1 className="section-heading font-weight-bold  mb-3">Delicious!!</h1>
                                <p className="section-heading-3 mb-3">Find your favourite venue anytime, Anywhere</p>
                                <Form onSubmit={this.handleSubmit}>
                                    <div className="d-flex ">
                                      <div className="mr-3">
                                      <input type="text" rows="2" name="headersearch" className="form-control " onChange={this.handleInputChange} placeholder="Search with location, food or restaurant"/>
                                    
                                      {this.validator.message('headersearch', this.state.headersearch, 'required|alpha')}
                                      </div>
                                      <div>
                                     <button type="submit" name="search" className="btn btn-default h-auto" variant="default">Search</button> 
                                    </div>
                                    </div>
                                    
				
                                </Form>
                            </Col>
                        </Row>
                     </Container>
                 </section>
                <section className="restaurent-section-2">
                    <Container>
                       <Row className=" ">
                            <Col xl={9} >
                                <Row>
                                <>
                                    { res && res.map(prop => {return (  
                                      <>  
                                          <Col  xl={4}  lg={4} md="4"  sm={6}>
                                             <Link className="nav-link p-0" to={"/restaurant/"+prop.URL}>
                                             <Card className="resturant-card p-2 ">
                                             <Card.Header className="p-0 border-0">
                                               <div className="resturant-card-image">
                                                <img src={prop.ImageURL} className="img-fluid" alt=""/>
                                               </div>
                                               <div className="resturant-logo">
                                                <img className="img-fluid"  src={prop.LogoURL}/>
                                               </div>
                                               <p className="resturant-name font-weight-semi-bold mb-1">{prop.Name}</p>
                                               <p className="resturant-details">{prop.Desc}</p>
                                               <ul class="popoverList border-bottom">
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
                                                <p className="resturant-address mb-0" >
                                                 <FontAwesome name="home" className="resturant-address-icon"></FontAwesome>{prop.Address1}, {prop.Address2}
                                                </p>
                                                </Card.Header>
                                                </Card>
                                            </Link>
                                          </Col>
                                          </>
                                      )})
                                    }
                                  </>
                                    
                                </Row>
                            </Col>
                           <Col xl={3} className="d-none d-xl-block">
                            <form name="sidebarfilter" onSubmit={this.handleSidebarSubmit}>
                                <div className="filter-Sidebar">
                                    <div className="sidebar-header">
                                       Search Filters
                                    </div>
                                    <div className="sidebar-body">
                                        <div className="border-bottom p-3">
                                            <label className="sub-heading font-weight-semi-bold  mb-3">Location</label>
                                            <input type="text" rows="2" name="sidebarsearch" onChange={this.handleSideChange} className="form-control " placeholder="Enter your location"/>
                                        </div>
                                        <div className="border-bottom p-3">
                                          <label className="sub-heading font-weight-semi-bold mb-3">Your Favourite Food</label>
                                            
                                           {
                                            favfood  && favfood.map(prop => {return (    
                                             
                                               <div className="yourfavoritefoodlist">
                                                <input name="cuisines" class="custom-checkbox" onChange={this.handleSideChange} id={prop.Name} type="checkbox" value={prop.ID}/>
                                                <label className=" mr-3" for={prop.Name}>{prop.Name}</label>
                                               </div>
                                            )})
                                          }
                                      </div>   
									  <div className="border-bottom p-3">
                                        <label className="sub-heading d-block font-weight-semi-bold mb-3">Food for</label>
                                            <div className="foodfor">
												{
													foodfor && foodfor.map(prop => {return ( 
														<>
														<input name="foodfor" class="custom-checkbox" onChange={this.handleSideChange} id={prop.Name} type="radio" value={prop.Id}/>
													    <label className=" mr-3" for={prop.Name}>{prop.Name}</label>
														</>
													)})
												} 
											
                                            </div>
                                                                                     
                                      </div> 
									<div className="p-3">
                                        <label className="sub-heading d-block font-weight-semi-bold mb-3">Tags</label>
                                        {
                                           tags && tags.map(prop => {return (    
                                             
                                               <span className="tagsList">
                                                <input name="tags" class="custom-checkbox" onChange={this.handleSideChange} id={prop.Name} type="checkbox" value={prop.ID}/>
                                                <label for={prop.Name}>{prop.Name}</label>
                                               </span>
                                            )})
                                        } 
                                    <button type="submit" name="sidebarsearch" className="btn btn-default " variant="default">Search</button> 
                                    {this.validator.message('sidebarsearch', this.state.sidebarsearch, 'required')}
                                    </div>		
									
                                </div>
                            </div>
                            </form>
                        </Col>
                    </Row>
                       
                    </Container>
                </section>
                </Layout>
			
            </>
        );
    }
}




export default Restaurant;
