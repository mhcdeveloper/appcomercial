import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import { Container, ContentMain } from '../../styles';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import IconLabel from '../../components/IconLabel';
import BtnFull from '../../components/Buttons/BtnFull';
import QuestionItem from './QuestionItem';
import AlertScreen from '../../components/AlertScreen';

const CheckList = ({ }) => {
    const [questions, setQuestion] = useState([]);
    const [alert, setAlert] = useState(true);

    useEffect(() => {
        setQuestion([
            { id: 1, DSCHLIST: 'Ausência de lanternas com lampadas queimadas ?', action: 0 },
            { id: 2, DSCHLIST: 'Sirene de ré está funcionando ?', action: 2 },
            { id: 3, DSCHLIST: 'Buzina está funcionando ?', action: 1 },
            { id: 4, DSCHLIST: 'Para-brisa, espelhos e retrovisores permitindo perfeita visualização ?', action: 0 },
        ])
    }, []);

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
                    <Container>
                        <IconLabel label="Checklist" title="Hora Certa" />
                        {
                            questions.map(item => {
                                return (
                                    <QuestionItem key={item.id} item={item} />
                                )
                            })
                        }
                        <BtnFull padding="10px" label="Finalizar Checklist" font="28px" />
                    </Container>
                }
            </ContentMain>
        </Container>
    )
}

export default CheckList;