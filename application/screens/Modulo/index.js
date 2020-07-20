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
import { setModulo, setQuestionList } from '../../store/Actions/QuestionActions';
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
        navigation.addListener('focus', () => listModulos(), setFormularios([]));
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
            .then(formularios => {
                setFormularios(formularios);
                setLoading(false);
                setLoadingChecklist(false);
            })
            .catch(err => {
                setLoading(false);
                setLoadingChecklist(false);
            });
    }

    async function handleQuestion(value, index) {
        dispatch(setQuestionList(formularios[index].questions));
        navigation.navigate('CheckList');
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