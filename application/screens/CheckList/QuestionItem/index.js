import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ContainerRow, Title } from '../../../styles';
import Colors from '../../../styles/Colors';

const QuestionItem = ({ item, changeAnswer }) => {    
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
                <TouchableOpacity  
                    onPress={() => changeAnswer(item, 1)}
                    activeOpacity={0.7}>
                    <Icon name="smile" size={40} color={item.SNRESULT == 1 ? Colors.green : item.SNRESULT == 2 ? Colors.light : Colors.light} />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => changeAnswer(item, 0)}
                    activeOpacity={0.7}
                    style={{ paddingLeft: 15 }}>
                    <Icon name="frown" size={40} color={item.SNRESULT == 0 ? Colors.red : item.SNRESULT == 2 ? Colors.light : Colors.light} />
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