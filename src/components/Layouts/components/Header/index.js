import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import TippyHeadLess from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { IoCloseCircleOutline } from 'react-icons/io5';
import { ImSpinner8 } from 'react-icons/im';
import { GrLanguage } from 'react-icons/gr';
import { FaCoins, FaKeyboard, FaRegQuestionCircle, FaUser } from 'react-icons/fa';
import { HiOutlineDotsVertical } from 'react-icons/hi';

import { Wrapper as PopperWrapper } from '../../../Popper/index';
import images from '../../../../assets/images';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import { IoMdSettings } from 'react-icons/io';
import { MdLogout } from 'react-icons/md';
import { UploadIcon, InboxIcon, MessageIcon, SearchIcon } from '../../../Icons';
import Image from '../../../Image/Index';

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
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 2]);
        }, 2000);
    }, []);

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
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>

                <TippyHeadLess
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('loading')}>
                            <ImSpinner8 />
                        </button>
                        <button className={cx('clear')}>
                            <IoCloseCircleOutline />
                        </button>
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </TippyHeadLess>
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
