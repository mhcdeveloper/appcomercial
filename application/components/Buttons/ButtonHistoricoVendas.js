import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '../../styles/Colors';
import { Title } from '../../styles';
import { width } from '../../utils';

export default ButtonHistoricoVendas = ({ item, handleItem }) => {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: item.actived ? Colors.primary : Colors.gray }]}
            onPress={() => handleItem(item)}
            activeOpacity={0.7}>    
            <Title weight="600" font="20px" color={item.actived ? Colors.white : Colors.regular}>{item.label}</Title>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 3.3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.gray,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        margin: 5
    }
})