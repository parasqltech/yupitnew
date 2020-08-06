

import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from  'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
const options = {
  nav: true,
  rewind: true,
  autoplay: false,
  loop: false,

rewind: true,
  nav:false,
  dots:false,
  checkVisible:false,
  slideBy:2,
  responsive:{
      0:{
          items:1
      },
      768:{
        items:1
    },
      
      992:{
          items:1
      },
  }
};
// const events = {
//     onChanged: function(event) { let ActiveSlide= event.item.index; 
     
 
// },
// };

class StepToGetRewardSection extends React.Component {
  constructor(props) {
		super(props);
            this.state = {
              
            } 
	        this.stepClick = this.stepClick.bind(this);
        }
        stepClick = event => {
        }
  render() {
    

  const StepToGetRewardSectionText = this.props.data.allWordpressWpReferafriend;
    return(
      <>
 <section className="refer-a-friend-section-2 ">
                
                <Container>
             
                   
<div id="counter"></div> 
                    {StepToGetRewardSectionText && StepToGetRewardSectionText && StepToGetRewardSectionText.edges.map(
                                prop => {
                                  return (
                                    <>
                               
                    <h2 className="section-heading text-center font-weight-semi-bold mb-3 " dangerouslySetInnerHTML={{ __html: prop.node.acf.follow_the_step_to_get_reward_heading}}></h2>
                    <p className="label-text text-center  mb-4">Share &amp; earning the reward has never been simpler</p>
                  
                    <ul className="StepTab">
                    { prop.node.acf.follow_the_step_to_get_reward_step.map(
                            (prop2,i) => {
                              return (
                                <>
                                  <li onClick={() => this.refs.StepToGetRewardSectionText.to(i, 1000)}>{prop2.step_name}</li>
                                </>
                              )})}
                          
                                <>
                                 
                                 
                                </>
                               
                    </ul>
                    <OwlCarousel ref="StepToGetRewardSectionText" className="owl-theme p-0 p-md-4"  {...options}  >
                          { prop.node.acf.follow_the_step_to_get_reward_step.map(
                            prop1 => {
                              return (
                                    <>
                                    <div >
                                      <Container>
                                        <Row className="justify-content-center align-items-center">
                                          <Col lg={5} md={6} sm={5} className="mb-4 col-8">
                                            <div className="text-center">
                                            <img  src={prop1.follow_the_step_to_get_reward_step_image.localFile.childImageSharp.fixed.base64} width="356" className="img-fluid d-inline" alt={prop.node.acf.team_member_name}/>
                                            </div>
                                          
                                          </Col>
                                          <Col lg={5} md={6} sm={7} className="mb-md-4 mb-0 text-sm-left  text-center">
                                          <p className="section-heading-3 mb-1 text-dark font-weight-semi-bold" dangerouslySetInnerHTML={{ __html: prop1.follow_the_step_to_get_reward_step_title}}></p>
                                          <p className="label-text" dangerouslySetInnerHTML={{ __html: prop1.follow_the_step_to_get_reward_step_description}}></p>
                                          </Col>
                                        </Row>
                                      </Container>
                                   
                                        
                                     
                                    </div>
                                        </>
                                    )
                                }
                            )}
                       </OwlCarousel>
                    </>
                      )
                                }
                            )}
                            
                </Container>
            </section>
           
                       
      </>
        
    )
  }
}

const StepToGetReward = () => (
    <StaticQuery
      query={graphql`
        query {
            allWordpressWpReferafriend {
                edges {
                  node {
                    acf {
                      
                      follow_the_step_to_get_reward_heading
                      follow_the_step_to_get_reward_step {
                        step_name
                        follow_the_step_to_get_reward_step_description
                        follow_the_step_to_get_reward_step_title
                        follow_the_step_to_get_reward_step_image {
                          localFile {
                            childImageSharp {
                            fixed(base64Width: 356)  {
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
      
    render={(data) => <StepToGetRewardSection data={data} />}
      />
  )
  
  export default StepToGetReward




