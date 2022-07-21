import React from 'react';

import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>welcome to my fancy routing website</h1>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to='/countries'>Countries</CustomLink>
                <CustomLink to='/posts'>Posts</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;