import React, { useEffect, useState } from 'react';
import { ContainerScroll, Title, Hr, ContainerWrapper } from '../../styles';
import { StatusBar } from 'react-native';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import LabelBox from '../../components/Label/LabelBox';

export default Nps = ({ }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let data = [
            {
                totals: [
                    { label: 'Total de entrega', total: 1511 },
                    { label: 'Total NPS respondidas', total: 32 },
                    { label: 'NPS respondidas vs. Entregas', total: "2.12%" },
                ]
            }
        ]
        setData(data)
    }, [])

    return (
        <ContainerScroll>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header showBack={true} />
            <Title align="left" left="15px" top="35px" font="24px" weight="600">NPS</Title>
            <Hr />
            <ContainerWrapper>
                {data.length > 0 &&
                    data[0].totals.map((d, index) => (
                        <LabelBox key={index} label={d.label} total={d.total} />
                    ))}
            </ContainerWrapper>
        </ContainerScroll>
    )
}