import React, { Component } from 'react';
import './Header.scss';
import { 
    Responsive, 
    Grid,
    Menu,
    Image,
    Sidebar,
    Icon,
    Input,
    Dropdown,
    Segment,
} from 'semantic-ui-react';
import Ticker from 'react-ticker';
import { Link } from 'react-router-dom';

class HeaderNav extends Component{
    componentDidMount(){
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }

    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header_el = document.getElementById('header_container'),
            wrapper = document.getElementById('wrapper');
        if(window.innerWidth > 753){
            if(distanceY > shrinkOn){
                if(header_el!==null){
                    header_el.classList.add("smaller");
                }
                if(wrapper!==null){
                    wrapper.classList.add("smaller");
                }
            } else {
                if(header_el!==null){
                    header_el.classList.remove("smaller");
                }
                if(wrapper!==null){
                    wrapper.classList.remove("smaller");
                }
            }
        }
    }

    state = {
        visible: false
    };

    handlePusher = () => {
        const { visible } = this.state;
    
        if (visible) {
            this.setState({ visible: false });
        }
    };
    
    handleToggle = () => this.setState({ visible: !this.state.visible });

    render() {
        const { visible } = this.state;

        return(
            <div className='web-header_container' id='header_container'>
                <Segment inverted vertical className='header-text-container'>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column className='header-text' mobile={7} computer={6} tablet={7}>
                                    <Icon link name='phone square'/>085747588471 |{' '}
                                    <Icon link name='mail'/> kalagemet@icloid.com
                            </Grid.Column>
                            <Grid.Column className='header-text' mobile={9} tablet={9} computer={10}>
                                <Ticker offset='run-in' speed={7}>
                                    {()=>"Pengumuman !!! "}
                                </Ticker>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <div className='desktop_header'>
                        <Grid>
                            <Grid.Row style={{paddingBottom: 0, display:'unset!important'}}>
                                <Grid.Column as={Link} to='/' verticalAlign='middle' className='img_header' width={6}>
                                    <Image size="medium" src="/assets/img/profile/img_profile.png" />
                                </Grid.Column>
                                <Grid.Column textAlign='right' style={{display:'blok!important'}} width={10}>
                                    <Grid.Row className='cari_container'>
                                        <Input
                                            className='cari_form'
                                            size='small'
                                            icon={<Icon name='search' link />}
                                            placeholder='Cari...'
                                        />
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Menu secondary className='desktop_menu'>
                                            <Menu.Menu position='right'>
                                                <Dropdown open pointing='top right' className='menu_item' text='PROFIL'>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item as={Link} to='/web/profil/pemerintahan'>Pemerintahan</Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item as={Link} to='/web/profil/visi_misi'>Visi Misi</Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item as={Link} to='/web/profil/industri'>Industri</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown open pointing='top right' className='menu_item' text='INFOGRAFIS'>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item as={Link} to='/web/infografis/mitigasi'>Mitigasi</Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item as={Link} to='/web/infografis/geografis'>Luas dan Geografi Wilayah </Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item as={Link} to='/web/infografis/potensi_alam'>Alam dan Potensi</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown open pointing='top right' className='menu_item' text='BLOG/BERITA'>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item as={Link} to='/web/berita/berita'>Berita</Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item as={Link} to='/web/berita/pengumuman'>Pengumuman</Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item as={Link} to='/web/berita/blog'>Blog</Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item as={Link} to='/web/berita/galeri'>Galeri</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown open pointing='top right' className='menu_item' text='LAYANAN'>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item as={Link} to='/web/layanan/unduhan'>Download Center</Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item as={Link} to='/web/layanan/pengaduan'>Layanan Pengaduan</Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item as={Link} to='/web/layanan/cek_nik'>Cek NIK</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Menu.Menu>
                                        </Menu>
                                        </Grid.Row>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                </Responsive>

                <Responsive {...Responsive.onlyMobile}>
                    <Sidebar.Pushable>
                        <Sidebar 
                            as={Menu}
                            animation='overlay'
                            direction='right'
                            icon='labeled'
                            vertical
                            visible={visible}
                            className='sidebar_menu'
                        >
                            <Dropdown closeOnChange className='menu_item link item' text='PROFIL'>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/web/profil/pemerintahan'>Pemerintahan</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item as={Link} to='/web/profil/visi_misi'>Visi Misi</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item as={Link} to='/web/profil/industri'>Industri</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown closeOnChange className='menu_item link item' text='INFOGRAFIS'>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/web/infografis/mitigasi'>Mitigasi</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item as={Link} to='/web/infografis/geografis'>Luas dan Geografi Wilayah </Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item as={Link} to='/web/infografis/potensi_alam'>Alam dan Potensi</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown closeOnChange className='menu_item link item' text='BLOG/BERITA'>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/web/berita/berita'>Berita</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item as={Link} to='/web/berita/pengumuman'>Pengumuman</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item as={Link} to='/web/berita/blog'>Blog</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item as={Link} to='/web/berita/galeri'>Galeri</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown closeOnChange className='menu_item link item' text='LAYANAN'>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/web/layanan/unduhan'>Download Center</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item as={Link} to='/web/layanan/pengaduan'>Layanan Pengaduan</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item as={Link} to='/web/layanan/cek_nik'>Cek NIK</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Sidebar>
                        <Sidebar.Pusher
                            id = 'header_pusher'
                            dimmed={visible}
                            onClick={this.handlePusher}
                        >
                            <div className='mobile_header'>
                                <Grid>
                                    <Grid.Row style={{padding: '1vh'}}>
                                        <Grid.Column as={Link} to='/' verticalAlign='middle' width={6}>
                                            <Image size="small" src="/assets/img/profile/img_profile.png" />
                                        </Grid.Column>
                                        <Grid.Column textAlign='right' width={10}>
                                            <Grid.Row>
                                                <Menu secondary className='mobile_menu'>
                                                    <Menu.Item position='right' onClick={this.handleToggle}>
                                                        <Icon size='large' name='sidebar'/>
                                                    </Menu.Item>
                                                </Menu>
                                            </Grid.Row>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </div>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Responsive>
            </div>
        );
    }
}

export default HeaderNav;