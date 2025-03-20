import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { GrLanguage } from 'react-icons/gr';
import { FaCoins, FaKeyboard, FaRegQuestionCircle, FaUser } from 'react-icons/fa';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IoMdSettings } from 'react-icons/io';
import { MdLogout } from 'react-icons/md';
import { UploadIcon, InboxIcon, MessageIcon } from '../../../Icons';

import images from '../../../../assets/images';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import Image from '../../../Image/Index';
import Search from '../Search';
import routesConfig from '../../../../config/routesConfig';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <GrLanguage />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FaRegQuestionCircle />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FaKeyboard />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FaUser />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FaCoins />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <IoMdSettings />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <MdLogout />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.Home} className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </Link>
                {/* Search */}

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} content="Upload videos">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                            <Menu items={userMenu} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <Image
                                        className={cx('user-avatar')}
                                        src="https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-1/474148288_1373162650710384_494981326257857233_n.jpg?stp=c0.0.720.720a_dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE7bwgmIng9IMwfkyFKODp3tY-DwHfWxzW1j4PAd9bHNY_psqFvRF3mNd39LXQB2iNphjl7drzUOgmyjDlESNLx&_nc_ohc=gLdtD6DYvJkQ7kNvgFhmLjb&_nc_oc=Adku7IiBvY3hWWfLvaferY-fY8aHvA3bvKaUl8huEifn3pcQtetmVXfE6YySjCdGPjE&_nc_zt=24&_nc_ht=scontent.fhan14-5.fna&_nc_gid=Q0xTRtCfoH9qzzmzKuSGZA&oh=00_AYFVM9-KMzS4paGGLVlHrQWwMuByt8fy8rIygrE4VVYqcA&oe=67DF89BB"
                                        alt="Lỗi ảnh"
                                    />
                                </button>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <HiOutlineDotsVertical />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
