import React , {useState } from 'react'
import ReactDOM from "react-dom";
import { Link, StaticQuery, graphql } from 'gatsby'

import { Container, Col, Nav, Row, Card, Accordion, Button } from  'react-bootstrap';




const WhyJoinYupIT = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpImbusinessmain {
          edges {
            node {
              acf {
                i_m_business_why_join_yupit_sub_heading
                i_m_business_why_join_yupit_heading_line
                i_m_business_why_join_yupit_content {
                  thumbnial_title
                  thumbnial_content
                  thumbnial_icon {
                      localFile {
					childImageSharp {
					  id
					  fixed(base64Width: 120) {
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
        {data &&
                data.allWordpressWpImbusinessmain &&
                data.allWordpressWpImbusinessmain.edges &&
                data.allWordpressWpImbusinessmain.edges.map(
                  prop => {
                    return (
                        <section className="imbusiness-section-4 bg-white">
                          <Container className="container">
                              <h2 className="section-heading text-center mb-2">{prop.node.acf.i_m_business_why_join_yupit_heading_line}</h2>
                              <p className="sub-heading text-center mb-4">{prop.node.acf.i_m_business_why_join_yupit_sub_heading}</p>
                              <Card>
                              <Row className=" d-flex justify-content-between">
                                  {prop.node.acf.i_m_business_why_join_yupit_content.map(
                                    (prop1,i) =>{
                                      return (
                                        <Col xl={3} md={6}  className=" mb-4 whyJoinList">
                                          
                                            <div className="listBox text-md-left text-center h-100">
                                              <img src={prop1.thumbnial_icon.localFile.childImageSharp.fixed.base64} width="80" className="img-fluid d-inline mb-4" alt=""/>
                                            <h3 className="sub-heading font-weight-semi-bold ">{prop1.thumbnial_title}</h3>
                                              <div className="label-text" dangerouslySetInnerHTML={{ __html: prop1.thumbnial_content}}></div>
                                              </div>
                                             
                                        </Col>
                                     
                                      )
                                    }
                                  )} 
                            </Row>
                              </Card>
                              
                          </Container>
                        </section>
                      )
                  }
              )
          }
      </>
    )
    }
    />
)

export default WhyJoinYupIT