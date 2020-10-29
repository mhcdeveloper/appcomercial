import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container, ContainerScroll, Content, ContentMain, Hr, Title } from '../../styles';
import Header from '../../components/Header';
import IconLabel from '../../components/IconLabel';
import Colors from '../../styles/Colors';
import BtnFull from '../../components/Buttons/BtnFull';
import Search from '../../components/Search';
import { getUser } from '../../utils';
import FilterForm from '../../components/Forms/FilterForm';
import { Alert } from 'react-native';
import { resetFilterResponse, setCarga, setFilterResponse } from '../../store/Actions/QuestionActions';
import Btn from '../../components/Buttons';

const Filter = ({ navigation }) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const [infos, setInfos] = useState(false);
    const [filter, setFilter] = useState(false);
    const questions = useSelector(state => state.questions);
    let validBtn = questions.filterResponse.length == questions.filters.length ? false : true;

    useEffect(() => {
        getUserAuth();
    }, []);

    async function getUserAuth() {
        let user = await getUser();
        setUser(user);
    }

    function handleNext() {
        navigation.navigate('CheckList');
    }

    function handleCarga(infos) {
        if (infos) {
            setInfos(infos);
            dispatch(setCarga({ IDG046: infos.IDG046, IDH006: infos.IDH006 }));
        } else {
            Alert.alert("Ocorreu um erro.", "Não foi possivel encontrar nenhuma informação da carga informada", [
                {
                    text: "ok",
                    onPress: () => null,
                    style: "cancel"
                }]);
        }
    }

    function handleAlterarFiltros() {
        dispatch(resetFilterResponse());
        setFilter(true);
    }

    function handleConfirm() {
        questions.filters.map(filter => {
            dispatch(setFilterResponse([{ IDS007: filter.IDS007, params: { ID: filter.TABLEA == 'G031' ? infos.IDG031 : infos.IDG032 } }]));
        });
        navigation.navigate('CheckList');
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header back={true} setMenu={(show) => handleShowMenu(show)} />
            <ContentMain>
                <IconLabel icon="true" label="Bem Vindo," title={user.NMUSUARI} />
                {!infos && !filter && <FilterForm handleCarga={handleCarga} />}
                {infos && !filter &&
                    <ContainerScroll>
                        <Title font="24px" weight="bold" bottom="5%" color={Colors.primary}>Informações da Carga</Title>
                        <Content
                            marginLeft="5%"
                            marginBottom="3%">
                            <Title align="left">Código do Shipment</Title>
                            <Title weight="bold" font="16px" left="1%" align="left" bottom="2%">{infos.CDVIAOTI}</Title>
                            <Hr />
                        </Content>
                        <Content
                            marginLeft="5%"
                            marginBottom="3%">
                            <Title align="left">Motorista</Title>
                            <Title weight="bold" font="16px" left="1%" align="left" bottom="2%">{infos.NMMOTORI}</Title>
                            <Hr />
                        </Content>
                        <Content
                            marginLeft="5%"
                            marginBottom="3%">
                            <Title align="left">Placa Veiculo</Title>
                            <Title weight="bold" font="16px" left="1%" align="left" bottom="2%">{infos.NRPLAVEI}</Title>
                            <Hr />
                        </Content>
                        <Content
                            marginLeft="10%"
                            marginRight="10%">
                            <Btn
                                font="20px"
                                label="Alterar Filtros"
                                onSubmit={() => handleAlterarFiltros()}
                                backgroundColor={Colors.red}
                            />
                            <Btn
                                font="20px"
                                label="Trocar Carga"
                                onSubmit={() => {
                                    setFilter(false);
                                    setInfos(false);
                                }}
                                backgroundColor={Colors.secondary}
                            />
                        </Content>
                    </ContainerScroll>}
                {filter &&
                    <ContainerScroll>
                        <Title font="24px" weight="bold" bottom="5%" color={Colors.primary}>Informações da Carga</Title>
                        <Content
                            marginLeft="5%"
                            marginBottom="3%">
                            <Title align="left">Código do Shipment</Title>
                            <Title weight="bold" font="16px" left="1%" align="left" bottom="2%">{infos.CDVIAOTI}</Title>
                            <Hr />
                        </Content>
                        {questions.filters.length == 0 &&
                            <Content
                                marginLeft="10%"
                                marginRight="10%">
                                <Btn
                                    font="20px"
                                    label="Trocar Carga"
                                    onSubmit={() => {
                                        setFilter(false);
                                        setInfos(false);
                                    }}
                                    backgroundColor={Colors.secondary}
                                />
                            </Content>
                        }
                        {questions.filters.map((filter, index) => (
                            <Search key={index} filter={filter} />
                        ))}
                    </ContainerScroll>
                }
            </ContentMain>
            {filter ?
                <BtnFull
                    disabled={validBtn}
                    label="Prosseguir"
                    font="20px"
                    onSubmit={handleNext}
                />
                :
                infos &&
                <BtnFull
                    label="Confirmar"
                    font="20px"
                    onSubmit={handleConfirm}
                />
            }
        </Container>
    )
}

export default Filter;