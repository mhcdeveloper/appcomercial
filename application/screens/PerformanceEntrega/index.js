import React, { useEffect, useState } from 'react';
import { StatusBar, RefreshControl } from 'react-native';

import { ContainerScroll, Title, Hr, ContainerWrapper, Container } from '../../styles';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import LabelNps from '../../components/Label/LabelNps';
import { getListPerformanceEntrega } from '../../services';
import Loading from '../../components/Loading';
import PieCharts from '../../components/Charts/PieCharts';
import { useSelector } from 'react-redux';

export default PerformanceEntrega = ({ }) => {
    const [section, setSection] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    const header = useSelector(state => state.header);

    useEffect(() => {
        performanceEntrega();
    }, [])

    function performanceEntrega() {
        setLoading(true);
        getListPerformanceEntrega({ idCliente: header.cliente.ID }).then(performance => {
            const { antecipado, prazo, atrasado, section } = performance.data
            let data = [
                {
                    performance: [
                        { label: 'Antecipado', total: antecipado.length, backgroundColor: '#016DD2', list: antecipado, type: 2 },
                        { label: 'Prazo', total: prazo.length, backgroundColor: '#05A802', list: prazo, type: 2 },
                        { label: 'Atrasado', total: atrasado.length, backgroundColor: '#A80202', list: atrasado, type: 2 },
                    ]
                }
            ]
            setData(data)
            setSection(section);
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
                            {section && <PieCharts data={section} />}
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