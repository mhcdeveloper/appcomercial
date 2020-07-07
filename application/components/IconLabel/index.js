import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Title, Hr } from '../../styles';
import Colors from '../../styles/Colors';

const IconLabel = ({ icon, label, title }) => {
    return (
        <>
            <View style={styles.container}>
                {icon && 
                    <View style={styles.userIcon}>
                        <Icon name="user" size={40} color={Colors.white} />
                    </View>
                }
                <View style={styles.info}>
                    <Title align="left" left="15px">
                        {label}
                    </Title>
                    <Title font="26px" align="left" left="15px" weight="bold">
                        {title}
                    </Title>
                </View>
            </View>
            <Hr />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 25 
    },
    userIcon: {
        width: '16%',
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.light,
        padding: 10,
        borderRadius: 100
    },
    info: {
        width: '80%',
    }
});

export default IconLabel;