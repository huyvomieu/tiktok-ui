import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import TippyHeadLess from '@tippyjs/react/headless';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { ImSpinner8 } from 'react-icons/im';
import { SearchIcon } from '../../../components/Icons';

import { Wrapper as PopperWrapper } from '../../../components/Popper/index';
import AccountItem from '../../../components/AccountItem';
import { useDebounce } from '../../../hooks';
import * as searchServices from '../../../services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSeachValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debounced = useDebounce(searchValue, 600);
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchAPI = async () => {
            setLoading(true);

            const res = await searchServices.search(debounced);

            setSearchResult(res);
            setLoading(false);
        };
        fetchAPI();
    }, [debounced]);

    function handleClear() {
        setSeachValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }
    function handleHideResult() {
        setShowResult(false);
    }
    return (
        <div>
            <TippyHeadLess
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => {
                                return <AccountItem key={result.id} data={result} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={(e) => setSeachValue(e.target.value.trimStart())}
                        onFocus={() => setShowResult(true)}
                    />
                    {loading && (
                        <button className={cx('loading')}>
                            <ImSpinner8 />
                        </button>
                    )}
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <IoCloseCircleOutline />
                        </button>
                    )}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadLess>
        </div>
    );
}

export default Search;
