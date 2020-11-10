import React, { Component } from 'react';
import './Footer.scss';
import { Segment, Icon, Header } from 'semantic-ui-react';

class Footer extends Component{
    render() {
        return (
            <Segment textAlign='center' vertical inverted className='admin-footer'>
                <Header textAlign='center' inverted as='h5'>
                    <Icon name='settings' />
                    KalaGemet Software 2020 &copy; Copyright
                </Header>
            </Segment>
        );
    }
}

export default Footer;