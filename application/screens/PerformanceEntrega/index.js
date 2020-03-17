import React, { useEffect, useState } from 'react';
import { StatusBar, RefreshControl } from 'react-native';

import { ContainerScroll, Title, Hr, ContainerWrapper, Container } from '../../styles';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import LabelBox from '../../components/Label/LabelBox';
import LabelNps from '../../components/Label/LabelNps';
import { getNps } from '../../services';
import Loading from '../../components/Loading';
import PieCharts from '../../components/Charts/PieCharts';

export default PerformanceEntrega = ({ }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        performanceEntrega();
    }, [])

    function performanceEntrega() {
        setLoading(true);
        getNps().then(nps => {
            console.log(nps)
            const { entregue, total, detratores, neutros, promotores, valor, npsVsEntregue } = nps.data
            let data = [
                {
                    totals: [
                        { label: 'Total de entrega', total: entregue },
                        { label: 'Total NPS respondidas', total },
                        { label: 'NPS respondidas vs. Entregas', total: `${npsVsEntregue}%` },
                    ],
                    nps: [
                        { label: 'Antecipado', total: detratores, backgroundColor: '#016DD2', type: 1 },
                        { label: 'Prazo', total: neutros, backgroundColor: '#05A802', type: 2 },
                        { label: 'Atrasado', total: promotores, backgroundColor: '#A80202', type: 3 },
                    ],
                    valor
                }
            ]
            setData(data)
            setLoading(false);
        });
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header showBack={true} />
            {loading
                ?
                <Loading />
                :
                <>
                    <ContainerScroll
                        refreshControl={
                            <RefreshControl refreshing={loading} onRefresh={performanceEntrega} />
                        }>
                        <Title align="left" left="15px" top="35px" font="26px" weight="600">Performance de entrega</Title>
                        <Hr />
                        <Container flex={1}>
                            <PieCharts />
                            <ContainerWrapper>
                                {data.length > 0 &&
                                    data[0].nps.map((d, index) => (
                                        <LabelNps key={index} item={d} />
                                    ))}
                            </ContainerWrapper>
                        </Container>
                    </ContainerScroll>
                </>
            }
        </Container>
    )
}