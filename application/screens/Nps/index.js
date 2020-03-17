import React, { useEffect, useState } from 'react';
import { StatusBar, RefreshControl } from 'react-native';

import { ContainerScroll, Title, Hr, ContainerWrapper, Container } from '../../styles';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import LabelBox from '../../components/Label/LabelBox';
import SpeedoMeter from '../../components/Charts/SpeedoMeter';
import LabelNps from '../../components/Label/LabelNps';
import { getNps } from '../../services';
import Loading from '../../components/Loading';

export default Nps = ({ }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        nps();
    }, [])

    function nps() {
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
                        { label: 'Detratores', total: detratores, backgroundColor: '#E64C65', type: 1 },
                        { label: 'Neutros', total: neutros, backgroundColor: '#FCB150', type: 2 },
                        { label: 'Promotores', total: promotores, backgroundColor: '#05A802', type: 3 },
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
                            <RefreshControl refreshing={loading} onRefresh={nps} />
                        }>
                        <Title align="left" left="15px" top="35px" font="26px" weight="600">NPS</Title>
                        <Hr />
                        <ContainerWrapper>
                            {data.length > 0 &&
                                data[0].totals.map((d, index) => (
                                    <LabelBox key={index} item={d} />
                                ))}
                        </ContainerWrapper>
                        <SpeedoMeter valor={data[0].valor} />
                        <ContainerWrapper>
                            {data.length > 0 &&
                                data[0].nps.map((d, index) => (
                                    <LabelNps key={index} item={d} />
                                ))}
                        </ContainerWrapper>
                    </ContainerScroll>
                </>
            }
        </Container>
    )
}