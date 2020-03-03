import React, { useState } from 'react';

import { Container, ContainerWrapper, ContainerScroll } from '../../styles';
import Header from '../../components/Header';
import { StatusBar } from 'react-native';
import Colors from '../../styles/Colors';
import ButtonSquare from '../../components/Buttons/ButtonSquare';

const menus = [
    { icon: 'truck', label: 'Notas em Trânsito' },
    { icon: 'file-alt', label: 'AG Estoque' },
    { icon: 'truck-loading', label: 'Performance de Entrega' },
    { icon: 'exclamation-triangle', label: 'Ocorrências' },
    { icon: 'chart-line', label: 'Histórico de Vendas' },
    { icon: 'chart-bar', label: 'NPS' },
    { icon: 'chart-bar', label: 'Devolução' },
]

const Home = ({ }) => {
    const [ showMenu, setShowMenu ] = useState(false);

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
                            <ButtonSquare key={index} label={m.label} icon={m.icon} />
                        ))}
                    </ContainerWrapper>
                </ContainerScroll>
            }
        </Container>
    )
}

export default Home;