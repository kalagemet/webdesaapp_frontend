import React, { Component } from 'react';
import './Home.scss';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Header, Container, Divider, Grid, Segment, Button, Card, Item } from 'semantic-ui-react';
import Pengumuman from './Pengumuman';

class Home extends Component{
  render() {
      return (
          <div className='home-page'>
            <Slider autoplay={4000} infinite={true}>
              <div style={{background: `URL('/assets/img/carousel/1.jpg') center center no-repeat`}} className="slider-content image_slider">
                <div className='inner'>
                  <Header as="h1">sdsdsds</Header>
                  <p>uji uji uji uji uji</p>
                </div>
              </div>
              <div style={{background: `URL('/assets/img/carousel/2.jpg') center center no-repeat`}} className="slider-content image_slider">
                <div className='inner'>
                  <Header as="h1">sdsdsds</Header>
                </div>
              </div>
              <div style={{background: `URL('/assets/img/carousel/3.jpg') center center no-repeat`}} className="slider-content image_slider">
                <div className='inner'>
                  <Header as="h1">sdsdsds</Header>
                </div>
              </div>
            </Slider>
            <Container className='content_segment'>
              <Divider horizontal>Beranda</Divider>
              <br/>
              <Grid>
                <Grid.Row>
                  <Grid.Column computer={11} tablet={16} mobile={16}>
                    <Segment >
                      <Item.Group>
                      <Item>
                        <Item.Image rounded bordered size='small' src='/assets/img/profile/kepala.jpg'/>
                        <Item.Content>
                          <Item.Header>
                            <Header as='h1'>Selamat Datang di Web Desa Pagerpelah</Header>
                          </Item.Header>
                          <Item.Meta content='Kepala Desa Pagerpelah'/>
                          <Item.Description>
                            <p>
                              Selamat Selamat Selamat Selamat Selamat Selamat Selamat 
                              Selamat Selamat Selamat Selamat Selamat Selamat Selamat 
                              Selamat Selamat Selamat Selamat Selamat Selamat 
                              Selamat Selamat Selamat Selamat Selamat Selamat Selamat 
                              Selamat Selamat Selamat Selamat Selamat Selamat Selamat 
                              Selamat Selamat Selamat 
                            </p>
                          </Item.Description>
                        </Item.Content>
                      </Item>
                      </Item.Group>
                    </Segment>
                    <br/>
                    <Divider horizontal>Berita</Divider>
                    <Segment vertical className='berita_container'>
                      <h1>A Bicyclops Built For Two</h1>
                      <p>
                        I decline the title of Iron Cook and accept the lesser title
                        of Zinc Saucier, which I just made up. Uhh… also, comes with
                        double prize money. Ugh, it's filthy! Why not create a
                        National Endowment for Strip Clubs while we're at it? Oh dear!
                        She's stuck in an infinite loop, and he's an idiot! Well,
                        that's love for you. For the last time, I don't like lilacs!
                        Your 'first' wife was the one who liked lilacs! I was having
                        the most wonderful dream. Except you were there, and you were
                        there, and you were there! You guys go on without me! I'm
                        going to go… look for more stuff to steal!
                      </p>
                      <p><a href='/'>Selengkapnya... </a></p>
                    </Segment>
                    <Segment vertical className='berita_container'>
                      <h1>A Bicyclops Built For Two</h1>
                      <p>
                        I decline the title of Iron Cook and accept the lesser title
                        of Zinc Saucier, which I just made up. Uhh… also, comes with
                        double prize money. Ugh, it's filthy! Why not create a
                        National Endowment for Strip Clubs while we're at it? Oh dear!
                        She's stuck in an infinite loop, and he's an idiot! Well,
                        that's love for you. For the last time, I don't like lilacs!
                        Your 'first' wife was the one who liked lilacs! I was having
                        the most wonderful dream. Except you were there, and you were
                        there, and you were there! You guys go on without me! I'm
                        going to go… look for more stuff to steal!
                      </p>
                      <p><a href='/'>Selengkapnya... </a></p>
                    </Segment>
                    <br/>
                    <Button size='tiny' floated='right' basic>lihat lainya...</Button>
                  </Grid.Column>
                  <Grid.Column computer={5} tablet={16} mobile={16}>
                    <br/>
                    <Pengumuman/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={16}>
                  <Divider horizontal>Galery</Divider>
                    <Segment vertical>
                      <Card.Group itemsPerRow={3} stackable centered>
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
                      <br/>
                      <Button size='tiny' floated='right' basic>lihat lainya...</Button>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
        </div>
      );
  }
}

export default Home;