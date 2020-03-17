import React, { useEffect, useState } from 'react';
import { StatusBar, RefreshControl } from 'react-native';

import { ContainerScroll, Title, Hr, ContainerWrapper, Container } from '../../styles';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import LabelBox from '../../components/Label/LabelBox';
import LabelNps from '../../components/Label/LabelNps';
import { getListPerformanceEntrega } from '../../services';
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
        getListPerformanceEntrega().then(performance => {
            const { antecipado, prazo, atrasado } = performance.data
            let data = [
                {
                    performance: [
                        { label: 'Antecipado', total: antecipado, backgroundColor: '#016DD2', type: 1 },
                        { label: 'Prazo', total: prazo, backgroundColor: '#05A802', type: 2 },
                        { label: 'Atrasado', total: atrasado, backgroundColor: '#A80202', type: 3 },
                    ]
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
                        <Container
                            marginTop="40px"
                            marginBottom="40px">
                            <PieCharts />
                        </Container>
                        <ContainerWrapper>
                            {data.length > 0 &&
                                data[0].performance.map((d, index) => (
                                    <LabelNps key={index} item={d} />
                                ))}
                        </ContainerWrapper>
                    </ContainerScroll>
                </>
            }
        </Container>
    )
}