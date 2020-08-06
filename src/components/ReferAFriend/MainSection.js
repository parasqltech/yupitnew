



import React, {Component} from "react"
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js';
import Layout from '../../components/Layout'
import SliderImage from '../../img/other/refer-a-friend.png'
import LazyLoad from 'react-lazyload';
import { Container, Col, Nav, Row, Card, Accordion, Button } from  'react-bootstrap';


class MainSection extends Component {
  render() {
    return (
              
      <section className="refer-a-friend-section-1 text-center mb-0">
          <img src={SliderImage} className="img-fluid" />
      </section>
    );
  }
}

export default MainSection;
   
      
                           
              
          