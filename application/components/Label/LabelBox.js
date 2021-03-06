import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../styles/Colors';
import { Title } from '../../styles';
import { width } from '../../utils';

export default LabelBox = ({ item }) => {
    return (
        <View style={styles.container}>
            <Title font="14px" color={Colors.regular}>{item.label}</Title>
            <Title weight="600" top="5px" font="30px" color={Colors.primary}>{item.total}</Title>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 3.3,
        minHeight: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: Colors.gray,
        paddingLeft: 5,
        paddingRight: 5,
        margin: 5
    }
})