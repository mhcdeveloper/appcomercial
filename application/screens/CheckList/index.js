import React, { useState, useEffect } from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container, ContentMain, ContainerScroll } from '../../styles';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import IconLabel from '../../components/IconLabel';
import BtnFull from '../../components/Buttons/BtnFull';
import QuestionItem from './QuestionItem';
import AlertScreen from '../../components/AlertScreen';
import ModalAlert from '../../components/Modals';
import Camera from '../../components/Camera';
import { setImage, resetImage, setAnswer, setResponse, setResponseItem, setResetResponse } from '../../store/Actions/QuestionActions';
import { separarItemScroll, getUser } from '../../utils';
import { salvarResposta, salvarAnexosResposta } from '../../services';
import Loading from '../../components/Loading';

const width = Dimensions.get('window').width;

const CheckList = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);
    const [IDS001, setIDS001] = useState(false);
    const [questionsList, setQuestion] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [type, setType] = useState('');
    const [open, setOpen] = useState(false);
    const [selectedQuestion, setselectedQuestion] = useState(false);
    const [anexo, setAnexo] = useState(false);
    let validToFinish = questions.list.reduce((acumulador, item) => acumulador + item.SNINVIAB, 0) > 0 ? true : false;

    useEffect(() => {
        getUser().then(user => setIDS001(user.IDS001));
    }, []);

    function resetModal() {
        setOpen(!open);
        dispatch(resetImage());
        dispatch(setAnswer(''));
    }

    //Seta positivo ou negativo e abre o modal pra responder
    function changeAnswer(item, type) {
        setOpen(true);
        setType(type);
        setselectedQuestion(item);
    }

    //Seta o canhoto na store e abre o modal de novo
    function handleCanhoto(canhoto) {
        let anexo = {
            IDG114: selectedQuestion.IDG114,
            base64: canhoto.base64,
            DSMIMETP: 'image/jpeg'
        }
        dispatch(setImage(anexo));
        setAnexo(false);
        setOpen(true);
    }

    //Grava a resposta da pergunta
    function handleQuestion() {
        let answer = {
            IDS001,
            IDG114: selectedQuestion.IDG114,
            SNRESULT: type, //Positivo ou negativo
            DSTEXTO: questions.DSTEXTO,
        }
        dispatch(setResponse(answer));
        dispatch(setResponseItem({ id: selectedQuestion.IDG113, value: type }));
        resetModal();
    }

    async function finalizarChecklist() {
        const { response, anexos } = questions;
        if (response.length > 0) {
            await salvarResposta(response)
                .then(async success => {
                    if (success.IDSEQUEN && anexos.length > 0) {
                        await salvarAnexosResposta(anexos, success.IDSEQUEN)
                            .then(uploaded => {
                                setAlert(1);
                                dispatch(setResetResponse());
                            })
                            .catch(err => {
                                setAlert(0);
                            })
                    } else {
                        setAlert(1);
                        dispatch(setResetResponse());
                    }
                })
                .catch(err => {
                    setAlert(0);
                })
        }
    }

    function renderQuestionList(data) {
        let list = separarItemScroll(data, 4);
        return list.map((question, index) => {
            return (
                <View key={index} style={{ width, alignItems: 'center' }}>
                    {question.map((item, index) => {
                        return (
                            <QuestionItem key={index} item={item} changeAnswer={changeAnswer} />
                        )
                    })}
                </View>
            )
        });
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header setMenu={(show) => handleShowMenu(show)} />
            {anexo &&
                <Camera
                    closeCamera={() => setAnexo(false)}
                    setCanhoto={handleCanhoto}
                    animatedLine={false}
                    capture={true}
                    width={180}
                    height="99%"
                />
            }
            {open &&
                <ModalAlert
                    type={type}
                    item={selectedQuestion}
                    takePicture={() => {
                        setAnexo(true);
                        setOpen(false);
                    }}
                    closeModal={resetModal}
                    handleQuestion={handleQuestion} />
            }
            {loading
                ?
                <Loading label="Gravando seu checklist..." />
                :
                <ContentMain>
                    {alert ?
                        <AlertScreen
                            handleSubmit={() => alert == 1 ? navigation.navigate('Modulo') : setAlert(false)}
                            icon="exclamation-circle"
                            color={alert == 1 ? Colors.green : Colors.red}
                            alert={alert == 1 ? "Liberado" : "Não Liberado"}
                            message={alert == 1 ? selectedQuestion.DSLIBSIM : selectedQuestion.DSLIBNAO} />
                        :
                        <>
                            <IconLabel label="Checklist" title={questions.modulo} />
                            <ContainerScroll
                                pagingEnabled={true}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                horizontal>
                                {renderQuestionList(questions.list)}
                            </ContainerScroll>
                            <BtnFull
                                disabled={validToFinish}
                                padding="10px"
                                label="Finalizar Checklist"
                                font="28px"
                                onSubmit={finalizarChecklist}
                            />
                        </>
                    }
                </ContentMain>
            }
        </Container>
    )
}

export default CheckList;