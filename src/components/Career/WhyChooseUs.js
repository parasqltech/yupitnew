


import React, {Component} from "react"
import { Link, StaticQuery, graphql } from 'gatsby'
import { Container, Col, Row  } from  'react-bootstrap';

const WhyChooseUs = () => (
    <StaticQuery
      query={graphql`
      query {
          
        allWordpressWpCareer {
                edges {
                node {
                    acf {
                      career_page_why_choose_yupit_section_heading
                      career_page_why_choose_yupit_section_description
                      career_page_why_choose_yupit_section {
                          career_page_why_choose_yupit_section_list_description
                          career_page_why_choose_yupit_section_list_name
                          career_page_why_choose_yupit_section_list_icon {
                            localFile {
                                childImageSharp {
                                    fixed(base64Width: 90) {
                                        base64
                                    }
                                }
                            }
                          }
                      }
                    }
                }
                }
            }
        }
      `}
      render={data => (
        <>
         <section className="career-section-2 ">
                        <Container>
                            
                            {data &&
                              data.allWordpressWpCareer &&
                              data.allWordpressWpCareer.edges &&
                              data.allWordpressWpCareer.edges.map(
                                prop => {
                                  return (
                                  <>
                                
                            <Row className="justify-content-center">
                            <Col  lg={10} className="">
                            <h2 className="section-heading font-weight-semi-bold mb-4 text-center mb-1" dangerouslySetInnerHTML={{ __html:prop.node.acf.career_page_why_choose_yupit_section_heading }}></h2>
                            <p className="label-text-2 text-center mb-4" dangerouslySetInnerHTML={{ __html:prop.node.acf.career_page_why_choose_yupit_section_description }} ></p>
                            </Col>
                            <Col  lg={12} className=" pt-sm-4 pt-0">
                            <Row>
                                    {prop.node.acf.career_page_why_choose_yupit_section.map(
                              (prop1) =>{
                                return (
                                <Col lg={6} className="mb-4   pb-0">
                                  <div className=" bg-light p-4 ">
                                    <div className="icon-box ">
                                        <img src={prop1.career_page_why_choose_yupit_section_list_icon.localFile.childImageSharp.fixed.base64} className="img-fluid" width="90"/>
                                    </div>
                                    <div className="content-box">
                                        <p className="section-heading-3 mb-1 font-weight-semi-bold" dangerouslySetInnerHTML={{ __html: prop1.career_page_why_choose_yupit_section_list_name}}></p>
                                        <p className="label-text mb-0" dangerouslySetInnerHTML={{ __html: prop1.career_page_why_choose_yupit_section_list_description}}></p>
                                    </div>
                                    </div>
                                </Col>)
                        }
                      )}
                      </Row>
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
  
  export default WhyChooseUs
