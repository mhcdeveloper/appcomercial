import React, { useState } from 'react';

import { Container, ContentMain, ContainerFooter, ContainerCenter } from '../../styles';
import Header from '../../components/Header';
import { StatusBar } from 'react-native';
import Colors from '../../styles/Colors';
import IconLabel from '../../components/IconLabel';
import ButtonSquare from '../../components/Buttons/ButtonSquare';
import BtnFull from '../../components/Buttons/BtnFull';

const Home = ({ }) => {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header setMenu={(show) => handleShowMenu(show)} />
            <ContentMain>
                <IconLabel icon="true" label="Bem Vindo," title="Matheus Oliveira" />
                <ContainerCenter>
                    <ButtonSquare rota="CheckList" icon="check-circle" label="CheckList" sublabel="Hora Certa" />
                </ContainerCenter>
                <BtnFull padding="10px" label="Sair" font="28px" />
            </ContentMain>
        </Container>
    )
}

export default Home;