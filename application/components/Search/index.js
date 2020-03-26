import React, { useState, useEffect } from 'react';
import { View, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ContainerRow, Title } from '../../styles';
import { ActivityIndicator } from 'react-native';
import Colors from '../../styles/Colors';
import useDebounce from '../Input/useDebounce';

export default Search = ({ }) => {
    const [loading, setLoading] = useState(false);
    const [dados, setDados] = useState(false);
    const [name, setName] = useState('');

    const debouncedSearch = useDebounce(name, 2000);

    useEffect(() => {
        if (debouncedSearch) {
            searchDados();
        } else {
            setDados(false)
        }
    }, [debouncedSearch])

    async function searchDados() {
        setLoading(true);
    }

    return (
        <View>
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
                {loading
                    ?
                    <ActivityIndicator size="large" color={Colors.primary} />
                    :
                    <Icon name="search" size={28} color={Colors.regular} style={custom.icon} />
                }
                <TextInput
                    style={custom.inputText}
                    placeholder="Pesquisar"
                    onChangeText={(nome) => setName(nome)} />
            </ContainerRow>
            {dados &&
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={custom.scroll}>
                    {dados.length > 0 ?
                        dados.map((cli, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleCliente(cli)}
                                    style={custom.btnSelect}
                                    activeOpacity={0.7}>
                                    <Title key={index} align="left" color={Colors.regular}>{cli.text}</Title>
                                </TouchableOpacity>
                            )
                        })
                        :
                        <Title top={30} color={Colors.light}>Nenhum informação encontrada</Title>
                    }
                </ScrollView>
            }
        </View>
    )
}

const custom = StyleSheet.create({
    scroll: {
        backgroundColor: Colors.hight,
        left: 0,
        right: 0,
        height: 300,
        marginLeft: 25,
        marginRight: 25,
    },
    btnSelect: {
        padding: 24,
        borderWidth: 1,
        borderColor: Colors.lighter,
    },
    inputText: {
        width: '85%',
        fontSize: 20,
        color: Colors.regular
    },
});