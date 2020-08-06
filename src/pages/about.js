


import React, {Component} from "react"
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import MainSection from '../components/About/MainSection';
import OurJourny from '../components/About/OurJourny';
import OurValues from '../components/About/OurValues';
import OurHistory from '../components/About/OurHistory';


import { Container, Col, Nav, Row, Card, Accordion, Button } from  'react-bootstrap';









class about extends React.Component {
	
	
	
	render() {
		return(
            <>
			 <Layout>
         
            <> 
            
            <MainSection></MainSection>
            <OurJourny></OurJourny>
            <OurValues></OurValues>
            <OurHistory></OurHistory>
            </>
	</Layout>
        </>
		)
	}
}




  
export default about