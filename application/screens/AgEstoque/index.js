import React from 'react';
import { StatusBar } from 'react-native';

import Colors from '../../styles/Colors';
import { Container, Hr, Title } from '../../styles';
import Header from '../../components/Header';
import Manutencao from '../../components/Manutencao';

export default AgEstoque = () => {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header showBack={true} />    
            <Title align="left" left="15px" top="35px" font="26px" weight="600">Ag Estoque</Title>
            <Hr />
            <Manutencao />
        </Container>
    )
}