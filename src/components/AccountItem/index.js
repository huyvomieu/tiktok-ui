import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { GoCheckCircle } from 'react-icons/go';
import Image from '../Image/Index';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <GoCheckCircle className={cx('check')} />}
                </h4>
                <span className={cx('usename')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
};
export default AccountItem;
