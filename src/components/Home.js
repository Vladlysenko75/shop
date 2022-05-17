import React from 'react';
import {Outlet} from 'react-router-dom';

import {NavBar} from './NavBar';

export const Home = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    );
};
