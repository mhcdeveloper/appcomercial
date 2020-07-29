import React, { useState, useEffect } from 'react';
import { View, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ContainerRow, Title } from '../../styles';
import { ActivityIndicator } from 'react-native';
import Colors from '../../styles/Colors';
import useDebounce from '../Input/useDebounce';
import { getFilters } from '../../services';
import { setFilterResponse } from '../../store/Actions/QuestionActions';

export default Search = ({ filter }) => {
    const dispatch = useDispatch();
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
        getFilters(filter.SQL, name).then(data => {
            setDados(data);
            setLoading(false);
        }).catch(err => setLoading(false));
    }

    function changeData(d) {
        dispatch(setFilterResponse([{ IDS007: filter.IDS007, d }]));
        setDados(false);
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
                paddingTop="4px"
                paddingBottom="4px"
                borderWidth={1}
                zIndex={100}
                elevation={10}
                borderColor={Colors.light}
            >
                <TextInput
                    autoCapitalize
                    style={custom.inputText}
                    placeholder={`Pesquise os(a) ${filter.DSTABELA}`}
                    onChangeText={(nome) => setName(nome)} />
                {loading
                    ?
                    <ActivityIndicator size="large" color={Colors.primary} />
                    :
                    <Icon name="sort-down" size={28} color={Colors.regular} style={custom.icon} />
                }
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
                                    onPress={() => changeData(cli)}
                                    style={custom.btnSelect}
                                    activeOpacity={0.7}>
                                    <Title key={index} align="left" color={Colors.regular}>{cli.VALUE}</Title>
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
        width: '87%',
        fontSize: 20,
        color: Colors.regular
    },
    icon: {
        width: '13%',
        paddingLeft: 10,
    },
});