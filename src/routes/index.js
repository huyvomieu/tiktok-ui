import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';

import HeaderOnly from '../components/Layouts/HeaderOnly';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import routesConfig from '../config/routesConfig';

export const publicRoutes = [
    { path: routesConfig.Home, component: Home },
    { path: routesConfig.Following, component: Following },
    { path: routesConfig.Upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.Search, component: Search, layout: null },
    { path: routesConfig.Profile, component: Profile },
];

export const privatecRoutes = [];
