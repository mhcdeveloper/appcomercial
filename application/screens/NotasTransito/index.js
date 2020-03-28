import React, { useEffect, useState } from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';

import Colors from '../../styles/Colors';
import { width } from '../../utils';
import { Container, ContainerRow, Title, Hr } from '../../styles';
import Header from '../../components/Header';
import DetalhesNotasTransito from './DetalhesNotasTransito';
import { getListNotasTransito } from '../../services';
import Loading from '../../components/Loading';

export default NotasTransito = () => {
    const header = useSelector(state => state.header);

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        getListNotasTransito({ idCliente: header.cliente.ID }).then(notas => {
            console.log(notas)
            setList(notas);
            setLoading(false);
        }).catch(err => setLoading(false));
    }, []);

    function renderList(data) {
        return (
            <DetalhesNotasTransito data={data} />
        )
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header showBack={true} />
            {loading
                ?
                <Loading />
                :
                <Container
                    marginLeft="15px"
                    marginRight="15px">
                    <ContainerRow>
                        <Title align="left" left="15px" top="35px" font="26px" weight="600">Notas em Trânsito</Title>
                        <Icon name="table" size={34} color={Colors.light} style={{ top: 17 }} />
                    </ContainerRow>
                    <Hr />
                    {list.length > 0
                        ?
                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={list}
                                horizontal
                                pagingEnabled
                                onScroll={(d) => console.log(d)}
                                bounces={false}
                                showsHorizontalScrollIndicator={false}
                                renderItem={renderList}
                                keyExtractor={item => item.id}
                                snapToInterval={width}
                                decelerationRate="fast"
                                getItemLayout={(data, index) => ({
                                    length: width,
                                    offset: width * index,
                                    index,
                                })}
                            />
                        </View>
                        :
                        <Title color={Colors.light} top="20px">Nenhuma nota em trânsito</Title>
                    }
                </Container>
            }
        </Container>
    )
}