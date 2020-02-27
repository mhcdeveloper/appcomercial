import React, { useEffect } from 'react';
import { ImageBackground, StatusBar } from 'react-native';

import styles from '../../styles/styles';
import { BACKGROUND_SPLASH } from '../../assets/consts';
import Logo from '../../components/Logo';
import { useNavigation } from '@react-navigation/native';

export default Welcome = ({ }) => {
    const { navigate } = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigate('Login')
        }, 3000);
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