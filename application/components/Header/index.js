import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import { LOGO_EVOLOG_MIN } from '../../assets/consts';
import styles from '../../styles/styles';
import { Title, ContainerRow } from '../../styles';
import Colors from '../../styles/Colors';
import { setCliente, handleClose } from '../../store/Actions/HeaderActions';
import { getUser } from '../../utils';
import useDebounce from '../Input/useDebounce';
import { filtrarClientes } from '../../services/';

export default Header = ({ setMenu, showBack }) => {
    const header = useSelector(state => state.header);
    const dispatch = useDispatch();

    const { goBack } = useNavigation();
    const [clientes, setClientes] = useState(false);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [user, setUser] = useState(false);
    const [name, setName] = useState('');

    const debouncedSearchCliente = useDebounce(name, 2000);

    useEffect(() => {
        getInfo();
        if (debouncedSearchCliente) {
            searchCliente();
        } else {
            setClientes(false)
        }
        if (setMenu) {
            if (header.cliente.NMCLIENT) {
                setMenu(true);
            }
        }
    }, [debouncedSearchCliente])

    async function getInfo() {
        let user = await getUser();
        setUser(user);
    }

    async function searchCliente() {
        setLoadingSearch(true);
        filtrarClientes(name).then(clientes => {
            setLoadingSearch(false);
            setClientes(clientes)
        }).catch(err => {
            setLoadingSearch(false)
            setLoadingSearch(false)
        });
    }

    async function handleCliente(cliente) {
        dispatch(setCliente(cliente))
        setMenu(true);
    }

    function changeCliente() {
        dispatch(setCliente(false));
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
                {header.close &&
                    <>
                        <View>
                            <Title font="25px" align="left" left="30px" color={Colors.white} top="20px" bottom="20px" weight="500">Olá, {user.NMUSUARI}</Title>
                        </View>
                        {!header.cliente
                            ?
                            <View>
                                <Title font="20px" align="left" left="30px" color={Colors.white} top="5px" bottom="35px">Para iniciar selecione seu cliente</Title>
                            </View>
                            :
                            <ContainerRow>
                                <View style={{ width: '60%' }}>
                                    <Title font={20} align="left" left="30px" color={Colors.white} weight="500">Cliente:</Title>
                                    <Title font={20} align="left" left="30px" color={Colors.white}>{header.cliente.NMCLIENT}</Title>
                                </View>
                                {setMenu &&
                                    <TouchableOpacity
                                        style={custom.btnCliente}
                                        onPress={() => changeCliente()}
                                        activeOpacity={0.7}>
                                        <Title>Trocar Cliente</Title>
                                    </TouchableOpacity>
                                }
                            </ContainerRow>
                        }
                    </>
                }
                {header.cliente &&
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={custom.btn}
                        onPress={() => dispatch(handleClose())}>
                        <Icon name={header.close ? 'sort-up' : 'sort-down'} size={35} color={Colors.white} />
                    </TouchableOpacity>
                }
            </View>
            {!header.cliente &&
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
                        {loadingSearch
                            ?
                            <ActivityIndicator size="large" color={Colors.primary} />
                            :
                            <Icon name="search" size={28} color={Colors.regular} style={custom.icon} />
                        }
                        <TextInput
                            style={custom.inputText}
                            placeholder="Procurar o cliente"
                            onChangeText={(nome) => setName(nome)} />
                    </ContainerRow>
                    {clientes &&
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={custom.scrollClientes}>
                            {clientes.length > 0 ?
                                clientes.map((cli, index) => {
                                    console.log(cli)
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => handleCliente(cli)}
                                            style={custom.btnSelectCliente}
                                            activeOpacity={0.7}>
                                            <Title key={index} align="left" color={Colors.regular}>{cli.TEXT}</Title>
                                        </TouchableOpacity>
                                    )
                                })
                                :
                                <Title top={30} color={Colors.light}>Nenhum cliente encontrado</Title>
                            }
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
        width: '36%',
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