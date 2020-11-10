import React, { Component } from 'react';
import './Maintenance.scss';
import { Redirect } from 'react-router-dom';
import { Container, Grid, Header, Icon, Segment } from 'semantic-ui-react';

class Maintenance extends Component{
    state = {
        valid: true
    }

    data = 'Terjadi Ganguan';

    componentDidMount(){
        this.cekMaintenance();
    }

    cekMaintenance(){
        if(this.props.data === undefined){
            this.setState({valid:false})
        }else{
            this.setState({valid:true})
            this.data = this.props.data;
        }
    }

    redirect(){
        if(!this.state.valid) return <Redirect to='/web' />
    }

    render() {
        return (
            <Container className='web-error-container'>
                {console.log(this.state.valid)}
                {this.redirect()}
                <br/>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={16} tablet={16} mobile={16}>
                            <Segment textAlign='center' vertical  className='content_segment'>
                                <Icon className='ikon' name='warning sign' size='massive' color='yellow'/>
                                <Header as='h1' className='text_header' data-text={this.data.toUpperCase()}>
                                    {this.data.toUpperCase()}
                                </Header>           
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Maintenance;