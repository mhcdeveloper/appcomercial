import React, { useState } from 'react';
import { View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { LOGO_EVOLOG_MIN } from '../../assets/consts';
import styles from '../../styles/styles';
import { Title, ContainerRow } from '../../styles';
import Colors from '../../styles/Colors';

export default Header = ({ }) => {
    const [show, setShow] = useState(true);

    return (
        <View style={styles.containerHeader}>
            <Image source={LOGO_EVOLOG_MIN} style={custom.logo} />
            {show &&
                <>
                    <View>
                        <Title font="25px" align="left" left="30px" color={Colors.white} top="35px" bottom="20px" weight="500">Olá, Matheus Oliveira</Title>
                    </View>
                    {/* <View>
                        <Title font="20px" align="left" left="30px" color={Colors.white} top="10px">Para iniciar selecione seu cliente</Title>
                        <View style={custom.search}>
                            <ContainerRow
                                justifyContent="flex-start"
                                backgroundColor={Colors.white}
                                borderRadius={35}
                                marginLeft="20px"
                                marginRight="20px"
                                paddingLeft="10px"
                                paddingRight="10px"
                                paddingTop="9px"
                                paddingBottom="9px"
                                borderWidth={1}
                                borderColor={Colors.light}
                            >
                                <Icon name="search" size={28} color={Colors.regular} style={custom.icon} />
                                <TextInput style={custom.inputText} placeholder="Procure o cliente" />
                            </ContainerRow>
                        </View>
                    </View> */}
                    <ContainerRow>
                        <View>
                            <Title font={20} align="left" left="30px" color={Colors.white} weight="500">Cliente:</Title>
                            <Title font={20} align="left" left="30px" color={Colors.white}>Adair José Tomazi</Title>
                        </View>
                        <TouchableOpacity
                            style={custom.btnCliente}
                            activeOpacity={0.7}>
                            <Title>Trocar Cliente</Title>
                        </TouchableOpacity>
                    </ContainerRow>
                </>
            }
            <TouchableOpacity
                    activeOpacity={0.7}
                    style={custom.btn}
                    onPress={() => setShow(!show)}>
                    <Icon name={show ? 'sort-up' : 'sort-down'} size={35} color={Colors.white} />
                </TouchableOpacity>
        </View>
    )
}

const custom = StyleSheet.create({
    inputText: {
        width: '85%',
        fontSize: 20,
        color: Colors.regular
    },
    icon: {
        width: '15%',
        paddingLeft: 10,
    },
    logo: {
        marginLeft: 30,
        marginTop: 30
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    btnCliente: {
        backgroundColor: Colors.white,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 30,
        marginRight: 15
    },
    search: {
        position: 'relative',
        bottom: -25
    }
})