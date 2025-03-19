import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FaAngleLeft } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('btn-back')} onClick={onBack}>
                <FaAngleLeft />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

export default Header;
