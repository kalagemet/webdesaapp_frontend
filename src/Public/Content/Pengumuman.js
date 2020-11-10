import React, { createRef, Component } from 'react';
import { Segment, Header, Icon, Divider, List, Button, Sticky, Ref, Rail, Responsive } from 'semantic-ui-react';
import './Pengumuman.scss'

const Isi = (
    <Segment color='yellow'>
        <Header color='yellow' textAlign='center' as='h4'>
            <Icon name='announcement'/>
            <Header.Content>
                Pengumuman
            </Header.Content>
        </Header>
        <Divider/>
        <List divided relaxed animated>
            <List.Item>
                <List.Icon color='yellow' name='sticky note outline' verticalAlign='middle' size='large'/>
                <List.Content>
                    <List.Header as='a'><b>Coba Pengumuan</b></List.Header>
                    <List.Description as='a'><i>12 Juli 2020 12:00:00</i></List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon color='yellow' name='sticky note outline' verticalAlign='middle' size='large'/>
                <List.Content>
                    <List.Header as='a'><b>Coba Pengumuan</b></List.Header>
                    <List.Description as='a'><i>12 Juli 2020 12:00:00</i></List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <Button size='tiny' floated='right' basic>lihat lainya...</Button>
            </List.Item>
        </List>
    </Segment>
);

const download = (
    <Segment color='yellow'>
        <Header color='yellow' textAlign='center' as='h4'>
            <Icon name='download'/>
            <Header.Content>
                Download Center
            </Header.Content>
        </Header>
        <Divider/>
        <List divided relaxed animated>
            <List.Item>
                <List.Icon color='yellow' name='sticky note outline' verticalAlign='middle' size='large'/>
                <List.Content>
                    <List.Header as='a'><b>Coba Download</b></List.Header>
                    <List.Description as='a'><i>12 Juli 2020 12:00:00</i></List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon color='yellow' name='sticky note outline' verticalAlign='middle' size='large'/>
                <List.Content>
                    <List.Header as='a'><b>Coba Download</b></List.Header>
                    <List.Description as='a'><i>12 Juli 2020 12:00:00</i></List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <Button size='tiny' floated='right' basic>lihat lainya...</Button>
            </List.Item>
        </List>
    </Segment>
);

class Pengumuman extends Component{
    contextRef = createRef();
    render() {
        return (
            <div className='left-side-container'>
                <Responsive minWidth={Responsive.onlyTablet.minWidth+256}>
                    <Ref innerRef={this.contextRef}>
                        <Rail attached className='stiky_container'>
                            <Sticky context={this.contextRef}>
                                {this.props.withoutpengumuman ? '' : Isi }
                                {this.props.withoutdownload ? '' : download}
                            </Sticky>
                        </Rail>
                    </Ref>
                </Responsive>
                <Responsive maxWidth={Responsive.onlyTablet.minWidth+255}>
                    {this.props.withoutpengumuman ? '' : Isi }
                    {this.props.withoutdownload ? '' : download}
                </Responsive>
            </div>
        );
    }
}

export default Pengumuman;