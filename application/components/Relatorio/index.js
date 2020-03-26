import React, { useState } from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Title, Hr, ContainerRow, Container } from '../../styles';
import Colors from '../../styles/Colors';
import Header from '../Header';
import { width } from '../../utils';
import DetalhesNps from '../../screens/Nps/DetalhesNps';
import DetalhesPerformance from '../../screens/PerformanceEntrega/DetalhesPerformance';

export default Relatorio = ({ route }) => {
    const { item } = route.params;
    const [page, setPage] = useState(0);

    function renderList(data) {
        if (item.type == 1) {
            return (
                <DetalhesNps data={data} />
            )
        } else if (item.type == 2) {
            return (
                <DetalhesPerformance data={data} />
            )
        }
    }

    function handlePagination(item) {
        const { viewableItems, changed } = item;
        if (viewableItems.length > 0) {
            console.log(viewableItems[0].index)
            // setPage(viewableItems[0].index)
        }
        console.log("Visible items are", viewableItems);
        console.log("Changed in this iteration", changed);
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header showBack={true} />
            <Container
                marginLeft="15px"
                marginRight="15px">
                <ContainerRow>
                    <Title align="left" left="15px" top="35px" font="26px" weight="600">{item.label}</Title>
                    <Icon name="table" size={34} color={Colors.light} style={{ top: 17 }} />
                </ContainerRow>
                <Hr />
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={item.list}
                        horizontal
                        pagingEnabled
                        onViewableItemsChanged={handlePagination}
                        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
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
                <Title>{page} de {item.list.length}</Title>
            </Container>
        </Container>
    )
}