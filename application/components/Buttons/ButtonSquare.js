import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../../styles/Colors';
import { Title } from '../../styles';
import { useNavigation } from '@react-navigation/native';

export default ButtonSquare = ({ label, icon, rota, sublabel }) => {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigate(`${rota}`)}
            activeOpacity={0.7}>
            <Icon name={icon} size={40} color={Colors.white} />
            <Title weight="bold" top="5px" font="18px" color={Colors.white}>{label}</Title>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "50%",
        minHeight: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.primary,
        margin: 5
    }
})