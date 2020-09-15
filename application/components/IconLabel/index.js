import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Title, Hr } from '../../styles';
import Colors from '../../styles/Colors';

const IconLabel = ({ icon, label, title }) => {
    return (
        <>
            <View style={[styles.container,
            {
                marginLeft: icon ? "4.5%" : "1.5%",
                marginBottom: icon ? 0 : "4.5%",
                marginTop: icon ? 0 : "15%",
            }]}>
                {icon &&
                    <View style={styles.userIcon}>
                        <Icon name="user" size={40} color={Colors.white} />
                    </View>
                }
                <View style={[styles.info, { width: icon ? '80%' : '100%' }]}>
                    <Title align="left" left="15px" font="15px">
                        {label}
                    </Title>
                    <Title font="18px" align="left" left="15px" weight="bold">
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
    },
    userIcon: {
        width: '18%',
        height: "42%",
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