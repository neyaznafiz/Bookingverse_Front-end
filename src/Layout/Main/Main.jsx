import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    );
};