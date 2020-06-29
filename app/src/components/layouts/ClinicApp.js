import React from 'react';
import Routes from '../../Routes';
import AppProvider from '../../context/index';


const ClinicApp = (props) => {
    return <Routes />
}

export default (props) => {
    return (
        <AppProvider>
            <ClinicApp {...props} />
        </AppProvider>
    )
}