import React, { useEffect, useContext } from 'react';
import { ImageBackground, StatusBar } from 'react-native';

import styles from '../../styles/styles';
import { BACKGROUND_SPLASH } from '../../assets/consts';
import Logo from '../../components/Logo';
import { useNavigation } from '@react-navigation/native';
import { getUserInfo } from '../../utils';
import { login } from '../../services/loginService';
import { AuthContext } from '../../Context';

export default Welcome = ({ }) => {
    const { signIn, signOut } = useContext(AuthContext);
    useEffect(() => {
        getUserInfo().then(async user => {
            if (user) {
                await login(user).then(_ => {
                    signIn();
                }).catch(err => alert('Não foi possivel fazer a autenticação'))
            } else {
                signOut();
            }
        });
    }, []);
    return (
        <ImageBackground
            source={BACKGROUND_SPLASH}
            style={styles.imageBackground}
            imageStyle={{
                resizeMode: 'stretch',
            }}>
            <StatusBar hidden />
            <Logo />
        </ImageBackground>
    )
}