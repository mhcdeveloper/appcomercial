import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Title, Hr } from '../../styles';
import Colors from '../../styles/Colors';

const IconLabel = ({ icon, label, title }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.content,
            {
                marginTop: icon ? 0 : "2.5%",
                marginLeft: icon ? "4.5%" : "2.5%",
                marginBottom: icon ? 0 : "6%",
            }]}>
                {icon &&
                    <View style={styles.userIcon}>
                        <Icon name="user" size={45} color={Colors.white} />
                    </View>
                }
                <View style={[styles.info, { width: icon ? '80%' : '100%' }]}>
                    <Title align="left" left="15px" font="18px">
                        {label}
                    </Title>
                    <Title font="20px" align="left" left="15px" weight="bold">
                        {title}
                    </Title>
                </View>
            </View>
            <Hr />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
    },
    userIcon: {
        width: '20%',
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.light,
        borderRadius: 100
    },
    info: {
        width: '80%',
    }
});

export default IconLabel;