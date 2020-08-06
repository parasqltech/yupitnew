import React, { Component } from 'react';
import { Container, Row, Col,Card,Tab ,DropdownButton,Dropdown,Tabs,ListGroup, FormControl, Button} from  'react-bootstrap';

import { Link, StaticQuery, graphql } from 'gatsby'
import GoogleMapReact from 'google-map-react';

import CallIcon from '../../img/icons/CallIcon.svg';
import MapMarker from '../../img/icons/MapMarker.svg';
import WebIcon from '../../img/icons/WebIcon.svg';
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdMessage,MdInfo,MdHome,MdPhotoLibrary,MdSearch } from 'react-icons/md'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Info extends Component {
    
    constructor(props) {
    super(props);
        this.state = {
            person: null,
            placeid:null
        } 
    }
    static defaultProps = {
        center: {
          lat: 23.023984,
          lng: 72.567750
        },
        zoom: 11,
      }
     

      async componentDidMount() {
     

        // const url1 = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=QL+Tech+»+Web+Design+%26+SEO+Marketing+Company&inputtype=textquery&fields=place_id&key=AIzaSyCSO9pwe63cDkwZaY15Az4N99bUvgTH1M8";
        // const response1 = await fetch(url1);
        // const data1 =  await response1.json();

        // console.log(data1)
        // this.setState({ placeid: data1.candidates[0]});
        // console.log("placeid : " + this.state.placeid.place_id );


        // // const url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJR1mA8PyEXjkRuNlaxp48bVo&result&key=AIzaSyCSO9pwe63cDkwZaY15Az4N99bUvgTH1M8";
        // const url = "https://maps.googleapis.com/maps/api/place/details/json?place_id="+this.state.placeid.place_id+"&result&key=AIzaSyCSO9pwe63cDkwZaY15Az4N99bUvgTH1M8";
        // const response = await fetch(url);
        // const data = await response.json();
        // console.log(data)
        // this.setState({person: data.result});
        // console.log(this.state.person.formatted_address)
      }
      
    render() {
        // if (!this.state.person) {
        //     return <div>didn't get a person</div>;
        //   }
         
        return (
            <>
                <Card className="resturant-info-tab shadown-none p-2">
                                <Card.Header className="bg-white p-0 border-0 d-flex justify-content-between">
                                   
                                <h2 className="section-heading-2   mb-2">Raj's South Indian</h2>
                                </Card.Header>
                                <Card.Body className="p-0 py-2">
                                    <p className="label-text">Base prepared fresh daily. Extra toppings are available in choose extra Choose you sauce: Go for BBQ sauce or piri piri sauce on your pizza base for no extra cost.Choose your cut: Triangular, square, fingers or Un cut on any size pizza. Base prepared fresh daily. Extra toppings are available in choose extra Choose you sauce: Go for BBQ sauce.</p>
                                    <div className="mb-3" style={{ height: '50vh', width: '100%' }}>
                                        <GoogleMapReact
                                        bootstrapURLKeys={'key=AIzaSyCSO9pwe63cDkwZaY15Az4N99bUvgTH1M8'}
                                        defaultCenter={this.props.center}
                                        defaultZoom={this.props.zoom}
                                        >
                                        <AnyReactComponent
                                            lat={23.023984}
                                            lng={72.567750}
                                            text="My Marker scvdsb"
                                        />
                                        </GoogleMapReact>
                                   </div>
                                   <Row>
                                       <Col md={6} sm={5}>
                                           <h3 className="section-heading-3 font-weight-semi-bold">Contact Details</h3>
                                            <ul className="contactList">

                                                {/* <li> <i className="text-center"><img src={MapMarker}/></i><span>{this.state.person.formatted_address}</span></li>
                                                <li>
                                                    <a href={"tel:"+this.state.person.formatted_phone_number} target="_blank">
                                                         <i className="text-center"><img src={CallIcon}/></i><span>{this.state.person.formatted_phone_number}</span>
                                                    </a>
                                                </li> */}
                                                <li> <i className="text-center"><img src={MapMarker}/></i><span>45 St Georges Terrace, Ground Floor, Perth, 6000</span></li>
                                                <li>
                                                    <a href="tel:+61 8 6262 3559" target="_blank">
                                                         <i className="text-center"><img src={CallIcon}/></i><span>+61 8 6262 3559</span>
                                                    </a>
                                                </li>
                                                
                                                <li>
                                                    <a href="" target="_blank">
                                                         <i className="text-center"><img src={WebIcon}/></i><span>www.yupit.app</span>
                                                    </a>
                                                </li>
                                                
                                            </ul>
                                       </Col>
                                       <Col md={6} sm={7}>
                                       <Row>
                                       <Col xl={8} lg={10}>
                                            <h3 className="section-heading-3 font-weight-semi-bold">Opening Hours</h3>
                                            <ul className="WorkingHourList">
                                                <li className="d-flex">
                                                   <span>Monday</span>
                                                   <span>11:00 am - 11:00 pm</span>
                                                </li>
                                                <li>
                                                   <span>Tuesday</span>
                                                   <span>11:00 am - 11:00 pm</span>
                                                    
                                                </li>
                                                <li>
                                                   <span>Wednesday</span>
                                                   <span>11:00 am - 11:00 pm</span>
                                                    
                                                </li>
                                                <li>
                                                   <span>Thursday</span>
                                                   <span>11:00 am - 11:00 pm</span>
                                                    
                                                </li>
                                                <li>
                                                   <span>Friday</span>
                                                   <span>11:00 am - 11:00 pm</span>
                                                    
                                                </li>
                                                <li>
                                                   <span>Saturday</span>
                                                   <span>11:00 am - 11:00 pm</span>
                                                    
                                                </li>
                                                <li>
                                                   <span>Sunday</span>
                                                   <span>Off</span>
                                                </li>
                                            </ul>
                                        </Col>
                                   </Row>
                                        </Col>
                                   </Row>
                               </Card.Body>
                            </Card>
                          
            </>
        );
    }
}

export default Info;