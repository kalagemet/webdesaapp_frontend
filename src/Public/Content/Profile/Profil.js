import React, { Component } from 'react';
import { Container, Grid, Segment, Divider } from 'semantic-ui-react';
import Pengumuman from '../Pengumuman';
import './Profil.scss';

class Profil extends Component{
    render() {
        return (
            <Container className='profil-container'>
                <br/>
                <br/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={11} tablet={16} mobile={16}>
                            <Divider horizontal>Profil Desa</Divider>
                            <Segment vertical className='content_segment'>

                            </Segment>
                        </Grid.Column>
                        <Grid.Column computer={5} tablet={16} mobile={16}>
                            <Pengumuman/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Profil;