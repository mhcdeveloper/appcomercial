import React, { useState, useEffect } from 'react';
import { View, StatusBar, Dimensions } from 'react-native';

import { Container, ContentMain, ContainerScroll } from '../../styles';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import IconLabel from '../../components/IconLabel';
import BtnFull from '../../components/Buttons/BtnFull';
import QuestionItem from './QuestionItem';
import AlertScreen from '../../components/AlertScreen';

const width = Dimensions.get('window').width;

const CheckList = ({ }) => {
    const [questions, setQuestion] = useState([]);
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        let perguntas = [
            { id: 1, DSCHLIST: 'Ausência de lanternas com lampadas queimadas ?', action: 0 },
            { id: 2, DSCHLIST: 'Sirene de ré está funcionando ?', action: 2 },
            { id: 3, DSCHLIST: 'Buzina está funcionando ?', action: 1 },
            { id: 4, DSCHLIST: 'Para-brisa, espelhos e retrovisores permitindo perfeita visualização ?', action: 0 },
            { id: 5, DSCHLIST: 'Ausência de lanternas com lampadas queimadas ?', action: 0 },
            { id: 6, DSCHLIST: 'Sirene de ré está funcionando ?', action: 2 },
            { id: 7, DSCHLIST: 'Buzina está funcionando ?', action: 1 },
        ];
        setQuestion(separar(perguntas, 4));
    }, []);

    function separar(base, max) {
        var res = [];

        for (var i = 0; i < base.length; i = i + (max)) {
            res.push(base.slice(i, (i + max)));
        }
        return res;
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header setMenu={(show) => handleShowMenu(show)} />
            <ContentMain>
                {alert ?
                    <AlertScreen
                        icon="exclamation-circle"
                        color={Colors.red}
                        alert="Não Liberado"
                        message="Seu caminhão não está aprovado para prosseguir" />
                    :
                    <>
                        <IconLabel label="Checklist" title="Hora Certa" />
                        <ContainerScroll 
                            horizontal>                            
                            {
                                questions.map((question, index) => {
                                    return (
                                        <View key={index} style={{ width, justifyContent: 'flex-start', alignItems: 'center', marginRight: 10, marginLeft: 10 }}>
                                            {question.map((item, index) => {
                                                return (
                                                    <QuestionItem key={index} item={item} />
                                                )
                                            })}
                                        </View>
                                    )
                                })
                            }
                        </ContainerScroll>
                        <BtnFull padding="10px" label="Finalizar Checklist" font="28px" />
                    </>
                }
            </ContentMain>
        </Container>
    )
}

export default CheckList;