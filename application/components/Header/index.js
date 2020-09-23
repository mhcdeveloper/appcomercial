import React from 'react';
import { View, TouchableOpacity, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import { LOGO_EVOLOG } from '../../assets/consts';
import styles from '../../styles/styles';
import Colors from '../../styles/Colors';
import { ContainerCenter } from '../../styles';

export default Header = ({ back }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.containerHeader}>
            {back &&
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        top: Platform.OS == 'ios' ? '2%' : '2.6%',
                        left: '45%',
                        zIndex: 1000,
                    }}
                    activeOpacity={0.5}>
                    <Icon name="arrow-alt-circle-left" size={35} color={Colors.white} />
                </TouchableOpacity>
            }
            <ContainerCenter>
                <Image source={LOGO_EVOLOG} style={styles.imgHeader} />
            </ContainerCenter>
        </View>
    )
} 