import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';

import HeaderOnly from '../layouts/HeaderOnly';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
import configs from '../config/routesConfig';

export const publicRoutes = [
    { path: configs.routes.Home, component: Home },
    { path: configs.routes.Following, component: Following },
    { path: configs.routes.Upload, component: Upload, layout: HeaderOnly },
    { path: configs.routes.Search, component: Search, layout: null },
    { path: configs.routes.Profile, component: Profile },
];

export const privatecRoutes = [];
