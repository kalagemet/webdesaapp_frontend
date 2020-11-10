import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../Header/Header';
import {SideBar} from '../Sidebar/Sidebar';
import { Divider } from 'semantic-ui-react';

export function AppLayout (props) {
    return(
        <div className='admin-app-layout'>
            <HeaderNav/>
            <SideBar>
                {props.children}
                <Divider horizontal className='end-page-divider'><i>End of Page</i></Divider>
            </SideBar>
        </div>
    )
}