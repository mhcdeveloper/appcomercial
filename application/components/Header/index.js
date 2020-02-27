import React from 'react';
import { View, ImageBackground } from 'react-native';
import { HEADER } from '../../assets/consts';
import styles from '../../styles/styles';

export default Header = ({}) => (
    <View style={styles.containerHeader}>
        <ImageBackground 
            style={styles.imgHeader}
            imageStyle={{ resizeMode: 'stretch' }}
            source={HEADER}>

        </ImageBackground>
    </View>
)