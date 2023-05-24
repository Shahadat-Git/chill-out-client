import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <h3>This is main layout</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;