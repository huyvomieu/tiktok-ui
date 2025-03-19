import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { GoCheckCircle } from 'react-icons/go';
import Image from '../Image/Index';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/474148288_1373162650710384_494981326257857233_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=NOy09JfemswQ7kNvgHWGDnb&_nc_oc=Adhk2taxgc3FOipqse08082Red-UpKeIQ-PtnnUPoAjeVubMeHdw6suOMIzJacvwQuk&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=kMSJMdFjXz16Y52U2Oq2mQ&oh=00_AYFvF58bS6L8-LFbiBUx1ROnRdgOqYPJQkB1chXodu8S0A&oe=67DBB6BD"
                alt="Image"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Quoc Huy</span>
                    <GoCheckCircle className={cx('check')} />
                </h4>
                <span className={cx('usename')}>huynq24</span>
            </div>
        </div>
    );
}

export default AccountItem;
