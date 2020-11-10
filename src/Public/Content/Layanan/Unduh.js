import React, { Component } from 'react'
import { Container, Grid, Segment, Divider, Header, Dropdown, Pagination, List } from 'semantic-ui-react';
import Pengumuman from '../Pengumuman';
import './Unduh.scss';

class Unduh extends Component{
    render() {
        return (
            <Container className='unduhan-container'>
                <br/>
                <br/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={11} tablet={16} mobile={16}>
                            <Divider horizontal>
                                <Header as='h3'>
                                    <Header.Content>
                                        Pusat Unduhan
                                        <Header.Subheader>
                                            Filter file{' '}
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

                            <Segment vertical className='content_segment'>
                                <List divided relaxed>
                                    <List.Item>
                                        <List.Icon name='file text outline' size='large' verticalAlign='middle' />
                                        <List.Content>
                                            <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                                            <List.Description><i>diupload pada : 12 Juli 2020 {' | '} diunduh : 100 kali</i></List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='file text outline' size='large' verticalAlign='middle' />
                                        <List.Content>
                                            <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                                            <List.Description><i>diupload pada : 12 Juli 2020 {' | '} diunduh : 100 kali</i></List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='file text outline' size='large' verticalAlign='middle' />
                                        <List.Content>
                                            <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                                            <List.Description><i>diupload pada : 12 Juli 2020 {' | '} diunduh : 100 kali</i></List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='file text outline' size='large' verticalAlign='middle' />
                                        <List.Content>
                                            <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                                            <List.Description><i>diupload pada : 12 Juli 2020 {' | '} diunduh : 100 kali</i></List.Description>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name='file text outline' size='large' verticalAlign='middle' />
                                        <List.Content>
                                            <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                                            <List.Description><i>diupload pada : 12 Juli 2020 {' | '} diunduh : 100 kali</i></List.Description>
                                        </List.Content>
                                    </List.Item>
                                </List>
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
                            <Pengumuman withoutdownload/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Unduh;