import React, { Component } from 'react'
import { Divider, List, Header, Container, Grid, Segment, Pagination, Dropdown } from 'semantic-ui-react';
import Pengumuman from '../Pengumuman';
import './DaftarBerita.scss';

class DaftarBerita extends Component{
    render() {
        return (
            <Container className='daftar-berita'>
                <br/>
                <br/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={11} tablet={16} mobile={16}>
                            <Divider horizontal>
                                <Header as='h1'>
                                    <Header.Content>
                                        Berita Desa
                                        <Header.Subheader>
                                            Filter artikel{' '}
                                            <Dropdown
                                                inline
                                                options={[
                                                    {
                                                        key: 'semua',
                                                        text: 'semua',
                                                        value: 'semua'
                                                    },
                                                    {
                                                        key: 'Januari',
                                                        text: 'Januari',
                                                        value: 'Januari'
                                                    }
                                                ]} 
                                                defaultValue={[0]}
                                            />
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Divider>
                            
                            <Segment  vertical className='content_segment'>
                                <h1>A Bicyclops Built For Two</h1>
                                <p>
                                    I decline the title of Iron Cook and accept the lesser title
                                    of Zinc Saucier, which I just made up. Uhh… also, comes with
                                    double prize money. 
                                </p>
                                <p><a href='/web/berita/berita1'>Selengkapnya... </a></p>
                                <Divider/>
                                <h1>A Bicyclops Built For Two</h1>
                                <p>
                                    I decline the title of Iron Cook and accept the lesser title
                                    of Zinc Saucier, which I just made up. Uhh… also, comes with
                                    double prize money. 
                                </p>
                                <p><a href='/'>Selengkapnya... </a></p>
                                <Divider/>
                                <h1>A Bicyclops Built For Two</h1>
                                <p>
                                    I decline the title of Iron Cook and accept the lesser title
                                    of Zinc Saucier, which I just made up. Uhh… also, comes with
                                    double prize money. 
                                </p>
                                <p><a href='/'>Selengkapnya... </a></p>
                                <Divider/>
                                <h1>A Bicyclops Built For Two</h1>
                                <p>
                                    I decline the title of Iron Cook and accept the lesser title
                                    of Zinc Saucier, which I just made up. Uhh… also, comes with
                                    double prize money. 
                                </p>
                                <p><a href='/'>Selengkapnya... </a></p>
                                <Divider/>
                                <h1>A Bicyclops Built For Two</h1>
                                <p>
                                    I decline the title of Iron Cook and accept the lesser title
                                    of Zinc Saucier, which I just made up. Uhh… also, comes with
                                    double prize money. 
                                </p>
                                <p><a href='/'>Selengkapnya... </a></p>
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
                            <br/>
                            <Grid className='lainya_container'>
                                <Grid.Column tablet={16} mobile={16} computer={8}>
                                    <Header as='h3'>Berhubungan dengan</Header>
                                    <List divided relaxed>
                                        <List.Item as='a'>
                                            <List.Icon name='sticky note outline' size='large' verticalAlign='middle' />
                                            <List.Content>
                                                <List.Header>Berita lainya dd</List.Header>
                                                <List.Description>10 hari yang lalu</List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item as='a'>
                                            <List.Icon name='sticky note outline' size='large' verticalAlign='middle' />
                                            <List.Content>
                                                <List.Header>Berita lainya dd</List.Header>
                                                <List.Description>10 hari yang lalu</List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item as='a'>
                                            <List.Icon name='sticky note outline' size='large' verticalAlign='middle' />
                                            <List.Content>
                                                <List.Header>Berita lainya dd</List.Header>
                                                <List.Description>10 hari yang lalu</List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item as='a'>
                                            <List.Icon name='sticky note outline' size='large' verticalAlign='middle' />
                                            <List.Content>
                                                <List.Header>Berita lainya dd</List.Header>
                                                <List.Description>10 hari yang lalu</List.Description>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column tablet={16} mobile={16} computer={8}>
                                    <Header as='h3'>Artikel Terbaru</Header>
                                    <List divided relaxed>
                                        <List.Item as='a'>
                                            <List.Icon name='sticky note outline' size='large' verticalAlign='middle' />
                                            <List.Content>
                                                <List.Header>Berita lainya dd</List.Header>
                                                <List.Description>10 hari yang lalu</List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item as='a'>
                                            <List.Icon name='sticky note outline' size='large' verticalAlign='middle' />
                                            <List.Content>
                                                <List.Header>Berita lainya dd</List.Header>
                                                <List.Description>10 hari yang lalu</List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item as='a'>
                                            <List.Icon name='sticky note outline' size='large' verticalAlign='middle' />
                                            <List.Content>
                                                <List.Header>Berita lainya dd</List.Header>
                                                <List.Description>10 hari yang lalu</List.Description>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item as='a'>
                                            <List.Icon name='sticky note outline' size='large' verticalAlign='middle' />
                                            <List.Content>
                                                <List.Header>Berita lainya dd</List.Header>
                                                <List.Description>10 hari yang lalu</List.Description>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Grid.Column>
                            </Grid>
                            <br/>
                            <br/>
                            <br/>
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

export default DaftarBerita;