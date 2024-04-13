import React from 'react';
import { FaRegNewspaper } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='header-wrapper'>
            <h1 onClick={() => navigate('/')}>
                <span>Stock</span>News
                <div className='header-icon'>
                    <FaRegNewspaper />
                </div>
            </h1>
            <h2 onClick={() => navigate('/search-news')}>
                Search News
            </h2>
        </div>
    )
}

export default Header;