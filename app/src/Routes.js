import React from 'react';
import { Router } from '@reach/router';
import LoginPage from './components/Login';
import NotFound from './common-components/NotFound';
import ProtectedRoutes from './common-components/ProtectedRoutes';

const Homepage = () => (
    <h1>Homepage</h1>
)

export default () => {
    return (
        <Router>
            <LoginPage path="/" />
            <ProtectedRoutes path="/homepage/" component={Homepage} />
            <NotFound default />
        </Router>
    )
}