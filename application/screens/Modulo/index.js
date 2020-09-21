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

const Modulo = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const [formularios, setFormularios] = useState([]);

    useEffect(() => {
        handleFormularios();
        getUserAuth();
        navigation.addListener('focus', () => {
            handleFormularios();
            setFormularios([]);
        });
    }, []);

    async function getUserAuth() {
        let user = await getUser();
        setUser(user);
    }

    async function handleFormularios() {
        const { IDS025 } = route.params;
        await getChecklist({ IDS025 })
            .then(data => {
                setFormularios(data);
                setLoadingChecklist(false);
                if (data.length == 1) {
                    dispatch(setFilters(data[0].filter));
                    dispatch(setQuestionList(data[0].questions));
                    if (data[0].filter.length == 0) {
                        navigation.navigate('CheckList');
                    } else {
                        navigation.navigate('Filter');
                    }
                }
            })
            .catch(err => {
                setLoading(false);
            });
    }

    async function handleQuestion(value, index) {
        dispatch(setFilters(formularios[index].filter));
        dispatch(setQuestionList(formularios[index].questions));
        if (formularios[index].filter.length == 0) {
            navigation.navigate('CheckList');
        } else {
            navigation.navigate('Filter');
        }
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header back={true} setMenu={(show) => handleShowMenu(show)} />
            {loading
                ?
                <Loading label="Carregando formulários." />
                :
                <ContentMain>
                    <IconLabel icon="true" label="Bem Vindo," title={user.NMUSUARI} />
                    {formularios.length > 0
                        ?
                        <ComboBox
                            placeholder="Selecione o Formulário"
                            options={formularios}
                            onChange={handleQuestion} />
                        :
                        <Title font="20px" top="5%">Nenhum formulário encontrado</Title>
                    }
                </ContentMain>
            }
        </Container>
    )
}

export default Modulo;