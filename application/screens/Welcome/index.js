import React, { useEffect } from 'react';
import { ImageBackground, StatusBar } from 'react-native';

import styles from '../../styles/styles';
import { BACKGROUND_SPLASH } from '../../assets/consts';
import Logo from '../../components/Logo';
import { useNavigation } from '@react-navigation/native';
import { getUser } from '../../utils';

export default Welcome = ({ }) => {
    const { navigate } = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            getUser().then(user => {
                if (user) {
                    navigate('Home');
                    // navigate('Login');
                } else {
                    navigate('Login');
                }
            });
        }, 2000);
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