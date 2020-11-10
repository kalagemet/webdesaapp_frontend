import { AppLayout as layoutUmum } from './Public/Containers/AppLayout/AppLayout';
import Home from './Public/Content/Home';
import Profil from './Public/Content/Profile/Profil';
import Infografis from './Public/Content/Infografis/Infografis';
import Berita from './Public/Content/Berita/Berita';
import DaftarBerita from './Public/Content/Berita/DaftarBerita';
import Galeri from './Public/Content/Berita/Galeri';
import ImageGaleri from './Public/Content/Berita/ImageGaleri';
import Unduh from './Public/Content/Layanan/Unduh';
import NotFound from './Public/404';
import Aduan from './Public/Content/Layanan/Aduan';
import Nik from './Public/Content/Layanan/Nik';
import { AppLayout as layoutAdmin } from './Admin/Containers/AppLayout/AppLayout';
import Dashboard from './Admin/Page/Dashboard';
import General from './Admin/Page/General';
import CpSlider from './Admin/Page/Slider';

export const routes = [
    {
        layout: layoutAdmin,
        subRoutes: [
        { 
            path:'/admin',
            component:Dashboard 
        },
        {
            path:'/admin/dashboard',
            component:Dashboard
        },
        {
            path:'/admin/general',
            component:General
        },
        {
            path:'/admin/slider',
            component:CpSlider
        }
        ]
    },
    {
        layout: layoutUmum,
        subRoutes: [
        { 
            path:'/',
            component:Home 
        },
        { 
            path:'/web/',
            component:Home
        },
        {
            path:'/web/profil/pemerintahan',
            component:Profil
        },
        {
            path:'/web/infografis/mitigasi',
            component:Infografis
        },
        {
            path:'/web/berita/berita',
            component:DaftarBerita
        },
        {
            path:'/web/berita/berita1',
            component:Berita
        },
        {
            path:'/web/berita/galeri',
            component:Galeri
        },
        {
            path:'/web/galeri/1',
            component:ImageGaleri
        },
        {
            path:'/web/layanan/unduhan',
            component:Unduh
        },
        {
            path:'/web/layanan/pengaduan',
            component:Aduan
        },
        {
            path:'/web/layanan/cek_nik',
            component:Nik
        },
        {
            path:'*',
            component:NotFound
        }
        ]
    }
];