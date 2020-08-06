import React,{ Component } from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import  ImBusinessMainSlider from '../components/imbusiness/ImBusinessMainSlider'
import  CustomerJourny from '../components/imbusiness/CustomerJourny'
import  WhyJoinYupIT from '../components/imbusiness/WhyJoinYupIT'
import  HowJoinYupIT from '../components/imbusiness/HowJoinYupIT'
import  OurFeature from '../components/imbusiness/OurFeature'
import  WhitePaper from '../components/imbusiness/WhitePaper'
import  ContactHelpMeBusiness from '../components/Contact/ContactHelpMeBusiness'

import  ContectIMBusinessForm from '../components/Contact/ContectIMBusinessForm'

import  Faq from '../components/imbusiness/Faq'
import icon1 from '../img/imbusiness/icon1.png'
import icon2 from '../img/imbusiness/icon2.png'
import icon3 from '../img/imbusiness/icon3.png'
import calculatNowSectionMainImage from '../img/imbusiness/calculatNowSectionMainImage.png'
import { Container, Col, Nav, Row, Card, Accordion, Button } from  'react-bootstrap';




import PropTypes from "prop-types"

class imbusiness extends Component{
	
	render (){
		
		
		return(
			<>
				<StaticQuery
    query={graphql`
      query {
        allWordpressPost{
          edges {
            node {
              acf {
                short_description
              }
              featured_media {
                source_url
              }
              date(formatString: "MMM DD, YYYY")
              author {
                name
              }
              title
              link
              slug
            }
          }
        }
        allWordpressCategory {
          edges {
            node {
            id
            name
            slug
            }
          }
          }
      }
    `}
    render={data => (
      <>
    
        <Layout>
          <Helmet>
            <title>YupiT: Manage online booking & orders with our partnership</title>
			<meta name="title" content="YupiT: Manage online booking & orders with our partnership"></meta>
			<meta property="og:title" content="YupiT: Manage online booking & orders with our partnership"></meta>
			<meta property="twitter:title" content="YupiT: Manage online booking & orders with our partnership"></meta>
			
			
			<meta name="description" content="Partner with YupiT app. To attract new customers with referral rewards, increase order values, reduce house labour cost much more. Contact support@yupit.io"></meta>
			<meta property="og:description" content="Partner with YupiT app. To attract new customers with referral rewards, increase order values, reduce house labour cost much more. Contact support@yupit.io"></meta>
			<meta property="twitter:description" content="Partner with YupiT app. To attract new customers with referral rewards, increase order values, reduce house labour cost much more. Contact support@yupit.io"></meta>
			
			<meta property="og:type" content="website"></meta>
			<meta property="twitter:card" content="summary_large_image"></meta>
          </Helmet>

          <ImBusinessMainSlider></ImBusinessMainSlider>
          <section className="imbusiness-section-2">
              <Container className="container text-center">
              <Row className=" justify-content-center align-items-center">
                  <Col xl={4} lg={4}  md={6} sm={10} >
                        <img src={calculatNowSectionMainImage} className="img-fluid mb-md-0 mb-4" alt=""/>
                  </Col>
                  <Col xl={8} lg={4}  md={6} sm={10} className=" text-md-right text-center" >
                      <h2 className="section-heading mb-2">Quantify the benefits of our partnership</h2>
                      <p className="label-text-2  mb-3">Find out exactly how much your revenue will increase in collaboration with YupiT</p>
                      
                          <Link to="/calculator" className="btn btn-success ">Calculate Now</Link>
                       
                   </Col>
                </Row>
              
                
              </Container>
          </section>
          <CustomerJourny></CustomerJourny>
          <WhyJoinYupIT></WhyJoinYupIT>
          <HowJoinYupIT></HowJoinYupIT>
          <ContectIMBusinessForm/>
          <OurFeature></OurFeature>
          <WhitePaper></WhitePaper>
          <Faq></Faq>
          <section className="imbusiness-section-9">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6">
                    <ul className="contact-info">
                      <li>
                          <div className="icon"><img src={icon1} className="img-fluid d-inline"/></div>
                          <div className="contact-detail">
                              <h3 className="section-heading-3">45 St Georges Terrace,</h3>
                              <p className="label-text">Ground Floor, Perth, 6000</p>
                          </div>
                      </li>
                      <li>
                          <div className="icon"><img src={icon2} className="img-fluid d-inline"/></div>
                          <div className="contact-detail">
                              <a href="tel:+61 8 6262 3559" target="_blank" className="section-heading-3  ">+61 8 6262 3559</a>
                              <p className="label-text">Mon to Fri 9am to 6pm</p>
                          </div>
                      </li>
                      <li>
                          <div className="icon"><img src={icon3} className="img-fluid d-inline"/></div>
                          <div className="contact-detail">
                              <a href="mailto:support@yupit.io" target="_blank" className="section-heading-3  ">support@yupit.io</a>
                              <p className="label-text">Send us your query anytime!</p>
                          </div>
                      </li>
                    </ul>
                </div>   
                <div className="col-xl-8 col-lg-7 col-md-6 text-right">
                  <div className="content-right">
                    <h2 className="section-heading mb-2">Let us know how we can help</h2>
                    <p className="label-text">to learn more about implementing technology at your restaurant.</p>
                  
                    <ContactHelpMeBusiness></ContactHelpMeBusiness>
                  </div>
                </div>     
              </div>
            </div>
          </section>
      </Layout>
      </>
    )}
    />
			</>
		)
	}	
	
}

export default imbusiness	



