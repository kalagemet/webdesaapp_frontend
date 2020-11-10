import React, { Component } from 'react';
import './Galeri.scss';
import { Grid, Container, Segment, Divider, Card, Pagination } from 'semantic-ui-react';
import Pengumuman from '../Pengumuman';

class Galeri extends Component{
    render() {
        return (
            <Container className='galeri-container'>
                <br/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={11} tablet={16} mobile={16}>
                            <Divider horizontal>Galeri Desa</Divider>
                            <Segment vertical className='content_segment'>
                                <Card.Group itemsPerRow={3} stackable centered>
                                    <Card link
                                    image='/assets/img/carousel/2.jpg'
                                    header='Sawah Baru'
                                    meta='Pertanian'
                                    description='Pembukaan ladang baru untuk meningkatkan produksi dalam desa'
                                    href='/web/galeri/1'
                                    />
                                    <Card
                                    image='/assets/img/carousel/2.jpg'
                                    header='Sawah Baru'
                                    meta='Pertanian'
                                    description='Pembukaan ladang baru untuk meningkatkan produksi dalam desa'
                                    />
                                    <Card
                                    image='/assets/img/carousel/2.jpg'
                                    header='Sawah Baru'
                                    meta='Pertanian'
                                    description='Pembukaan ladang baru untuk meningkatkan produksi dalam desa'
                                    />
                                    <Card link
                                    image='/assets/img/carousel/2.jpg'
                                    header='Sawah Baru'
                                    meta='Pertanian'
                                    description='Pembukaan ladang baru untuk meningkatkan produksi dalam desa'
                                    
                                    />
                                    <Card
                                    image='/assets/img/carousel/2.jpg'
                                    header='Sawah Baru'
                                    meta='Pertanian'
                                    description='Pembukaan ladang baru untuk meningkatkan produksi dalam desa'
                                    />
                                    <Card
                                    image='/assets/img/carousel/2.jpg'
                                    header='Sawah Baru'
                                    meta='Pertanian'
                                    description='Pembukaan ladang baru untuk meningkatkan produksi dalam desa'
                                    />
                                </Card.Group>
                                <Divider/>
                                <Segment vertical>
                                    <Grid columns={2} stackable textAlign='center'>
                                        <Grid.Row verticalAlign='middle'>
                                            <Grid.Column>
                                                
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Pagination 
                                                    className="pagination_container"
                                                    activePage={5}
                                                    totalPages={3}
                                                    boundaryRange={1}
                                                    siblingRange={1}
                                                />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
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

export default Galeri;