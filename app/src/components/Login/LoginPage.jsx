import React, { useRef } from 'react';
import styled from 'styled-components';
import { styled as mStyled} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import wallpaperBg from '../../source/wallpaper.svg';
import LoginAvatar from '../../source/login_avatar.svg';
import FormComponent from './FormComponent';
import { Redirect } from '@reach/router';
import { useAuth } from '../../context/auth-context'

const MainCont =  styled.div`
    min-height: 100vh;
    max-height: auto;
    background-color: white;
    display: flex;
`

const WallpaperCont = styled.div`
    background-image: url(${wallpaperBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    flex: 2;
`

const LoginCont = styled.div`
    background-color: #00B0FF;
    flex: 1;
    display: flex;
`

const LoginComponent = mStyled(Card)({
    background: 'white',
    margin: 'auto',
    width: '50%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '10px 10px 19px -10px rgba(0,0,0,0.75)'
});

const AvatarCont = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`

const FormCont = styled.div`
    flex: 1;
    margin: 20px 0px 10px 0px;
`



export default () => {
    const getAuth = useAuth();
    const isAuth = useRef(getAuth.state);

    console.log(isAuth)
    return isAuth.current? <Redirect to="/homepage" noThrow /> : (
        <MainCont>
            <WallpaperCont />
            <LoginCont>
                <LoginComponent>
                    <AvatarCont>
                        <div style={{borderRadius: '50%' ,backgroundColor: '#00B0FF', overflow: 'hidden', display: 'flex'}}>
                            <img alt="login avatar" src={LoginAvatar} width="100%" />
                        </div>
                    </AvatarCont>
                    <FormCont>
                        <FormComponent />
                    </FormCont>
                </LoginComponent>
            </LoginCont>
        </MainCont>
    )
}