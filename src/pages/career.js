


import React, {Component} from "react"
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import LazyLoad from 'react-lazyload';
import CurrentOpenings from '../components/Career/CurrentOpenings';
import MainSection from '../components/Career/MainSection';
import WhyChooseUs from '../components/Career/WhyChooseUs';
import Team from '../components/common/Team';
import ContactJobApply from '../components/Contact/ContactJobApply';
import Loadable from 'react-loadable';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const GalleryComponent = Loadable({
    loader: () => import("../components/Career/Gallery"),
    loading: () => null,
    delay: 10,
    timeout: 10,
})



  

class career extends React.Component {
	
	
	
	render() {
		return(
            <>
			 <Layout>
         
            <> 
                <MainSection></MainSection>
                <WhyChooseUs></WhyChooseUs>
                <CurrentOpenings></CurrentOpenings>
                <Team/>
                <ContactJobApply/>
                <GalleryComponent/>
            </>
	</Layout>
        </>
		)
	}
}




  
export default career
