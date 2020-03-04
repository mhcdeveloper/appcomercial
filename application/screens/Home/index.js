import React, { useState } from 'react';

import { Container, ContainerWrapper, ContainerScroll } from '../../styles';
import Header from '../../components/Header';
import { StatusBar } from 'react-native';
import Colors from '../../styles/Colors';
import ButtonSquare from '../../components/Buttons/ButtonSquare';

const menus = [
    {
        icon: 'truck',
        label: 'Notas em Trânsito',
        menuScreen: {
            label: 'Notas em Trânsito',
            filters: [
                { label: 'Número Nota Fiscal', name: 'NRNOTA' },
                { label: 'Periodo', name: 'INTERVAL' },
            ],
            grid: [
                { label: 'Número Nota Fiscal', name: 'NRNOTA' },
                { label: 'Transportadora', name: 'TRANSP' },
                { label: 'Previsão de Entrega', name: 'PREV' },
                { label: 'Remetente', name: 'REME' },
            ]
        }
    },
    { icon: 'file-alt', label: 'AG Estoque' },
    { icon: 'truck-loading', label: 'Performance de Entrega' },
    { icon: 'chart-bar', label: 'Devolução' },
    { icon: 'chart-line', label: 'Histórico de Vendas' },
    { icon: 'chart-bar', label: 'NPS', rota: 'Nps' },
    { icon: 'exclamation-triangle', label: 'Ocorrências' },
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