import React, { Component } from 'react';
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col,Form,FormControl ,Button} from  'react-bootstrap';
import Layout from '../components/Layout'
import MainSection from '../components/ReferAFriend/MainSection'
import Loadable from 'react-loadable';
import ReferAFriendFrom from '../components/Contact/ReferAFriend'
const StepToGetReward = Loadable({
    loader: () => import("../components/ReferAFriend/StepToGetReward"),
    loading: () => null,
    delay: 10,
    timeout: 10,
})
class ReferAFriend extends Component {
    render() {
        return (
            <>
             <Layout>
                 <MainSection></MainSection>
                <StepToGetReward></StepToGetReward>
                <ReferAFriendFrom></ReferAFriendFrom>
            </Layout>
            </>
        );
    }
}

export default ReferAFriend;


