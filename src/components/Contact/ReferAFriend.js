import React, { Component } from 'react';
import { Container, Row, Col,Form,FormControl ,Button,Alert} from  'react-bootstrap';

import ReferAFriendImage from '../../img/other/refer-a-friend-thumbnial.png'
import {MdContentCopy} from 'react-icons/md'
import SimpleReactValidator from 'simple-react-validator';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const uid = cookies.get('Userid');
const upromocode = cookies.get('Promocode');

class ReferAFriend extends Component {
  
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
            this.state = {
                shown: "d-none",
            } 
            this.copyButton = this.copyButton.bind(this);
            this.verifyButton = this.verifyButton.bind(this);
            
        }
        handlerefer = event => {
            const re = /^[0-9\b]+$/;
            if (event.target.value === '' || re.test(event.target.value)) {
                this.setState({
                    mobileno:  event.target.value,
                });
            }
        }
     
        copyButton() {
            var self = this;
            let CopyText ="DXSFS50";
            navigator.clipboard.writeText(CopyText);
            self.setState({shown: "d-block"});
                
            setTimeout(
                function() {
                    self.setState({shown: "d-none"});   
                },3000);
           
          
        }
        verifyButton() {
            let { history } = this.props
            if(uid !== ''){
                if (this.validator.allValid()) {
                    axios.post('https://yupit.io/staging/api/userrefer', { ToMobile: `${this.state.mobileno}`,UserID: uid, PromoCode: upromocode })
                    .then(response => {
                        
                        this.setState({
                            Resdata: response.data.ResponseData,
                            
                        });
                        console.log(this.state.Resdata);
                    })
                    .catch(error => console.log(error));
                }else {
                    this.validator.showMessages();
                    this.forceUpdate();
                } 
            }else{
                 window.location.href = '/login';
            }
                     
         }
        
    render() {
        return (
            <>
            
           <section className="refer-a-friend-section-3 ">
                 <Container>
                 <Row className="align-items-center justify-content-center  ">
                            <Col xl={10} lg={12}  >
                     <h2 className="text-center section-heading font-weight-semi-bold">
                        Start sharing and get free access to exclusive deals &amp; rewards
                     </h2>
                     </Col>
                        </Row>
                       <Row className=" justify-content-center">
                            <Col xl={9} lg={8}  md={6}   className="pt-4 mt-0 pt-md-4 mt-md-4 ">
                              <Form className="InvitionForm">
                                <Row>
                                    <Col  xl={7} lg={7} md={12}  className="mb-3">
                                    <label className="pb-1">Enter Your Friend Mobile Number</label>
                                    <FormControl placeholder="Enter a mobile number" name="mobileno" value={this.state.mobileno}  onChange={this.handlerefer}></FormControl>
                                    <span Class="text-danger mb-2 d-block">{this.validator.message('mobileno', this.state.mobileno, 'required')}</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col  xl={7} lg={7} md={12}  className="mb-3">
                                        <label className="pb-1">My invite code</label>
                                        <div className="input-group">
                                            <FormControl className="mr-0" readOnly value={upromocode}  ></FormControl>
                                            <Button className="CopyButton"  onClick={this.copyButton}><MdContentCopy /></Button>
                                        </div>
                                        <p className={"text-success  pt-2 mb-0 "+ this.state.shown}>
                                        Invitation Code copied!</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={7} lg={7} md={12}   className="mb-4">
                                       
                                        <Button variant="default" onClick={this.verifyButton} >Invite your friend now</Button>
                                    </Col>
                                </Row>
                                </Form>
                            </Col>
                            <Col xl={3} lg={3}  md={6} >
                                <div className="ReferImage">
                                    <img src={ReferAFriendImage} className="img-fluid"/>  
                                </div>
                           </Col>
                        </Row>
                       
                    </Container>
                </section>
          
            </>
        );
    }
}

export default ReferAFriend;