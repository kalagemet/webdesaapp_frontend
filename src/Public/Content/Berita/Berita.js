import React, { Component } from 'react';
import { Container, Grid, Divider, Segment, Breadcrumb, Header, List } from 'semantic-ui-react';
import Pengumuman from '../Pengumuman';
import './Berita.scss';

class Berita extends Component{
    render() {
        return (
            <div className='berita-container'>
                <Segment vertical inverted className='breadcrumb_container'>
                    <Breadcrumb>
                        <Breadcrumb.Section link>Blog/Berita</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right chevron' />
                        <Breadcrumb.Section link>Berita</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right arrow' />
                        <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
                    </Breadcrumb>
                </Segment>
                <Container>
                    <br/>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column computer={11} tablet={16} mobile={16}>
                                <Segment vertical className='content_segment'>
                                    <Header as='h1'>
                                        <Header.Content>
                                            Judul Berita
                                            <Header.Subheader>
                                                <i>12/03/2020 dilihat : 20 kali</i>
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Segment>
                                <Divider horizontal/>
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
            </div>
        );
    }
}

export default Berita;