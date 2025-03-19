import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import images from '../../assets/images';
const cx = classNames.bind(styles);

function Image({ src, alt, classNames, fallback: customFallback = images.userTemp, ...props }) {
    function handleError({ currentTarget }) {
        currentTarget.src = images.userTemp;
    }
    return <img className={cx(classNames)} src={src} alt={alt} {...props} onError={handleError} />;
}

export default Image;
