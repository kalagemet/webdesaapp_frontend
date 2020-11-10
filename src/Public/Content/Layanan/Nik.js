import React, { Component } from 'react';
import './Nik.scss';
import { Container, Grid, Segment, Divider, Input, Form } from 'semantic-ui-react';
import Pengumuman from '../Pengumuman';

class Nik extends Component{
    render() {
        return (
            <Container className='nik-container'>
                <br/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={11} tablet={16} mobile={16}>
                            <Divider horizontal>Cek Penduduk</Divider>
                            <Segment vertical className='nik_segment'>
                                <Input fluid placeholder='Nomor KTP / NIK' action={{
                                    color:'yellow',
                                    labelPosition:'right',
                                    icon:'search',
                                    content:'Cari'  
                                }}/>
                            </Segment>
                            <Segment color='yellow' className='content_segment'>
                                <Divider horizontal>Data Penduduk</Divider>
                                <Form>
                                    <Form.Input label='Nama' readOnly value='sdsd'/>
                                    <Form.Input label='Jenis Kelamin' readOnly value='sdsd'/>
                                    <Form.Input label='Status' readOnly value='sdsd'/>
                                    <Form.Input label='No KK' readOnly value='sdsd'/>
                                    <Form.TextArea label='Alamat' readOnly value='sdsd'/>
                                </Form>
                                <Divider/>
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

export default Nik;