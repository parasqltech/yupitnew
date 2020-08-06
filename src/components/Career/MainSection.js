
import React, {Component} from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import { Container, Col, Nav, Row, Card, Accordion, Button } from  'react-bootstrap';

import CareerMainImage from '../../img/careerMain.png';
import scrollTo from 'gatsby-plugin-smoothscroll';

const MainSection = () => (
    <StaticQuery
      query={graphql`
      query {
        allWordpressWpCareer {
            edges {
              node {
                acf {
                  career_page_section_1_main_description
                  career_page_section_1_main_heading
                  career_page_section_1_main_button_name
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
      
                           
                       
                <section className="career-section-1 bg-light">
                        <Container>
                            {data &&
                              data.allWordpressWpCareer &&
                              data.allWordpressWpCareer.edges &&
                              data.allWordpressWpCareer.edges.map(
                                prop => {
                                  return (
                                  <>
                                  <Row className="align-items-center justify-content-center">
                                  <Col lg={5}  md={6} className="d-flex d-md-none justify-content-center">
                                      <img src={CareerMainImage} className="img-fluid mb-4" alt=""/>
                                    </Col>
                                    <Col lg={6}  md={6} >
                                          <h1 className="section-heading font-weight-semi-bold  " dangerouslySetInnerHTML={{ __html: prop.node.acf.career_page_section_1_main_heading}}></h1>
                                      <p className="label-text-2  mb-4" dangerouslySetInnerHTML={{ __html: prop.node.acf.career_page_section_1_main_description}}></p>
                                      <Button onClick={() => scrollTo('#form')} variant="default">{prop.node.acf.career_page_section_1_main_button_name}</Button>

                                    </Col>
                                    <Col lg={5}  md={6} className="d-none d-md-flex">
                                      <img src={CareerMainImage} className="img-fluid" alt=""/>
                                    </Col>
                                  </Row>
                               
                                       
                                </>
                                )
                                
                        }
                      )}
                        </Container>
                </section>
        
          
        </>
      )
      }
      />
  )
  
  export default MainSection
