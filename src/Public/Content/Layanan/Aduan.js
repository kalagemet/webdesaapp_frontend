import React, { Component } from 'react';
import './Aduan.scss';
import { Container, Grid, Segment, Divider, Form, Button } from 'semantic-ui-react';
import Pengumuman from '../Pengumuman';
import ReCAPTCHA from 'react-google-recaptcha';

class Aduan extends Component{
    render() {
        return (
            <Container className='aduan-container'>
                <br/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={11} tablet={16} mobile={16}>
                            <Divider horizontal>Layanan Pengaduan</Divider>
                            <Segment className='content_segment' vertical>
                                <Form>
                                    <Form.Input required fluid label='Nama Pelapor' placeholder='Nama Lengkap'/>
                                    <Form.Input fluid label='NIK Pelapor' placeholder='isi kosong jika tidak berkaitan'/>
                                    <Form.Select  required
                                        options={[
                                            { key: '1', text: 'Warga', value: '1' },
                                            { key: '0', text: 'Bukan Warga', value: '0' }
                                            ]}
                                        label='Status Pelapor'
                                        placeholder='status pelapor'
                                    />
                                    <Form.Input required fluid label='Nomor Pelapor yang bisa dihubungi' placeholder='isi kosong jika tidak berkaitan'/>
                                    <Form.TextArea required label='Deskripsi' placeholder='jelaskan masalah anda'/>
                                    <Form.Input required type='file' label='Gambar pendukung'/>
                                    <ReCAPTCHA sitekey='6Lem77UZAAAAAHrX-oJ4nEhxOjMKkirmiL4F36cz'></ReCAPTCHA>
                                    <Button floated='right'>Kirim</Button>
                                </Form>
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

export default Aduan;