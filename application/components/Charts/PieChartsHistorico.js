import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Pie from 'react-native-pie'

import { Title, ContainerCenter, ContainerRow } from '../../styles';
import Colors from '../../styles/Colors';

export default PieCharts = ({ data }) => {
    const [section, setSection] = useState(false);

    useEffect(() => {
        setSection(data.filter(d => d.valor > 0));
    }, [])

    return (
        <ContainerCenter>
            {section &&
                <ContainerRow justifyContent="space-between">
                    <View style={styles.chart}>
                        <Pie
                            radius={140}
                            innerRadius={100}
                            sections={section}
                            backgroundColor="#ddd"
                        />
                    </View>
                    <View style={styles.info}>
                        {data.map(d => {
                            return (
                                <View style={styles.legend}>
                                    <Title font="18px" align="left" weight="600" color={d.color}>{d.ano}</Title>
                                    <Title font="26px" left="10px" weight="600" color={Colors.regular}>{d.valor}</Title>
                                </View>
                            )
                        })}
                    </View>
                </ContainerRow>
            }
        </ContainerCenter>

    )
}

const styles = StyleSheet.create({
    chart: {
        marginRight: 15
    },
    legend: {
        paddingHorizontal: 10,
        backgroundColor: Colors.lighter,
        borderRadius: 10,
        marginRight: 15,
        margin: 5
    }
})