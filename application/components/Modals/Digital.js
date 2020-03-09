import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";
import FingerprintScanner from 'react-native-fingerprint-scanner';

import { ContainerRow, Title, ContainerCenter, Content } from '../../styles';
import Colors from '../../styles/Colors';

export default Digital = ({ }) => {
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true)
        FingerprintScanner
            .authenticate({ description: 'Autenticar com biometria, Posicione o dedo no leitor' })
            .then(() => {
                setLoading(true)
            })
            .catch((error) => {
                alert(error.message);
            });
    }, [])
    return (
        <Modal
            animationIn="slideInUp"
            style={styles.container}
            isVisible={show}>
            <ContainerCenter>
                <Title font="22px" color={Colors.black}>Autenticar com biometria</Title>
                <Title color={Colors.regular}>Posicione o dedo no leitor</Title>
                <ContainerRow
                    marginTop="30px"
                    marginBottom="30px"
                    justifyContent="flex-start">
                    <Icon name="fingerprint" size={40} color={Colors.light} />
                    <Title font="19px" left="15px" color={Colors.regular}>Use sua impressão digital</Title>
                </ContainerRow>
                {loading
                    ?
                    <Content
                        marginTop="20px"
                        backgroundColor={Colors.transparent}>
                        <ActivityIndicator size="large" color={Colors.white} />
                    </Content>
                    :
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setShow(false)}>
                        <Title color={Colors.link}>Digitar e-mail e senha</Title>
                    </TouchableOpacity>
                }
            </ContainerCenter>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        padding: 20,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.white,
        borderRadius: 20,
    }
})