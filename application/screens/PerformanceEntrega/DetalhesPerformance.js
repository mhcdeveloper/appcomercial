import React from 'react';
import { View } from 'react-native';
import { Container, Title, Input } from '../../styles';
import { width } from '../../utils';
import Colors from '../../styles/Colors';

export default DetalhesPerformance = ({ data }) => {
    const { item } = data;
    return (
        <View style={{ flex: 1, width, paddingRight: 30 }}>
            <Title top="20px" bottom="8px" align="left" left="15px">Número Nota Fiscal</Title>
            <View style={{ borderRadius: 20, padding: 10, backgroundColor: Colors.lighter }}>
                <Title align="left" left="15px" color={Colors.regular}>{item.NRNOTA}</Title>
            </View>
            <Title top="20px" bottom="8px" align="left" left="15px">Emissor</Title>
            <View style={{ borderRadius: 20, padding: 10, backgroundColor: Colors.lighter }}>
                <Title align="left" left="15px" color={Colors.regular}>{item.NMCLIENT}</Title>
            </View>
            <Title top="20px" bottom="8px" align="left" left="15px">Peso</Title>
            <View style={{ borderRadius: 20, padding: 10, backgroundColor: Colors.lighter }}>
                <Title align="left" left="15px" color={Colors.regular}>{item.PSBRUTO}</Title>
            </View>
            <Title top="20px" bottom="8px" align="left" left="15px">Valor</Title>
            <View style={{ borderRadius: 20, padding: 10, backgroundColor: Colors.lighter }}>
                <Title align="left" left="15px" color={Colors.regular}>{item.VRDELIVE}</Title>
            </View>
        </View>
    )
}
