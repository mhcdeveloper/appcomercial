import React, { useState } from 'react';

import { Container, ContainerWrapper, ContainerScroll } from '../../styles';
import Header from '../../components/Header';
import { StatusBar } from 'react-native';
import Colors from '../../styles/Colors';
import ButtonSquare from '../../components/Buttons/ButtonSquare';

const menus = [
    { icon: 'truck', label: 'Notas em Trânsito', rota: 'NotasTransito'},
    { icon: 'file-alt', label: 'AG Estoque', rota: 'AgEstoque' },
    { icon: 'truck-loading', label: 'Performance de Entrega', rota: 'PerformanceEntrega' },
    { icon: 'chart-bar', label: 'Devolução', rota: 'Devolucao' },
    { icon: 'chart-line', label: 'Histórico de Vendas', rota: 'HistoricoVenda' },
    { icon: 'chart-bar', label: 'NPS', rota: 'Nps' },
    { icon: 'exclamation-triangle', label: 'Ocorrências', rota: 'Ocorrencias' },
]

const Home = ({ }) => {
    const [showMenu, setShowMenu] = useState(false);

    function handleShowMenu(show) {
        setShowMenu(show);
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header setMenu={(show) => handleShowMenu(show)} />
            {showMenu &&
                <ContainerScroll
                    marginTop="10px"
                    showsVerticalScrollIndicator={false}>
                    <ContainerWrapper>
                        {menus.map((m, index) => (
                            <ButtonSquare
                                key={index}
                                label={m.label}
                                icon={m.icon}
                                menuScreen={m.menuScreen}
                                rota={m.rota}
                            />
                        ))}
                    </ContainerWrapper>
                </ContainerScroll>
            }
        </Container>
    )
}

export default Home;