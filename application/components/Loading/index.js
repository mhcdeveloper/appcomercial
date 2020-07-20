import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { ContainerCenter, Title } from '../../styles';
import Colors from '../../styles/Colors';

export default Loading = ({ label }) => (
    <View style={styles.container}>
        <ContainerCenter>
            <ActivityIndicator size="large" color={Colors.white} />
            <Title color={Colors.white}>{label}</Title>
        </ContainerCenter>
    </View>
)

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }
});