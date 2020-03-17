import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pie from 'react-native-pie'

import { Title, ContainerCenter } from '../../styles';

export default PieCharts = ({ }) => {
    return (
        <ContainerCenter>
            <Pie
                radius={140}
                innerRadius={100}
                sections={[
                    {
                        percentage: 41.7,
                        color: '#05A802',
                    },
                    {
                        percentage: 6.4,
                        color: '#A80202',
                    },
                    {
                        percentage: 51.87,
                        color: '#016DD2',
                    },
                ]}
                backgroundColor="#ddd"
            />
            <View style={styles.gauge}>
                <Title font="60px" weight="600">60%</Title>
            </View>
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