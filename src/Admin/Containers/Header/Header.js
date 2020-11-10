import React, { Component } from 'react';
import './Header.scss';
import { Segment, Header, Icon, Responsive, Grid, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class HeaderNav extends Component{
    state = {
        visible: false
    };

    sidebarButtonHandler = () =>{
        const {visible} = this.state;
        if(visible){
            this.setInvisible();
            this.setState({visible : false});
        }else if(!visible){
            this.setVisible(); 
            this.setState({visible : true});
        }
    }

    setInvisible(){
        const sidebar = document.getElementById('sidebar-segment');
        if(sidebar!==null){
            sidebar.classList.add('animating')
            sidebar.classList.remove('visible');
        }
    }

    setVisible(){
        const sidebar = document.getElementById('sidebar-segment');
        if(sidebar!==null){
            sidebar.classList.add('visible');
        }
    }

    render() {
        return (
            <div className='header-admin-container'>
                <Segment vertical className='header_segment'>
                    <Responsive {...Responsive.onlyMobile} >
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8} textAlign='left'>
                                    <Button onClick={this.sidebarButtonHandler} className='mobileNav-button' icon='sidebar' />
                                </Grid.Column>
                                <Grid.Column width={8} textAlign='right'>
                                    <Button color='red' icon='log out'/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Responsive>
                    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column className='sidebar-header'>
                                    <Header as='h3'>
                                        <Icon name='settings' size='large'/>
                                        <Header.Content>
                                            Admin Page
                                            <Header.Subheader>
                                                Control Panel Web App
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Grid.Column>
                                <Grid.Column textAlign='right' className='header-container'>
                                    <Button basic as={NavLink} to={'/web'} icon labelPosition='left' color='yellow'>
                                        Public Web
                                        <Icon name='eye'/>
                                    </Button>
                                    <Button color='red' icon labelPosition='right'>
                                        LogOut
                                        <Icon name='log out'/>
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Responsive>
                </Segment>
            </div>
        );
    }
}

export default HeaderNav;