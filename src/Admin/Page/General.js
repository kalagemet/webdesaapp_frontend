import React from 'react';
import { Component } from 'react';
import { Divider, Header, Icon, Input, Grid, Form } from 'semantic-ui-react';

class General extends Component{
    render() {
        return (
            <div className='content-admin-segment'>
                <Divider horizontal>
                    <Header as='h3' className='content-admin-header' color='yellow'>
                        <Icon name='settings' />
                        General App settings
                    </Header>
                </Divider>
                <br/>
                <Input className='general_form' action={{color:'primary', content:'Simpan'}} fluid label='Tittle bar / Judul ' placeholder='Desa App' />
                <br/>
                <Grid className='general_form'>
                    <Grid.Row>
                        <Grid.Column tablet={16} mobile={16} computer={8}>
                            <Input action={{color:'primary', content:'Simpan'}} fluid label='Aksen Warna' placeholder='black / #fff' /><br/>
                            <Divider horizontal>Akun</Divider>
                            <Form>
                                <Input fluid label='username' placeholder='localhost'/><br/>
                                <Input fluid label='password' placeholder='localhost'/><br/>
                                <Form.Button content='Simpan' primary floated='right'/>
                            </Form>
                        </Grid.Column>
                        <Grid.Column tablet={16} mobile={16} computer={8}>
                            <Divider horizontal>Lupa Password</Divider>
                            <Form>
                                <Input fluid label='Email pemulihan' placeholder='kalagemet@web.com'/><br/>
                                <Form.Button content='Simpan' primary floated='right' /><br/><br/>
                            </Form>
                            <Divider horizontal>Maintenance Mode</Divider>
                            <Form>
                                <Input fluid label='Pesan' placeholder='Dalam Pengmbangan'/><br/>
                                <Form.Checkbox toggle fluid label='Mode Maintenance'/><br/>
                                <Form.Button content='Simpan' primary floated='right'/>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default General;