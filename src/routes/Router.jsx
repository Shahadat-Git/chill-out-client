import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Recipes from '../pages/Recipes/Recipes';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorPage from '../shared/ErrorPage';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <h1>hi</h1>
            },
            {
                path: '/recipes/:id',
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;