import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Title, ContainerScroll, Hr } from '../../styles';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import Search from '../../components/Search';
import Btn from '../../components/Buttons';

export default HistoricoVenda = ({ }) => {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header showBack={true} />
            <ContainerScroll>
                <Container flex={1}>
                    <Title align="left" left="15px" top="35px" font="26px" weight="600">Histórico de Vendas</Title>
                    <Hr />

                    <Title align="left" left="15px" top="35px" font="20px" color={Colors.regular}>Nome do Produto</Title>
                    <Search />

                    <Title align="left" left="15px" top="35px" font="20px" color={Colors.regular}>Selecionar período</Title>

                    <Title align="left" left="15px" top="35px" font="18px" color={Colors.regular}>Ano</Title>
                    <Title align="left" left="15px" top="35px" font="18px" color={Colors.regular}>Mês</Title>

                    <Btn
                        padding="16px"
                        font="28px"
                        label="Pesquisar"
                        onSubmit={() => alert('ok')}
                        backgroundColor={Colors.primary}
                    />
                </Container>
            </ContainerScroll>
        </Container>
    )
}