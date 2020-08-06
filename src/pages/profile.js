import React, { Component } from 'react';

import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Profile from '../img/profile.png'
import { Container, Col, Card, Row, FormControl, Form, Button } from  'react-bootstrap';
import {GoPencil} from 'react-icons/go'
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const mno = cookies.get('Phone');
const uid = cookies.get('Userid');
console.log(uid);

class profile extends Component {
  constructor(props) {
  super(props);
      this.state = {
         name:'',
         email:'',
         DOB:'',
         Avtar:'',
         Mobile:'',
         Msg:'',
      }
      this.submitForm = this.submitForm.bind(this);
      this.setName = this.setName.bind(this);
      this.setEmail = this.setEmail.bind(this);
      this.setAvtar = this.setAvtar.bind(this);
      this.setDOB = this.setDOB.bind(this);
      this.setMobile = this.setMobile.bind(this);
      this.setMsg = this.setMsg.bind(this);
  }

  componentWillMount(){
    axios.get('https://yupit.io/staging/api/profile/'+uid).then(res => {
      // console.log(res);
      var img = res.data.ResponseData.Avtar;
      cookies.set('ImgProfile',img);
      // console.log(cookies.get('ImgProfile'));
      if(img == ''){
        img = Profile;
      }
      this.setState({
        name: res.data.ResponseData.Name,
        email: res.data.ResponseData.Email,
        Avtar: img,
        DOB: res.data.ResponseData.DOB,
        Mobile: res.data.ResponseData.Mobile,
      })
    })
    }
  setName(e) {
      this.setState({
          name: e.target.value
      });
  }
  setEmail(e) {
      this.setState({
          email: e.target.value
      });
  }
  setDOB(e) {
      this.setState({
          DOB: e.target.value
      });
  }  
  setMsg(e) {
      this.setState({
          ReviewText: e.target.value
      });
  }   
  setAvtar(e) {
      this.setState({
          Avtar: e.target.files[0]
      });
  }
  setMobile(e) {
      this.setState({
          Mobile: e.target.value
      });
  } 
  submitForm() {
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('Avtar', this.state.Avtar);
    form_data.append('Name', this.state.name);
    form_data.append('DOB', this.state.DOB);
    form_data.append('Email', this.state.email);
    form_data.append('UserID', cookies.get('Userid'));
    let url = 'https://yupit.io/staging/api/profileupdate';

    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log(res.data);
      if (res.data.ResponseCode === 401) { 
          this.setState({Msg:res.data.ResponseMessage,
                   Resdata: []
              });
        }
        else{
          this.setState({Resdata: res.data.ResponseData});
          console.log(this.state.Resdata);
        }
    })
    .catch(err => console.log(err))
       
    }
    render() {
      return (
        <>
         <Layout>
            <section className="profile-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col xl="6 ">
                            <Card className=" text-left bg-light">
                            <Form className="d-block text-center">
                            <div className="ProfileImage text-center">
                                <div className="ProfileImageEdit">
                                    <img src={this.state.Avtar} alt="" className="img-fluid"/>
                                    <label className="editbutton text-center"  for="editButtonImage">
     <input type="file" id="editButtonImage" className="position-absolute invisible " accept="image/png, image/jpeg" onChange={this.setAvtar} /><GoPencil />
                               
                                    </label>
                                </div>
                            </div>
                            <span Class="text-danger mb-2 d-block">{this.state.Msg}</span>
                            <h1 className="section-heading-2 font-weight-semi-bold text-center">{this.state.name}</h1>
                              
                                <Row className=" text-left">
                                   <Col xl="12" className="mb-3">
                                        <label>Name :</label>
                                        <FormControl placeholder="Name" onChange={this.setName} value={this.state.name}></FormControl>
                                   </Col>
                                   <Col xl="12" className="mb-3">
                                        <label>Date of Birth :</label>
                                        <FormControl placeholder="1999-01-01" onChange={this.setDOB} value={this.state.DOB}></FormControl>      
                                   </Col>
                                   <Col xl="12" className="mb-3">
                                        <label>Email :</label>
                                        <FormControl placeholder="Email" onChange={this.setEmail} value={this.state.email}></FormControl>      
                                   </Col>
                                   <Col xl="12" className="mb-3">
                                        <label>Mobile Number :</label>
                                        <FormControl  value={this.state.Mobile} disabled></FormControl>      
                                   </Col>
                                   
                                   <Col xl="12" className="text-center">
                                      <Button variant="default  mt-sm-4 mt-2" onClick={this.submitForm} as="submit">Update Profile</Button>
                                   </Col>
                                </Row>
                            </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Layout>
      </>
    );
  }
}


export default profile;



