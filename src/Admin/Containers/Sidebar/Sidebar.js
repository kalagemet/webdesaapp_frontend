import React, { createRef } from 'react';
import './Sidebar.scss';
import { Sidebar, Segment, Menu, Responsive, Ref } from 'semantic-ui-react';
import Footer from '../Footer/Footer';

const menuItem = (
    <div>
        <Menu.Item href='/admin/dashboard' as='a'>Dashboard</Menu.Item>
        <Menu.Item href='/admin/general' as='a'>General App</Menu.Item>
        <Menu.Item href='/admin/home_page' as='a'>Home Page</Menu.Item>
        <Menu.Item href='/admin/slider' as='a'>Slider</Menu.Item>
        <Menu.Item href='/admin/profil' as='a'>Profil</Menu.Item>
        <Menu.Item href='/admin/infografis' as='a'>Infografis</Menu.Item>
        <Menu.Item href='/admin/blog' as='a'>Blog</Menu.Item>
        <Menu.Item href='/admin/download_center' as='a'>Download Center</Menu.Item>
    </div>
)

export function SideBar(props){
    const segmentRef = createRef();
    return (
        <div className='admin-sidebar-container'>
            <Sidebar.Pushable className='content_container' as={Segment.Group}>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <Sidebar
                        as={Menu}
                        animation='push'
                        direction='left'
                        visible={true}
                        vertical
                        className='sidebar-segment'
                    >
                        {menuItem}
                    </Sidebar>
                </Responsive>
                <Responsive maxWidth={Responsive.onlyTablet.minWidth}>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        direction='left'
                        target={segmentRef}
                        vertical
                        className='sidebar-segment'
                        id='sidebar-segment'
                    >
                        {menuItem}
                    </Sidebar>
                </Responsive>
                <Ref innerRef={segmentRef} >
                    <Segment className='page-content-segment' vertical>
                        {props.children}
                    </Segment>
                </Ref>
                <Footer/>
            </Sidebar.Pushable>
        </div>
    );
}
