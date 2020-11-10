import React, { Component } from 'react';
import { Divider, Header, Icon, Item, Button, Input, Form, Segment } from 'semantic-ui-react';

class CpSlider extends Component{
    render() {
        return (
            <div className='content-admin-segment'>
                <Divider horizontal>
                    <Header as='h3' className='content-admin-header' color='yellow'>
                        <Icon name='image' />
                        Tambah Slider
                    </Header>
                </Divider>
                <Segment>
                    <Form className='general_form'>
                        <Input fluid label='Foto' placeholder='Header.jpg' type='file'/><br/>
                        <Input fluid label='Header' placeholder='Header'/><br/>
                        <Input fluid label='Sub Header' placeholder='Ketarangan'/><br/>
                        <Form.Button primary fluid icon='plus' content='Upload'/>
                    </Form>
                </Segment>
                <br/>
                <Divider horizontal>
                    <Header as='h3' className='content-admin-header' color='yellow'>
                        <Icon name='settings' />
                        Slider Setting
                    </Header>
                </Divider>
                <Item.Group>
                    <Item>
                        <Item.Image rounded size='small' src='/assets/img/carousel/2.jpg' />
                        <Item.Content>
                            <Form className='general_form'>
                                <Input fluid label='Header' placeholder='Header'/><br/>
                                <Input fluid label='Sub Header' placeholder='Ketarangan'/><br/>
                                <Button.Group widths={3}>
                                    <Button labelPosition='left' primary icon='save' content='Simpan' />
                                    <Button labelPosition='left' icon='eye' content='Sembunyikan' />
                                    <Button labelPosition='left' negative icon='trash' content='Hapus' />
                                </Button.Group>
                            </Form>
                        </Item.Content>
                    </Item>
                    <Divider horizontal>SLider 1</Divider>
                    <br/>
                    <Item>
                        <Item.Image rounded size='small' src='/assets/img/carousel/2.jpg' />
                        <Item.Content>
                            <Form className='general_form'>
                                <Input fluid label='Header' placeholder='Header'/><br/>
                                <Input fluid label='Sub Header' placeholder='Ketarangan'/><br/>
                                <Button.Group widths={3}>
                                    <Button labelPosition='left' primary icon='save' content='Simpan' />
                                    <Button labelPosition='left' icon='eye' content='Sembunyikan' />
                                    <Button labelPosition='left' negative icon='trash' content='Hapus' />
                                </Button.Group>
                            </Form>
                        </Item.Content>
                    </Item>
                    <Divider horizontal>SLider 2</Divider>
                    <br/>
                </Item.Group>
            </div>
        );
    }
}

export default CpSlider;