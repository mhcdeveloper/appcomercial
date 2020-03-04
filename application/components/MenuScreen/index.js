import React, { PureComponent } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ContainerScroll, Title, Hr, ContainerRow, Container, ContainerPagination } from '../../styles';
import Colors from '../../styles/Colors';
import InputLabel from '../Input/InputLabel';
import { StatusBar, View } from 'react-native';
import Header from '../Header';
import Btn from '../Buttons';
import { width } from '../../utils';
import styles from '../../styles/styles';

relatorio = [
    { NRNOTA: '1212', TRANSP: '121212', PREV: '111', REME: '12121' },
    { NRNOTA: '1212', TRANSP: '121212', PREV: '111', REME: '12121' },
    { NRNOTA: '1212', TRANSP: '121212', PREV: '111', REME: '12121' },
]

class MenuScreen extends PureComponent {
    state = {
        search: false,
        relatorio: []
    }

    handlePesquisa = () => {
        this.setState({ search: true });

    }

    renderRelatorio = () => {
        const { menuScreen } = this.props.route.params;
        this.setState({ search: true })
        return (
            <ContainerScroll
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                horizontal>
                {relatorio.map((rel, index) => {
                    return (
                        <View style={{ width }}>
                            <Container marginRight="25px">
                                {menuScreen.grid.map((input, index) => {
                                    return (
                                        <InputLabel
                                            key={index}
                                            value={rel[input.name]}
                                            label={input.label}
                                            name={input.name}
                                            valid={true} />
                                    )
                                })}
                            </Container>
                            <View style={styles.containerRowPagination}>
                                <ContainerPagination>
                                    <Title font="28px" color={Colors.white}>{index + 1}</Title>
                                    <Title right="5px" left="5px" font="16px" color={Colors.white}>de</Title>
                                    <Title font="16px" color={Colors.white}>{relatorio.length}</Title>
                                </ContainerPagination>
                            </View>
                        </View>
                    )
                })
                }
            </ContainerScroll >
        )
    }

    render() {
        const { search } = this.state;
        const { menuScreen } = this.props.route.params;
        return (
            <ContainerScroll>
                <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
                <Header setMenu={(show) => handleShowMenu(show)} showBack={true} />
                <Container
                    marginLeft="15px"
                    marginRight="15px">
                    <ContainerRow>
                        <Title font="24px" weight="600">{menuScreen.label}</Title>
                        <Icon name="table" size={34} color={Colors.light} />
                    </ContainerRow>
                    <Hr />
                    <Container
                        marginBottom="50px"
                        marginTop="25px">
                        {search
                            ?
                            this.renderRelatorio()
                            :
                            menuScreen.filters.map((input, index) => (
                                <InputLabel
                                    key={index}
                                    value={input.value}
                                    label={input.label}
                                    name={input.name}
                                    valid={true} />
                            ))}
                    </Container>
                    {!search &&
                        <Btn
                            padding="16px"
                            font="28px"
                            label="PESQUISAR"
                            onSubmit={() => this.handlePesquisa()}
                            backgroundColor={Colors.primary}
                        />
                    }
                </Container>
            </ContainerScroll>
        )
    }
}

export default MenuScreen;