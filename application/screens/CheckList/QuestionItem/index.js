import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ContainerRow, Title } from '../../../styles';
import Colors from '../../../styles/Colors';

const QuestionItem = ({ item }) => {
    return (
        <ContainerRow 
            marginTop="15px"
            marginBottom="15px">
            <View style={styles.question}>
                <Title align="left">
                    {item.DSCHLIST}
                </Title>
            </View>
            <View style={styles.answer}>
                <TouchableOpacity>
                    <Icon name="smile" size={40} color={item.action == 1 ? Colors.green : item.action == 0 ? Colors.light : Colors.light} />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingLeft: 15 }}>
                    <Icon name="frown" size={40} color={item.action == 2 ? Colors.red : item.action == 0 ? Colors.light : Colors.light} />
                </TouchableOpacity>
            </View>
        </ContainerRow>
    )
}

const styles = StyleSheet.create({
    question: {
        width: '65%',
        paddingLeft: 10
    },
    answer: {
        width: '35%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default QuestionItem;