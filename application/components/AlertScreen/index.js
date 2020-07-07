import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, ContentMain, ContainerCenter, Title } from '../../styles';
import BtnFull from '../Buttons/BtnFull';

const AlertScreen = ({ icon, color, message, alert }) => {
    return (
        <Container>
            <ContainerCenter marginLeft={10} marginRight={10}>
                <Icon name={icon} color={color} size={150} />
                <Title top="25px" bottom="25px" weight="bold" font="36px">{alert}</Title>
                <Title>{message}</Title>
            </ContainerCenter>
            <BtnFull padding="10px" label="Confirmar" font="28px" backgroundColor={color} />
        </Container>
    )
}

export default AlertScreen;