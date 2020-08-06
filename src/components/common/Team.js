
import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby'

import { Container, Col, Nav, Row, Card, ListGroup, Button } from  'react-bootstrap';
import FontAwesome from 'react-fontawesome'


const Team = () => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressAcfTeammember {
                edges {
                  node {
                    acf {
                      team_member_name
                      team_member_position
                      team_member_story
                      team_member_image {
                        localFile {
                          childImageSharp {
                            fixed(base64Width: 400) {
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
    `}
      render={data => (
            <>
                <section className="team-section-1">
                           
                    <Container>
                        <h2 className="section-heading font-weight-semi-bold text-center ">You may work with</h2>
                        <Row className="justify-content-center  mb-4">
                        <Col lg={8} md={4}  sm={6}>
                            <p className="label-text-2 text-center">Here are some of the key YupiT Members who lead our vision towards better food for more people.</p>
                        </Col>
                        </Row>
                        <Row className="justify-content-center "> 
                        {data &&
                              data.allWordpressAcfTeammember &&
                              data.allWordpressAcfTeammember.edges &&
                              data.allWordpressAcfTeammember.edges.map(
                                prop => {
                                  return (
                                  <>

                            
                                                <Col lg={3} md={4}  sm={6} className="teamMember">
                                                    <Card className=" shadown-none p-0">
                                                        <Card.Body className="p-0 border-none">
                                                        <div className="content">
                                                            <div className="front">
                                                                <img src={prop.node.acf.team_member_image.localFile.childImageSharp.fixed.base64} className="img-fluid w-100" alt={prop.node.acf.team_member_name}/>
                                                          
                                                            </div>
                                                            <div className="back teamMemberImage">
                                                            <img src={prop.node.acf.team_member_image.localFile.childImageSharp.fixed.base64} className="img-fluid w-100" alt={prop.node.acf.team_member_name}/>
                                                            <div className="details-overly">

                                                              <p className="text-white p-3"  dangerouslySetInnerHTML={{ __html: prop.node.acf.team_member_story}}></p>
                                                            </div>
                                                            </div>
                                                          </div>
                                                         
                                                       </Card.Body>
                                                        <Card.Footer className="border-top-0 bg-white  pl-0">
                                                            <p className="label-text-2 text-dark font-weight-semi-bold mb-0" dangerouslySetInnerHTML={{ __html: prop.node.acf.team_member_name}} ></p>
                                                            <p className="label-text  mb-0" dangerouslySetInnerHTML={{ __html: prop.node.acf.team_member_position}} ></p>
                                                        </Card.Footer>
                                                       
                                                    </Card>
                                                </Col>
                                            </>
                                        )
                                    }
                                )}
                               
                           
                        </Row>
                        <br/>
                       
                    </Container>
                </section>
            </>
      )
      }
      />
  )
  
  export default Team
           



