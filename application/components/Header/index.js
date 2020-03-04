import React, { useState } from 'react';
import { View, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { LOGO_EVOLOG_MIN } from '../../assets/consts';
import styles from '../../styles/styles';
import { Title, ContainerRow, ContainerScroll } from '../../styles';
import Colors from '../../styles/Colors';
import { useNavigation } from '@react-navigation/native';

export default Header = ({ setMenu, showBack }) => {
    const { goBack } = useNavigation();
    const [show, setShow] = useState(true);
    const [cliente, setCliente] = useState(false);
    const [clientes, setClientes] = useState(false);

    async function searchCliente() {
        let clientes = [
            { id: 1, nome: 'Clarice Bee Perera' },
            { id: 2, nome: 'Plinio Luiz Basso' },
            { id: 3, nome: 'Adair José Tomazi' },
        ]
        setClientes(clientes);
    }

    async function handleCliente(cliente) {
        setCliente(cliente);
        setMenu(true);
    }

    function changeCliente() {
        setCliente(false);
        setClientes(false);
        setMenu(false);
    }

    return (
        <>
            <View style={styles.containerHeader}>
                <ContainerRow justifyContent="space-between">
                    <Image source={LOGO_EVOLOG_MIN} style={custom.logo} />
                    {showBack &&
                        <TouchableOpacity
                            onPress={() => goBack()}
                            style={{ paddingTop: 25, paddingRight: 15 }}
                            activeOpacity={0.7}>
                            <Icon name="arrow-circle-left" size={45} color={Colors.white} />
                        </TouchableOpacity>
                    }
                </ContainerRow>
                {show &&
                    <>
                        <View>
                            <Title font="25px" align="left" left="30px" color={Colors.white} top="20px" bottom="20px" weight="500">Olá, Matheus Oliveira</Title>
                        </View>
                        {!cliente
                            ?
                            <View>
                                <Title font="20px" align="left" left="30px" color={Colors.white} top="5px" bottom="35px">Para iniciar selecione seu cliente</Title>
                            </View>
                            :
                            <ContainerRow>
                                <View>
                                    <Title font={20} align="left" left="30px" color={Colors.white} weight="500">Cliente:</Title>
                                    <Title font={20} align="left" left="30px" color={Colors.white}>{cliente.nome}</Title>
                                </View>
                                <TouchableOpacity
                                    style={custom.btnCliente}
                                    onPress={() => changeCliente()}
                                    activeOpacity={0.7}>
                                    <Title>Trocar Cliente</Title>
                                </TouchableOpacity>
                            </ContainerRow>
                        }
                    </>
                }
                {cliente &&
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={custom.btn}
                        onPress={() => setShow(!show)}>
                        <Icon name={show ? 'sort-up' : 'sort-down'} size={35} color={Colors.white} />
                    </TouchableOpacity>
                }
            </View>
            {!cliente &&
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
                        zIndex={100}
                        elevation={10}
                        borderColor={Colors.light}
                    >
                        <Icon name="search" size={28} color={Colors.regular} style={custom.icon} />
                        <TextInput style={custom.inputText} placeholder="Procurar o cliente" onChangeText={(nome) => searchCliente(nome)} />
                    </ContainerRow>
                    {clientes &&
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={custom.scrollClientes}>
                            {clientes.map((cli, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => handleCliente(cli)}
                                        style={custom.btnSelectCliente}
                                        activeOpacity={0.7}>
                                        <Title key={index} align="left" color={Colors.regular}>{cli.nome}</Title>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    }
                </View>
            }
        </>
    )
}

const custom = StyleSheet.create({
    scrollClientes: {
        backgroundColor: Colors.hight,
        position: 'relative',
        top: -14,
        left: 0,
        right: 0,
        height: 300,
        marginLeft: 25,
        marginRight: 25,
        elevation: 5,
    },
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
        marginTop: 20
    },
    btnSelectCliente: {
        padding: 24,
        borderWidth: 1,
        borderColor: Colors.lighter,
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
        top: -25,
    }
})