import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ContainerCenter, Title } from '../../styles';
import Colors from '../../styles/Colors';
import BtnFull from '../Buttons/BtnFull';

const AlertScreen = ({ icon, color, message, alert, handleSubmit }) => {
    return (
        <View style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            paddingBottom: 20,
            backgroundColor: color
        }}>
            <ContainerCenter backgroundColor={Colors.white}>
                <Icon name={icon} color={color} size={150} />
                <Title top="25px" bottom="25px" weight="bold" font="36px">{alert}</Title>
                <Title>{message}</Title>
            </ContainerCenter>
            <BtnFull
                onSubmit={handleSubmit}
                padding="10px"
                label="Confirmar"
                font="28px"
                backgroundColor={color} />
        </View>
    )
}

export default AlertScreen;