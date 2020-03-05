import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../styles/Colors';
import { Title } from '../../styles';
import { width } from '../../utils';

export default LabelNps = ({ item }) => {
    return (
        <View style={[styles.container, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.containerTotal}>
                <Title weight="600" top="5px" font="55px" color={Colors.white}>{item.total}</Title>
            </View>
            <View style={styles.containerLabel}>
                <Title bottom="5px" font="14px" color={Colors.regular}>{item.label}</Title>
            </View>
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
    },
    containerTotal: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 30,
    },
    containerLabel: {
        backgroundColor: Colors.lighter,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 3,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    }
})