import React, { Component } from 'react';
import { Divider, Icon, Header, Segment, Statistic } from 'semantic-ui-react';
import './Dashboard.scss';

class Dashboard extends Component{
    render() {
        return (
            <div className='content-admin-segment'>
                <Divider horizontal>
                    <Header className='content-admin-header' as='h3' color='yellow'>
                        <Icon name='dashboard'/>
                        Dashboard
                    </Header>
                </Divider>
                <Segment inverted textAlign='center'>
                    <Header textAlign='left' as='h4'>
                        <Icon name='line graph' />
                        Statistik
                    </Header>
                    <Statistic inverted>
                        <Statistic.Value>200</Statistic.Value>
                        <Statistic.Label>page view hari ini</Statistic.Label>
                    </Statistic>
                    <Statistic inverted>
                        <Statistic.Value>70</Statistic.Value>
                        <Statistic.Label>pengunjung hari ini</Statistic.Label>
                    </Statistic>
                    <Statistic inverted>
                        <Statistic.Value>85</Statistic.Value>
                        <Statistic.Label>rata - rata waktu kunjungan</Statistic.Label>
                    </Statistic>
                    <Statistic inverted>
                        <Statistic.Value>35</Statistic.Value>
                        <Statistic.Label>total pengunjung</Statistic.Label>
                    </Statistic>
                    <Statistic inverted>
                        <Statistic.Value>355</Statistic.Value>
                        <Statistic.Label>Total page view</Statistic.Label>
                    </Statistic>
                </Segment>
                <Segment vertical textAlign='center'>
                    <Divider horizontal>
                        <Header textAlign='left' as='h4'>
                            <Icon name='pagelines' />
                            Konten
                        </Header>
                    </Divider>
                    <Statistic>
                        <Statistic.Value>200</Statistic.Value>
                        <Statistic.Label>Berita / Blog</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>34</Statistic.Value>
                        <Statistic.Label>Pengumuman</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>200</Statistic.Value>
                        <Statistic.Label>Galery</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>200</Statistic.Value>
                        <Statistic.Label>Fille Download</Statistic.Label>
                    </Statistic>
                </Segment>
            </div>
        );
    }
}

export default Dashboard;