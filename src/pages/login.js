
import React,{Component} from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Particles from 'react-particles-js';
import Loadable from 'react-loadable';
import { Container, Col, Card ,  Row, FormControl, Form, Button } from  'react-bootstrap';
import logo from '../img/logo.png'

import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';
import { Redirect } from 'react-router'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Loginslider = Loadable({
    loader: () => import("../components/login/mainSlider"),
    loading: () => null,
    timeout: 100,
})

class login extends  React.Component {

	constructor(props) {
		super(props);
		this.validator = new SimpleReactValidator();
		this.state = {
			invisible: '',	
			visible: '',
			inputValue :'',
			PhoneNumber: '',
			Msg:'',
			mobileno: '',
			veriftotp: '',
			isModalOpen: false,
			OtpSent: false,
			login: false,
			redirect: false
			
		} 
    
		this.handleChange = this.handleChange.bind(this);
		this.loginButton = this.loginButton.bind(this);
		this.sendOtp = this.sendOtp.bind(this);
		this.editNumber = this.editNumber.bind(this);		
	}
	
	handleChange = event => {
		const re = /^[0-9\b]+$/;
		if (event.target.value === '' || re.test(event.target.value)) {
			this.setState({PhoneNumberCount:event.target.value.length,
				mobileno:  event.target.value,
				PhoneNumber: event.target.value
			});
		}	
	 }
	handleverifyotp = event => {
		const re = /^[0-9\b]+$/;
		if (event.target.value === '' || re.test(event.target.value)) {
			this.setState({
				verifyotp:  event.target.value,
			});
		}
	}
	 handleOptChange = event => {
		const re = /^[0-9\b]+$/;
		if (event.target.value === '' || re.test(event.target.value)) {
			this.setState({
				OTP:  event.target.value,
			});
		}	
	 }
	 
	loginButton() {
	 	let { history } = this.props
	 	if (this.validator.allValid()) {
	 	axios.post('https://yupit.io/staging/api/verifyotp', { mobileno: `${this.state.mobileno}`,otp: `${this.state.verifyotp}` })
	    .then(response => {
	    	
	    	this.setState({
	    		ResCode: response.data.ResponseCode,
	    		Resdata: response.data.ResponseData,
	    		login: true,
			});
			console.log(this.state.Resdata);
			cookies.set('Userid', this.state.Resdata.id, { path: '/' });
			cookies.set('Phone', this.state.Resdata.Phone, { path: '/' });
			cookies.set('IsLocked',this.state.Resdata.IsLocked, { path: '/' });
			cookies.set('Promocode',this.state.Resdata.PromoCode, { path: '/' });
			console.log(cookies.get('IsLocked')); 
			console.log(cookies.get('Userid'));
// 			window.location.href = '/';
	    })
	    .catch(error => console.log(error));
	    }else {
            this.validator.showMessages();
            this.forceUpdate();
        }		   
	 }
	sendOtp = event => { 
	 	// if (this.validator.allValid()) { 
		 	axios.post('https://yupit.io/staging/api/sendotp', { mobileno: `${this.state.mobileno}` })
		    .then(res => { 
		    	console.log(res.data.ResponseCode);
		    	if (res.data.ResponseCode === 401) {
			      this.setState({Msg:res.data.ResponseMessage,
			    				   Resdata: []
								});
			    }
			    else{
			    	this.setState({OtpSent: true});
			    	this.setState({PhoneNumberValue:this.state.mobileno,
			    				   Resdata: res.data.ResponseData
								});
			        
			    }
		    	
		        console.log(this.state.Resdata);
		        // console.log(PhoneNumberValue);
		    })
		    .catch(error => console.log(error));
		// }else {
  //           this.validator.showMessages();
  //           this.forceUpdate();
  //       }		 
	 }
	 editNumber = event => {
		this.setState({OtpSent: false});
		this.setState({ isModalOpen: false })
		 
	 }

	render() {

		return (
			<>
			<div className="particles-main">
                <Particles params={{"particles":{"number":{"value":8,"density":{"enable":false,"value_area":1583.5576706700122}},"color":{"value": ["#FF9C80", "#8DE8D6", "#FECEB2", "#D0EBC4"]},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":25.003542168473878,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"top-right","random":true,"straight":true,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":3583.8410441479223,"rotateY":1166.8319678621144}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":709.4594594594589,"size":177.36486486486473,"duration":0.3378378378378376,"opacity":0.7516891891891886,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}} />
            </div>
				<section className="login-section  vh-100 d-flex align-items-center">
					<Container>
						
						<Row className=" align-items-center justify-content-center">
							<Col lg={5}  md={6} className="h-100">
								<Card className="h-100">
									<Form className={(this.state.OtpSent===true)?("d-none"):("d-block")}>
										<Row className="justify-content-center">
											<Col lg={10}>
												<div className="text-center mb-4"><img src={logo} width="150px" className="img-fluid"/></div>
												<label className="section-heading-2 font-weight-semi-bold d-block mb-4  text-center">Sign in to YupiT</label>
												<FormControl maxLength="10" name="mobileno" className="mb-3" inputMode='numeric'  value={this.state.mobileno}   placeholder="Enter your mobile number" onChange={this.handleChange} />
												<span Class="text-danger mb-2 d-block">{this.state.Msg}</span>
												<Button variant="primary btn-block mb-4" onClick={this.sendOtp} className="visible font-weight-semi-bold"> Request Sign In Code</Button>
											</Col>
										</Row>
									</Form>
									<Form action="/" method="post" className={(this.state.OtpSent===true)?("d-block"):("d-none")}>
										<Row className="justify-content-center">
											<Col lg={10}>
												<div className="text-center mb-4"><img src={logo} width="150px" className="img-fluid"/></div>
													<label className="section-heading-3 font-weight-semi-bold d-block mb-4  text-center">Cool! We texted a code to {this.state.PhoneNumberValue}.</label>
												<FormControl maxLength="6"  inputMode='numeric' name="verifyotp" className="mb-3" value={this.state.verifyotp}  placeholder="Confirmation Code"  onChange={this.handleverifyotp} />
												<span Class="text-danger mb-2 d-block">{this.validator.message('verifyotp', this.state.verifyotp, 'required')}</span>
												<Button variant="primary btn-block mb-4" onClick={this.loginButton} className=" font-weight-semi-bold btn-primary btn btn-block"> Sign in</Button>
												{/* <Button variant="primary btn-block" onClick={this.loginButton} className=" font-weight-semi-bold btn-primary"> Sign in</Button> */}
												<Button  variant="bg-none border-none  btn-block mb-4">Resend OTP</Button>
											</Col>
										</Row>
									</Form>
								</Card>
							</Col>
							<Col lg={6} md={6} className="d-none d-md-flex">
								<Loginslider/>

							</Col>
						</Row>
					</Container>
				
	  
	  </section>
	</>
 );
}
}

export default login
