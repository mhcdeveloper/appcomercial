import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Colors from '../../styles/Colors';
import { Title } from '../../styles';
import { width } from '../../utils';
import { useNavigation } from '@react-navigation/native';

export default ButtonSquare = ({ label, icon, menuScreen, rota }) => {
    const { navigate } = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigate(`${rota}`)}
            activeOpacity={0.7}>
            <Icon name={icon} size={38} color={Colors.primary} />
            <Title weight="600" top="5px" font="16px" color={Colors.primary}>{label}</Title>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 3.3,
        minHeight: 140,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.gray,
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 5,
        paddingRight: 5,
        margin: 5
    }
})