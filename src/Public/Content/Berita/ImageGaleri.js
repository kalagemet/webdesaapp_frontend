import React, { Component } from 'react';
import { Container, Grid, Card, Segment, Divider, Image, Header, Icon } from 'semantic-ui-react';
import './ImageGaleri.scss';
import Pengumuman from '../Pengumuman';

class ImageGaleri extends Component{
    render() {
        return (
            <Container className='item-galeri-container'>
                <br/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={11} tablet={16} mobile={16}>
                            <Divider horizontal>Galeri Desa</Divider>
                            <Segment className='content_segment'>
                                <Image src='/assets/img/carousel/1.jpg' fluid/>
                                <Header as='h1' textAlign='center' >
                                    <Header.Content>
                                        Judul Image
                                        <Header.Subheader>
                                            Pertanian
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                                <Divider horizontal>tentang foto</Divider>
                                <Header className='detail-image' as='h3' textAlign='left' >
                                    <Icon name='map pin' color='red'/>
                                    <Header.Content>
                                        Lokasi foto
                                        <Header.Subheader>
                                            <i>diambil pada : </i>12 Juli 2020
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                                <Header className='detail-image' as='h3' textAlign='left' >
                                    <Icon name='camera' color='red'/>
                                    <Header.Content>
                                        Hamid Musafa
                                        <Header.Subheader>
                                            <i>fotografer</i>
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                                <Header className='detail-image' as='h3' textAlign='left' >
                                    <Icon name='file text outline' color='red'/>
                                    <Header.Content>
                                        Deskripsi
                                        <Header.Subheader>
                                            <p>subuah foto subuah foto subuah foto subuah foto subuah foto subuah foto 
                                            subuah foto subuah foto subuah foto subuah foto subuah foto subuah foto 
                                            subuah foto subuah foto subuah foto subuah foto subuah foto subuah foto 
                                            </p>
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                                <br/>
                            </Segment>
                            <Divider/>
                            <Segment vertical className='lainya_container'>
                                <Header as='h3'>Foto Lainya</Header><br/>
                                <Card.Group itemsPerRow={3} stackable centered>
                                    <Card link
                                    image='/assets/img/carousel/2.jpg'
                                    header='Sawah Baru'
                                    meta='Pertanian'
                                    
                                    />
                                    <Card
                                    image='/assets/img/carousel/2.jpg'
                                    header='Sawah Baru'
                                    meta='Pertanian'
                                    />
                                    <Card
                                    image='/assets/img/carousel/2.jpg'
                                    header='Sawah Baru'
                                    meta='Pertanian'
                                    />
                                    <Card
                                    image='/assets/img/carousel/2.jpg'
                                    header='Sawah Baru'
                                    meta='Pertanian'
                                    />
                                </Card.Group>
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

export default ImageGaleri;