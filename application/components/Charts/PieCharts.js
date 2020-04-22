import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Pie from 'react-native-pie'

import { Title, ContainerCenter } from '../../styles';

export default PieCharts = ({ data }) => {
    const [section, setSection] = useState(false);

    useEffect(() => {
        setSection(data);
    });

    return (
        <ContainerCenter>
            {section ?
                <>
                    <Pie
                        radius={140}
                        innerRadius={100}
                        sections={section}
                        backgroundColor="#ddd"
                    />
                    <View style={styles.gauge}>
                        <Title left="5px" right="5px" font="55px" weight="600">{parseFloat(section[0].percentage + section[2].percentage).toFixed(2)}%</Title>
                    </View>
                </>
                :
                <ActivityIndicator size="large" />
            }
        </ContainerCenter>

    )
}

const styles = StyleSheet.create({
    gauge: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
})