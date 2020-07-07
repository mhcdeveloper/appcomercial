import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../../styles/Colors';
import { Title } from '../../styles';
import { width } from '../../utils';
import { useNavigation } from '@react-navigation/native';

export default ButtonSquare = ({ label, icon, rota, sublabel }) => {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigate(`${rota}`)}
            activeOpacity={0.7}>
            <Icon name={icon} size={50} color={Colors.white} />
            <Title weight="bold" top="5px" font="26px" color={Colors.white}>{label}</Title>
            <Title weight="bold" font="16px" color={Colors.white}>{sublabel}</Title>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 210,
        minHeight: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.primary,
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 5,
        paddingRight: 5,
        margin: 5
    }
})