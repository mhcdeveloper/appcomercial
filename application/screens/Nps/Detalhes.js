import React from 'react';
import { View } from 'react-native';
import { Title } from '../../styles';
import { width } from '../../utils';
import Colors from '../../styles/Colors';

export default Detalhes = ({ item }) => {
    return (
        <View style={{ flex: 1, width, paddingRight: 30 }}>
            <Title top="20px" bottom="8px" align="left" left="15px">Nota Fiscal</Title>
            <View style={{ borderRadius: 20, padding: 10, backgroundColor: Colors.lighter }}>
                <Title align="left" left="15px" color={Colors.regular}>{item.NOTAFISCAL}</Title>
            </View>
            <Title top="20px" bottom="8px" align="left" left="15px">Nota</Title>
            <View style={{ borderRadius: 20, padding: 10, backgroundColor: Colors.lighter }}>
                <Title align="left" left="15px" color={Colors.regular}>{item.NOTA}</Title>
            </View>
            <Title top="20px" bottom="8px" align="left" left="15px">Descrição</Title>
            <View style={{ borderRadius: 20, padding: 10, backgroundColor: Colors.lighter }}>
                <Title align="left" left="15px" color={Colors.regular}>{item.DSCOMENT}</Title>
            </View>
        </View>
    )
}
