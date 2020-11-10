import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../Header/Header';
import { Container } from 'semantic-ui-react';
import Footer from '../Footer/Footer';
// import Maintenance from '../../Maintenance';

export function AppLayout(props){
    return(
        <div className='web-app-layout'>
            <HeaderNav/>
            <Container className='content_container'>
                {props.children}
            </Container>
            <Footer/>
        </div>
    )
}