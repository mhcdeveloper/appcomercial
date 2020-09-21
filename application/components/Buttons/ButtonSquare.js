import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Colors from '../../styles/Colors';
import { Title } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setModulo } from '../../store/Actions/QuestionActions';

export default ButtonSquare = ({ label, icon, rota, IDS025, modulo }) => {
    const dispatch = useDispatch();
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                navigate(`${rota}`, { IDS025 });
                dispatch(setModulo(modulo));
            }}
            activeOpacity={0.7}>
            <Icon name={icon} size={55} color={Colors.white} />
            <Title weight="bold" top="8px" font="20px" color={Colors.white}>{label}</Title>
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