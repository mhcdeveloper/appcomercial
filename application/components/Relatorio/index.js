// import React, { Component } from 'react';
// import { View, StatusBar, FlatList } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// import { Title, Hr, ContainerRow, Container } from '../../styles';
// import Colors from '../../styles/Colors';
// import Header from '../Header';
// import { width } from '../../utils';
// import { getListIndicadores } from '../../services';
// import Detalhes from '../../screens/Nps/Detalhes';

// relatorio = [
//     { NRNOTA: '1212', TRANSP: '121212', PREV: '111', REME: '12121' },
//     { NRNOTA: '1212', TRANSP: '121212', PREV: '111', REME: '12121' },
//     { NRNOTA: '1212', TRANSP: '121212', PREV: '111', REME: '12121' },
// ]

// class Relatorio extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: false,
//             page: 0,
//             data: []
//         }
//     }

//     componentDidMount() {
//         this.getIndicadores();
//     }

//     getIndicadores = () => {
//         const { loading, page, data } = this.state;
//         const { item } = this.props.route.params;
//         if (loading) return;

//         this.setState({ loading: true });
//         let filter = { type: item.type, page };
//         getListIndicadores(filter).then(list => {
//             this.setState({ data: [ ...data, ...list.data], page: page + 1, loading: false });
//         }).catch(err => this.setState({ loading: false }));
//     }

//     renderList = ({ item }) => {
//         return (
//             <Detalhes item={item} />
//         )
//     }

//     render() {
//         const { item } = this.props.route.params;
//         const { data } = this.state;
//         return (
//             <Container>
//                 <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
//                 <Header showBack={true} />
//                 <Container
//                     marginLeft="15px"
//                     marginRight="15px">
//                     <ContainerRow>
//                         <Title align="left" left="15px" top="35px" font="26px" weight="600">{item.label}</Title>
//                         <Icon name="table" size={34} color={Colors.light} style={{ top: 17 }} />
//                     </ContainerRow>
//                     <Hr />
//                     <View style={{ flex: 1 }}>
//                         <FlatList
//                             data={data}
//                             horizontal
//                             pagingEnabled
//                             onScroll={(d) => console.log(d)}
//                             bounces={false}
//                             showsHorizontalScrollIndicator={false}
//                             renderItem={this.renderList}
//                             keyExtractor={item => item.id}
//                             snapToInterval={width}
//                             decelerationRate="fast"
//                             getItemLayout={(data, index) => ({
//                                 length: width,
//                                 offset: width * index,
//                                 index,
//                             })}
//                             onEndReached={this.getIndicadores}
//                             onEndReachedThreshold={0.1}
//                         />
//                     </View>
//                 </Container>
//             </Container>
//         )
//     }
// }

// export default Relatorio;

import React from 'react';
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
    console.log(item)
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
            </Container>
        </Container>
    )
}