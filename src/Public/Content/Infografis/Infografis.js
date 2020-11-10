import React, { Component } from 'react';
import { Container, Grid, Segment, Divider } from 'semantic-ui-react';
import Pengumuman from '../Pengumuman';
import './Infografis.scss';

class Infografis extends Component{
    render() {
        return (
            <div>
                <Container>
                    <br/>
                    <br/>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column computer={11} tablet={16} mobile={16}>
                                <Divider horizontal>Infografis Desa</Divider>
                                <Segment vertical className='content_segment'>

                                </Segment>
                            </Grid.Column>
                            <Grid.Column computer={5} tablet={16} mobile={16}>
                                <Pengumuman/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Infografis;