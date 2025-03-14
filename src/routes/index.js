import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';

import HeaderOnly from '../components/Layouts/HeaderOnly';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

export const privatecRoutes = [];
