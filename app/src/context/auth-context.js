import React, { useContext, createContext, useState, useEffect } from 'react';
import ls from 'local-storage';

const AuthContext = createContext();

function AuthProvider(props) {
    const [ auth, setAuth ] = useState(false);
    
    useEffect(() => {
        ls.set('isAuth', auth)
    }, [auth])

    function authenticate(){
        setAuth(true)
    }

    return <AuthContext.Provider value={{state: auth, action: authenticate}} {...props} />
}

function useAuth(){
    const context = useContext(AuthContext);
    if (!context){
        throw new Error('useAuth must be used within a Provider');
    }
    return context;
}

export { useAuth, AuthProvider }
