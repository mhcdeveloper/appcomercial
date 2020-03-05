import React, { useEffect, useState } from 'react';
import { ContainerScroll, Title, Hr, ContainerWrapper, Container } from '../../styles';
import { StatusBar } from 'react-native';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import LabelBox from '../../components/Label/LabelBox';
import SpeedoMeter from '../../components/Charts/SpeedoMeter';
import LabelNps from '../../components/Label/LabelNps';

export default Nps = ({ }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let data = [
            {
                totals: [
                    { label: 'Total de entrega', total: 1511 },
                    { label: 'Total NPS respondidas', total: 32 },
                    { label: 'NPS respondidas vs. Entregas', total: "2.12%" },
                ],
                nps: [
                    { label: 'Detratores', total: 19, backgroundColor: '#E64C65' },
                    { label: 'Neutros', total: 46, backgroundColor: '#FCB150' },
                    { label: 'Promotores', total: 100, backgroundColor: '#05A802' },
                ]
            }
        ]
        setData(data)
    }, [])

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header showBack={true} />
            <ContainerScroll>
                <Title align="left" left="15px" top="35px" font="26px" weight="600">NPS</Title>
                <Hr />
                <ContainerWrapper>
                    {data.length > 0 &&
                        data[0].totals.map((d, index) => (
                            <LabelBox key={index} item={d} />
                        ))}
                </ContainerWrapper>
                <SpeedoMeter />
                <ContainerWrapper>
                    {data.length > 0 &&
                        data[0].nps.map((d, index) => (
                            <LabelNps key={index} item={d} />
                        ))}
                </ContainerWrapper>
            </ContainerScroll>
        </Container>
    )
}