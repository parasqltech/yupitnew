import React,{ Component } from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Loadable from 'react-loadable';
import Layout from '../components/Layout'

import {Container, Row, Col , Button} from 'react-bootstrap';
import scrollTo from 'gatsby-plugin-smoothscroll';

// import  MainSlider from '../components/subscription/MainSlider'
import  TopBenifits from '../components/subscription/TopBenifits'
import  HowItWorks from '../components/subscription/HowItWorks'
import  ContactChooseYourMembership from '../components/Contact/ContactChooseYourMembership'
import  Faq from '../components/subscription/Faq'
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const MainSlider = Loadable({
  loader: () => import("../components/subscription/MainSlider"),
  loading: () => null,
  timeout: 100,
})


const OfferSection = Loadable({
    loader: () => import("../components/subscription/OfferSection"),
    loading: () => null,
    delay: 10,
    timeout: 10,
})
const Testimonial = Loadable({
  loader: () => import("../components/subscription/Testimonial"),
  loading: () => null,
  timeout: 100,
})

class subscription extends Component{
  
  render (){
    
    
    return(
      <>
        <Layout>
        <MainSlider></MainSlider>
          <TopBenifits></TopBenifits>
          <ContactChooseYourMembership></ContactChooseYourMembership>
          <HowItWorks></HowItWorks>
          <OfferSection/>
          <Testimonial></Testimonial>

        
          <Faq></Faq>
          <section className="suscription-section-5">
          <Container>
              <Row className="justify-content-center align-items-center">
                <Col lg={8}>
                    <h2 className="section-heading-2 font-weight-semi-bold">Do you love exclusive deals & Rewards?</h2>
                    <p className="label-text-2">Simply subscribe to the YupiT membership and let the good times roll!!</p>
                </Col>
                <Col lg={3} className="text-left text-md-right">
                  <a href="/" target="" class="btn-link btn-small"><Button onClick={() => scrollTo('#loverewards')} variant="default" id="reward">Would Love to subscribe</Button></a>
                </Col>
              </Row>
          </Container>
          </section>
      </Layout>
      </>
    
    )
  } 
  
}
   
export default subscription 



