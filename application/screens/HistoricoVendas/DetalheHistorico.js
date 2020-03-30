import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ContainerScroll, Title, Hr, Container } from '../../styles';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import PieChartsHistorico from '../../components/Charts/PieChartsHistorico';
import Btn from '../../components/Buttons';

export default DetalheHistorico = ({ route }) => {
    const [data, setData] = useState(false);
    const [nome, setNome] = useState(false);
    const { goBack } = useNavigation();

    useEffect(() => {
        const { dados, nomeProduto } = route.params;
        setNome(nomeProduto)
        setData(dados);
    }, []);

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header showBack={true} />
            <ContainerScroll showsVerticalScrollIndicator={false}>
                <Title align="left" left="15px" top="35px" font="26px" weight="600">Histórico de Vendas</Title>
                <Hr />
                <Title align="left" left="15px" top="30px" font="20px" weight="600" color={Colors.dark}>Nome do Produto</Title>
                {nome && <Title align="left" left="15px" top="5px" font="20px" color={Colors.regular}>{nome}</Title>}
                <Container
                    marginTop="20px"
                    marginBottom="10px">
                    {data && <PieChartsHistorico data={data} />}
                </Container>
                <Btn
                    padding="16px"
                    font="28px"
                    label="Nova Pesquisa"
                    onSubmit={() => goBack()}
                    backgroundColor={Colors.primary}
                />
            </ContainerScroll>
        </Container>
    )
}