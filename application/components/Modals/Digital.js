import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";

import { ContainerRow, Title, ContainerCenter } from '../../styles';
import Colors from '../../styles/Colors';

export default Digital = ({ }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true)
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
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setShow(false)}>
                    <Title color={Colors.link}>Digitar e-mail e senha</Title>
                </TouchableOpacity>
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