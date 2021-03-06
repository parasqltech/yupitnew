import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import {Accordion, Card, Button , Collapse} from 'react-bootstrap';


class FaqSection extends React.Component{
constructor(props) {
        super(props);
        
     }
	handleToggle = (id) => {
		
        document.querySelectorAll('.card:not(.id'+id+')').forEach(function(button) {	
			if(!button.classList.contains(".id"+id)){
				button.classList.remove('active');
			}
		});
		
		if (document.querySelector(".id"+id).classList.contains('active')) {
		  document.querySelector(".id"+id).classList.remove('active');
		} else {
		  document.querySelector(".id"+id).classList.add('active');
		}
		
		
    } 
 render() {
 
  const Faq = this.props.data.allWordpressWpFaq;
   return (
    <>
    
            
          
            <Accordion defaultActiveKey="0">
        
                              {Faq && Faq && Faq.edges.map(
                                prop => {
                              return (
                                <>
                              {prop.node.acf.faq.map(
                                  (prop1,i) =>{
                                    return(
                                     <>
                                  <Card className="p-0 mb-4" className={"p-0 mb-4 id"+i} >
                                    <Card.Header  className="border-0" >
                                      <Accordion.Toggle onClick={() => {this.handleToggle(i)}} className="label-text border-0 text-dark mb-0 "   as={Card.Title} eventKey={i}>
                                        <h3 className="label-text-2 text-dark mb-0" >{prop1.question}</h3><span className="accrodian-icon"><i className="fa fa-plus"></i></span>
                                    
                                      </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={i}>
                                      <Card.Body><div className="wordpress-content" dangerouslySetInnerHTML={{ __html: prop1.answer}}></div></Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                  </>
                                    )
                                  }
                                )}
                               
                           
                            </>
                 )
                }
          )}
              
            </Accordion>
               

            
    </>
    		
    )
  }
}
const YupiTMaxFaq = () => (
  <StaticQuery
  query={graphql`
    query {
        allWordpressWpFaq(filter: {title: {eq: "YupiTMaxFaq"}}) {
            edges {
                node {
                acf {
                    faq {
                    question
                    answer
                    }
                }
                title
                }
            }
        }
    }
  `}
    render={(data) => <FaqSection data={data} />}
  
    />
)

export default YupiTMaxFaq;