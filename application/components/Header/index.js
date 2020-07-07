import React from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import { HEADER } from '../../assets/consts';
import styles from '../../styles/styles';
import Colors from '../../styles/Colors';

export default Header = ({ back }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.containerHeader}>
            {back &&
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        position: 'absolute',
                        top: 80,
                        left: 15,
                        zIndex: 100,
                    }}
                    activeOpacity={0.7}>
                    <Icon name="arrow-alt-circle-left" size={40} color={Colors.primary} />
                </TouchableOpacity>
            }
            <ImageBackground
                style={styles.imgHeader}
                imageStyle={{ resizeMode: 'stretch' }}
                source={HEADER}>
            </ImageBackground>
        </View>
    )
} 