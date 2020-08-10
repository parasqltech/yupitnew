import React, { Component } from 'react';
import { Container, Col, Form, Row, Card, Accordion, Button } from  'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const mno = cookies.get('Phone');
const uid = cookies.get('Userid');
const Islock = cookies.get('IsLocked');

class ContactChooseYourMembership extends Component {
   constructor(props) { 
    super(props);
      this.state = {
         loading: true,
         RessubData:'',
         suscriptionPlan:'',
         PlanSubtitle:'',
         PlanAmount:'',
         PlanTitle:'',
         PlanDesc:'',
         planid:'',
         Planflag:'',
         ResPlan1:[],
         ResPlan2: []
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  handleChange = event => {
    this.setState({
          suscriptionPlan: event.target.value
      });

  }
 
  componentWillMount(){
    if(uid === undefined){
      axios.get('https://yupit.io/staging/api/mswl').then(res => {
      this.setState({RessubData: res.data.ResponseData});
      })
    }else{
      axios.get('https://yupit.io/staging/api/membership/'+uid).then(res => {
      this.setState({RessubData: res.data.ResponseData});
      })
    }
    
  }

    handleSubmit(event) { 
        event.preventDefault();
        // console.log(this.state.suscriptionPlan);
        if( uid === undefined){
          window.location.href = '/login';
          
        }else{
          cookies.set('Planflag', this.state.suscriptionPlan);
          cookies.set('PlanID', this.actionInput.value);
          cookies.set('PlanAmount', this.PlanAmountInput.value);
          cookies.set('PlanSubtitle', this.PlanSubtitleInput.value);
          cookies.set('PlanDesc', this.PlanDescInput.value);
          window.location.href = '/payment';
        }
        
    }
    render() {
        console.log(this.state.RessubData);
        if (!this.state.RessubData.Plans) {
            return <span>Loading...</span>;
        }
        return (
            <>
            {(Islock == 1 )?(""):(<><section className="suscription-section-2">
                    <Container>
                         
                        <Row className="justify-content-center">
                            <Col lg={11}>
                                <h2 className="section-heading text-center">Choose Your Membership</h2>
                                <p className="label-text-2 text-center  mb-4  pb-2">Keep availing membership privileges by choosing one of these plans</p>
                            </Col> 
                        </Row>
                        <Form>
                            <Row>
                                <Col sm={6}>
                                    <label className="suscriptionPlan-custom-radio month3">
                                        <input type="radio" className="" onChange={this.handleChange} value={this.state.RessubData.Plans[0].Planflag} name="suscriptionPlan"/>
                                        <input type="hidden" name="planid" value={this.state.RessubData.Plans[0].PlanID} 
                                         ref={(input) => { this.actionInput = input }} />
                                        <input type="hidden" name="PlanAmount" value={this.state.RessubData.Plans[0].PlanAmount} 
                                         ref={(input) => { this.PlanAmountInput = input }} />
                                        <input type="hidden" name="PlanSubtitle" value={this.state.RessubData.Plans[0].PlanSubtitle} 
                                         ref={(input) => { this.PlanSubtitleInput = input }} />
                                        <input type="hidden" name="PlanDesc" value={this.state.RessubData.Plans[0].PlanDesc} 
                                         ref={(input) => { this.PlanDescInput = input }} />
                                        <div className="suscriptioBox" >
                                            <span className="timePeriod">{this.state.RessubData.Plans[0].PlanSubtitle}</span>
                                            <div className="d-block">
                                                <div className="suscriptionPrice ">${this.state.RessubData.Plans[0].PlanAmount}</div>
                                                <div className="offerName">{this.state.RessubData.Plans[0].PlanTitle}</div>
                                                <p className="label-text">{this.state.RessubData.Plans[0].PlanDesc}</p>
                                            </div> 
                                        </div>
                                    </label>
                                </Col>  
                                <Col sm={6}>
                                    <label className="suscriptionPlan-custom-radio month12">
                                        <input type="radio" className="" onChange={this.handleChange} value={this.state.RessubData.Plans[1].Planflag} name="suscriptionPlan"/>
                                        <input type="hidden" name="planid" value={this.state.RessubData.Plans[1].PlanID} 
                                         ref={(input) => { this.actionInput = input }} />
                                        <input type="hidden" name="PlanAmount" value={this.state.RessubData.Plans[1].PlanAmount} 
                                         ref={(input) => { this.PlanAmountInput = input }} />
                                        <input type="hidden" name="PlanSubtitle" value={this.state.RessubData.Plans[1].PlanSubtitle} 
                                         ref={(input) => { this.PlanSubtitleInput = input }} />
                                        <input type="hidden" name="PlanDesc" value={this.state.RessubData.Plans[1].PlanDesc} 
                                         ref={(input) => { this.PlanDescInput = input }} />
                                        <div className="suscriptioBox" >
                                            <span className="timePeriod">{this.state.RessubData.Plans[1].PlanSubtitle}</span> 
                                            <div className="d-block">
                                                <div className="suscriptionPrice ">${this.state.RessubData.Plans[1].PlanAmount}</div>
                                                <div className="offerName">{this.state.RessubData.Plans[1].PlanTitle}</div>     
                                                <p className="label-text">{this.state.RessubData.Plans[1].PlanDesc}</p>
                                            </div>   
                                        </div>
                                    </label>
                                       
                                </Col>   
                                <Col lg={12} className="text-center">
                                    <Button variant="default  mt-sm-4 mt-0" onClick={this.handleSubmit} as="submit">Buy membership plan</Button>
                                </Col>  
                            </Row>
                        </Form>
                        
                    </Container>
                </section></>)}
            </>
        );
    }
}

export default ContactChooseYourMembership;
