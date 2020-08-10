import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { Container, Col, Card, Row,ListGroup, Accordion, Form, Button, FormControl } from  'react-bootstrap';

class ContactJobApply extends React.Component{
  
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
  
    this.state = {
          first_name: '',
          last_name: '',
          email: '',
          number: '',
          goal: '',
          position: '',
          cctc: '',
          portfolio: '',
          resume: '',
        
    }
    this.submitForm = this.submitForm.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setln = this.setln.bind(this);
    this.email = this.email.bind(this);
    this.number = this.number.bind(this);
    this.position = this.position.bind(this);
    this.portfolio = this.portfolio.bind(this);
    this.resume = this.resume.bind(this);
  }
  
  position(e) {
    this.setState({
      position: e.target.value
    });
  }
  
  portfolio(e) {
    this.setState({
      portfolio: e.target.value
    });
  }
  resume(e) {
    var v = e.target.value.toLowerCase();
    const possibleStrings = ['pdf', 'doc', 'docx'];
    var flag = 0;
    possibleStrings.map(item =>{
      if(v.includes(item)){
        
        flag = 1;
      }
    });
    console.log(flag);
    
    if(flag == 1){
      this.setState({
        resume: e.target.value
      });
    }
  }
  
  setTitle(e) {
    this.setState({
      first_name: e.target.value
    });
  }
  setln(e) {
    this.setState({
      last_name: e.target.value
    });
  }
  email(e) {
    this.setState({
      email: e.target.value
    });
  }

  number(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({
        number:  e.target.value,
      });
    } 
    
  }
  
  
  
  submitForm() {
    if (this.validator.allValid()) {
    
    document.getElementById('form').submit()
    } else {
    this.validator.showMessages();
    // rerender to show messages for the first time
    // you can use the autoForceUpdate option to do this automatically`
    this.forceUpdate();
    }
  }
  
  render (){
    return(
      <>
      <section className="career-section-5" >
      <Container>

          <Form method="post"  id="form" action="" className="formdiv">
              <h2 className="section-heading font-weight-semi-bold mb-4 text-center">Are you Ready?</h2>
          <Row className="justify-content-center">
                    <Col md={11} >
                <Row>
                    <Col sm={6} className="mb-3" >
                        <label className="label-text">First Name</label>
                        <FormControl  type="text"  placeholder="First Name"  name="first_name" value={this.state.first_name} onChange={this.setTitle}  />
                        {this.validator.message('First Name', this.state.first_name, 'required|alpha')}
                    </Col>
                    <Col sm={6} className="mb-3" >
                        <label className="label-text">Last Name</label>
                        <FormControl  type="text" placeholder="Last Name"  name="last_name" value={this.state.last_name} onChange={this.setln} />
                        
                        {this.validator.message('Last Name', this.state.last_name, 'required|alpha')}
                    </Col>
                    <Col sm={6} className="mb-3" >
                        <label className="label-text">Email</label>
                        <FormControl  type="email" name="email"   value={this.state.email} onChange={this.email} placeholder="Email" name="email" />
                        {this.validator.message('Email', this.state.email, 'required|email')}
                                             
                    </Col>
                    <Col sm={6} className="mb-3" >
                        <label className="label-text">Contact Number</label>
                        <FormControl  type="text" maxLength="10" minLength="10" inputMode='numeric' value={this.state.number} onChange={this.number} name="number" placeholder="Contact Number" />
                        {this.validator.message('Contact Number', this.state.number, 'required')} 
                    </Col>
                    
                    
                    <Col sm={6} className="mb-3" >
                        <label className="label-text">Resume/Cv</label>
                        <div className="input-group ">
                        <FormControl  type="text"  className="form-control mr-0" placeholder="Choose File" readOnly="readonly"/>
                                    <label className="input-group-btn mb-0">
                                <span className="btn btn-secondary uploadBtn">
                                    Browse<input type="file" value={this.state.resume} onChange={this.resume} accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="d-none" required name="resume"/>     
                                </span>
                            </label>
                        </div>
                        
                        {this.validator.message('Resume', this.state.resume, 'required')}
                    </Col>
                    <Col sm={6} className="mb-3" >
                        <label className="label-text">Portfolio</label>
                        <FormControl  value={this.state.portfolio} onChange={this.portfolio} name="Portfolio" placeholder="Portfolio"/>
                        {this.validator.message('Portfolio', this.state.portfolio, 'required')}
                    </Col>
                    <Col sm={12} className="mb-3" >
                        <label className="label-text">Select Position</label>
                        <FormControl as="select" value={this.state.position} id="des" onChange={this.position}  name="position" required>
                            <option value="">Please Select</option>
                            <option id ="1" value="Front End Developer">Front End Developer</option>
                            <option id ="2" value="PHP Developer">PHP Developer</option>
                            <option id ="3" value="UI/UX Designer">UI/UX Designer</option>
                            <option id ="4" value="HR Executive">HR Executive</option>
                            <option id ="5" value="SEO Executive">SEO Executive</option> 
                            <option id ="6" value="Content Writer">Content Writer</option>
                            <option id ="7" value="Graphic Designer">Graphic Designer</option>
                            <option id ="8" value="Junior WordPress Developer">Junior WordPress Developer</option>
                            <option id ="9" value="IOS Developer">IOS Developer</option>
                            <option id ="10" value="Android Developer">Android Developer</option>
                            <option id ="11" value="Programmer / Developer">Programmer / Developer</option>
                            <option id ="12" value="Customer Service Representative">Customer Service Representative</option>
                            <option id ="13" value="Strategic Account Manager">Strategic Account Manager</option>
                        </FormControl>
                        {this.validator.message('Position', this.state.position, 'required')}
                    </Col>
                    <Col sm={12} className="mb-3">
                        <label className="label-text">Few words... </label>
                        <FormControl  as="textarea" rows="3"  name="Fewwords"   placeholder="How'd you hear about YupiT?"/>
                    </Col>
                    <Col sm={12} className="text-center" >
                        <input type="hidden" className="form-control" placeholder="Enter your name" name="url" value="/career" />
                        <input type="hidden" className="form-control" name="form_name" value="Career" />
                        <Button as="button" onClick={this.submitForm} variant="default" className="border-0" value="Submit Application">Submit Application</Button>
                                                
                    </Col>
                    
                    
                </Row>
                </Col>
                    
                    
                    </Row>
          </Form>
      </Container>
          
      </section>
                 
      
    </>
    )
  }
}

export default ContactJobApply