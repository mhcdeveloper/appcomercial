import React, { useState, useEffect } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';

import { Container, ContentMain } from '../../styles';
import Header from '../../components/Header';
import IconLabel from '../../components/IconLabel';
import Colors from '../../styles/Colors';
import ComboBox from '../../components/ComboBox';
import { getModulos, getChecklist } from '../../services';
import Loading from '../../components/Loading';
import { useDispatch } from 'react-redux';
import { setModulo } from '../../store/Actions/QuestionActions';

const Modulo = ({ navigation }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [loadingChecklist, setLoadingChecklist] = useState(false);
    const [modulos, setModulos] = useState([]);
    const [formularios, setFormularios] = useState([]);
    
    useEffect(() => {
        listModulos();
    }, []);

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
        navigation.navigate('CheckList', { formulario: formularios[index] });
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header setMenu={(show) => handleShowMenu(show)} />
            {loading
                ?
                <Loading />
                :
                <ContentMain>
                    <IconLabel icon="true" label="Bem Vindo," title="Matheus Oliveira" />
                    <ComboBox placeholder="Selecione o modulo" options={modulos} onChange={handleChangeModulo} />
                    {loadingChecklist && <ActivityIndicator size="large" color={Colors.primary} />}
                    {formularios.length > 0 &&
                        <ComboBox 
                            placeholder="Selecione o Checklist" 
                            options={formularios} 
                            onChange={handleQuestion} />
                    }
                </ContentMain>
            }
        </Container>
    )
}

export default Modulo;