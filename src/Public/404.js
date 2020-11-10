import React, { Component } from 'react';
import { Segment, Header, Button, Container, Grid, Icon } from 'semantic-ui-react';
import './404.scss';
import Pengumuman from './Content/Pengumuman';

class NotFound extends Component{
    render() {
        return (
            <Container className='web-404-container'>
                <br/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={11} tablet={16} mobile={16}>
                            <Segment textAlign='center' vertical  className='content_segment'>
                                <Icon className='ikon' name='warning sign' size='massive' color='yellow'/>
                                <Header as='h1' className='text_header' data-text='TIDAK DITEMUKAN'>
                                    TIDAK DITEMUKAN
                                    <Header.Subheader>
                                        Halaman yg dituju tidak tersedia (404)
                                    </Header.Subheader>
                                </Header>           
                                <br/>
                                <br/>
                                <br/>
                                <Button as='a' href='/'>Beranda</Button>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column computer={4} tablet={16} mobile={16}>
                            <Pengumuman/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default NotFound;

