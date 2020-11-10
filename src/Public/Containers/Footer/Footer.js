import React, { Component } from 'react';
import './Footer.scss';
import { Header, Container, Grid, Icon, Divider } from 'semantic-ui-react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class Footer extends Component{
    render() {
        return (
            <Container fluid className='web-footer_container'>
                <Grid>
                    <Grid.Row>
                        <Grid.Column mobile={16} tablet={16} computer={5}>
                            <Grid.Row>
                                <Header inverted as='h1'>Alamat</Header>
                                <Divider inverted/>
                            </Grid.Row>
                            <Grid.Row>
                                <Header inverted as='h4'>
                                    <Icon color='olive' name='map pin'/>
                                    <Header.Content>
                                        Kantor Balai Desa
                                        <Header.Subheader>
                                            Jalan raya Pagerpelah no.2, 
                                            karangkobar, Banjarnegara,
                                            Jawa tengah
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                                <Divider inverted/>
                            </Grid.Row>
                            <Grid.Row>
                                <Header inverted as='h4'>
                                    <Icon color='olive' name='phone'/>
                                    <Header.Content>
                                        Nomor Darurat
                                        <Header.Subheader>
                                            0821 xxxx xxxx (Pemdes Pagerpelah)<br/>
                                            0821 xxxx xxxx (Bidan Pagerpelah)<br/>
                                            0821 xxxx xxxx (Polsek Karangkobar)<br/>
                                            0821 xxxx xxxx (Puskesmas Karangkobar)
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                                <Divider inverted/>
                            </Grid.Row>
                        </Grid.Column>

                        <Grid.Column mobile={16} tablet={16} computer={5}>
                            <Grid.Row>
                                <Header inverted as='h1'>Media Sosial</Header>
                                <Divider inverted/>
                            </Grid.Row>
                            <Grid.Row>
                                <Header inverted as='h4'>
                                    <Icon color='olive' name='facebook'/>
                                    <Header.Content>
                                        Facebook
                                        <Header.Subheader>
                                            Hamid Musafa
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                                <Divider inverted/>
                            </Grid.Row>
                            <Grid.Row>
                                <Header inverted as='h4'>
                                    <Icon color='olive' name='instagram'/>
                                    <Header.Content>
                                        Instagram
                                        <Header.Subheader>
                                            @hamoedmusafa
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                                <Divider inverted/>
                            </Grid.Row>
                            <Grid.Row>
                                <Header inverted as='h4'>
                                    <Icon color='olive' name='twitter'/>
                                    <Header.Content>
                                        Twitter
                                        <Header.Subheader>
                                            @hamoedmusafa
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                                <Divider inverted/>
                            </Grid.Row>
                        </Grid.Column>

                        <Grid.Column mobile={16} tablet={16} computer={5}>
                            <Grid.Row>
                                <Header inverted as='h1'>Google Maps</Header>
                                <Divider inverted/>
                            </Grid.Row>
                            <Grid.Row className='maps_container'>
                                <Map google={this.props.google} className='maps' />
                            </Grid.Row>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

// export default Footer;
export default GoogleApiWrapper({
    apiKey: ('J14OL7-qx9V6135anEdjgeZ7RHU==')
})(Footer);