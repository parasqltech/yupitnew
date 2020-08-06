



import React, {Component} from "react"
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js';
import Layout from '../../components/Layout'
import LazyLoad from 'react-lazyload';
import { Container, Col, Nav, Row, Card, Accordion, Button } from  'react-bootstrap';


class MainSection extends Component {
  render() {
    return (
              
      <section className="restaurent-section-1 ">
                     
      <Container className="mh-100  d-flex align-items-center justify-content-center ">
                 <Row className="justify-content-center w-100 text-center ">
                     <Col xl={6} lg={8} md={10}>
                         <h1 className="section-heading font-weight-bold  mb-3">Delicious!</h1>
                         <p className="section-heading-3 mb-3">Best offer that never bites your wallet</p>
                        
                     </Col>
                 </Row>
         
      </Container>

  </section>

    );
  }
}

export default MainSection;
   
      
                           
              
          