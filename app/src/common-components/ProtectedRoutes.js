import React, { useRef } from 'react'
import { Redirect } from "@reach/router"
import { useAuth } from '../context/auth-context';


export default ({component: Component, ...rest}) => { 
    const getAuth = useAuth();
    const isAuth = useRef(getAuth.state);

    return isAuth.current? (
        <Component  {...rest} />
    ) : <Redirect to="/" noThrow />;
}