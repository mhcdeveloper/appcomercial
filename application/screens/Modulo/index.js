import React, { useState, useEffect } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';

import { Container, ContentMain, Title } from '../../styles';
import Header from '../../components/Header';
import IconLabel from '../../components/IconLabel';
import Colors from '../../styles/Colors';
import ComboBox from '../../components/ComboBox';
import { getModulos, getChecklist } from '../../services';
import Loading from '../../components/Loading';
import { useDispatch } from 'react-redux';
import { setModulo, setQuestionList, setFilters } from '../../store/Actions/QuestionActions';
import { getUser } from '../../utils';

const Modulo = ({ navigation }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const [loadingChecklist, setLoadingChecklist] = useState(false);
    const [modulos, setModulos] = useState([]);
    const [moduloSelecionado, setModuloSelecionado] = useState(false);
    const [formularios, setFormularios] = useState([]);

    useEffect(() => {
        listModulos();
        getUserAuth();
        navigation.addListener('focus', () => {
            listModulos(); 
            setFormularios([]);
        });
    }, []);

    async function getUserAuth() {
        let user = await getUser();
        setUser(user);
    }

    async function listModulos() {
        setLoading(true);
        getModulos()
            .then(modulos => {
                setModulos(modulos);
                setLoading(false);
            })
            .catch(err => setLoading(false));
    }

    async function handleChangeModulo(modulo, index) {
        setLoadingChecklist(true);
        dispatch(setModulo(modulos[index].label));
        setModuloSelecionado(modulos[index].label);
        getChecklist({ IDS025: modulo })
            .then(data => {
                setFormularios(data);
                setLoading(false);
                setLoadingChecklist(false);
                if (data.length == 1) {
                    console.log(data)
                    dispatch(setFilters(data[0].filter));
                    dispatch(setQuestionList(data[0].questions));
                    if(data[0].filter.length == 0) {
                        navigation.navigate('CheckList');
                    } else {
                        navigation.navigate('Filter');
                    }
                }                
            })
            .catch(err => {
                setLoading(false);
                setLoadingChecklist(false);
            });
    }

    async function handleQuestion(value, index) {
        dispatch(setFilters(formularios[index].filter));
        dispatch(setQuestionList(formularios[index].questions));
        if(formularios[index].filter.length == 0) {
            navigation.navigate('CheckList');
        } else {
            navigation.navigate('Filter');
        }
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header setMenu={(show) => handleShowMenu(show)} />
            {loading
                ?
                <Loading label="Carregando módulos" />
                :
                <ContentMain>
                    <IconLabel icon="true" label="Bem Vindo," title={user.NMUSUARI} />
                    <ComboBox placeholder="Selecione o modulo" options={modulos} onChange={handleChangeModulo} />
                    {loadingChecklist && <ActivityIndicator size="large" color={Colors.primary} />}
                    {formularios.length > 0
                        ?
                        <ComboBox
                            placeholder="Selecione o Checklist"
                            options={formularios}
                            onChange={handleQuestion} />
                        :
                        moduloSelecionado && <Title>Nenhum formulário encontrado</Title>
                    }
                </ContentMain>
            }
        </Container>
    )
}

export default Modulo;