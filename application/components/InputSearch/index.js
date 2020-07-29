import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Colors from '../../styles/Colors';

import useDebounce from '../Input/useDebounce';
import { ContainerRow } from '../../styles';

const InputSearch = () => {
    const [data, setData] = useState(false);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [filter, setFilter] = useState('');

    const debouncedSearchData = useDebounce(filter, 2000);

    useEffect(() => {
        if (debouncedSearchData) {
            searchData();
        } else {
            setData(false)
        }
    }, [debouncedSearchData])

    async function searchData() {
        setLoadingSearch(true);
        filtrarClientes(name).then(clientes => {
            setLoadingSearch(false);
            setData(clientes)
        }).catch(err => {
            setLoadingSearch(false)
            setLoadingSearch(false)
        });
    }

    async function handleData(cliente) {
        dispatch(setData(cliente))
        setMenu(true);
    }

    return (
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
                <TextInput
                    style={custom.inputText}
                    placeholder="Procurar o cliente"
                    onChangeText={(filter) => setFilter(filter)} />
                {loadingSearch
                    ?
                    <ActivityIndicator size="large" color={Colors.primary} />
                    :
                    <Icon name="search" size={28} color={Colors.regular} style={custom.icon} />
                }
            </ContainerRow>
            {data &&
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={custom.scrollClientes}>
                    {data.length > 0 ?
                        data.map((cli, index) => {
                            console.log(cli)
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleData(cli)}
                                    style={custom.btnSelectCliente}
                                    activeOpacity={0.7}>
                                    <Title key={index} align="left" color={Colors.regular}>{cli.value}</Title>
                                </TouchableOpacity>
                            )
                        })
                        :
                        <Title top={30} color={Colors.light}>Nenhuma informação encontrada</Title>
                    }
                </ScrollView>
            }
        </View>
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
});

export default InputSearch;