import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container, ContentMain, ContainerScroll, Content } from '../../styles';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import IconLabel from '../../components/IconLabel';
import BtnFull from '../../components/Buttons/BtnFull';
import QuestionItem from './QuestionItem';
import AlertScreen from '../../components/AlertScreen';
import ModalAlert from '../../components/Modals';
import Camera from '../../components/Camera';
import { setImage, resetImage, setAnswer, setResponse, setResponseItem, setResetResponse, setQuestionList } from '../../store/Actions/QuestionActions';
import { getUser } from '../../utils';
import { salvarResposta, salvarAnexosResposta } from '../../services';
import Loading from '../../components/Loading';

const CheckList = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);
    const [IDS001, setIDS001] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [typeSelect, setTypeSelect] = useState('');
    const [open, setOpen] = useState(false);
    const [selectedQuestion, setselectedQuestion] = useState(false);
    const [anexo, setAnexo] = useState(false);
    let validToFinish = questions.list.length > questions.response.length ? true : false;

    useEffect(() => {
        getUser().then(user => setIDS001(user.IDS001));
    }, []);

    useEffect(() => {
        console.log(selectedQuestion)
        if (selectedQuestion.SNFOTOPO == 0 && selectedQuestion.SNTEXTPO == 0 && selectedQuestion.type == 1) {
            handleQuestion();
        } else if (selectedQuestion.type == 1) {
            setOpen(true);
        }
    }, [selectedQuestion])
    
    function resetModal() {
        setOpen(false);
        dispatch(resetImage());
        dispatch(setAnswer(''));
    }

    //Seta positivo ou negativo e abre o modal pra responder
    function changeAnswer(item, type) {
        item.type = type;
        setTypeSelect(type);
        setselectedQuestion(item);
        if (type == 0) {
            setOpen(true);
        }
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
        const { filterResponse, carga } = questions;

        let DSVALUE = filterResponse.length > 0 ? filterResponse.filter(filter => filter.IDS007 == selectedQuestion.IDS007)[0].params.ID : null;
        let answer = {
            IDS001,
            IDG114: selectedQuestion.IDG114,
            SNRESULT: typeSelect, //Positivo ou negativo
            DSTEXTO: questions.DSTEXTO,
            INVIABILIZA: selectedQuestion.SNINVIAB == 1 ? typeSelect == 0 ? true : false : false,
            DSVALUE,
            IDG046: carga
        }
        dispatch(setResponse(answer));
        dispatch(setResponseItem({ id: selectedQuestion.IDG113, value: typeSelect }));
        resetModal();
    }

    async function finalizarChecklist() {
        const { response, anexos } = questions;
        setLoading(true);
        if (response.length > 0) {
            await salvarResposta(response)
                .then(async success => {
                    if (success.IDG115 && anexos.length > 0) {
                        await salvarAnexosResposta(anexos, success.IDG115)
                            .then(uploaded => {
                                setAlert(success.SNINVIAB ? 2 : 1);
                                dispatch(setResetResponse());
                                dispatch(setQuestionList([]));
                                setLoading(false);
                            })
                            .catch(err => {
                                setAlert(0);
                                setLoading(false);
                            })
                    } else {
                        setAlert(success.SNINVIAB ? 2 : 1);
                        dispatch(setResetResponse());
                        dispatch(setQuestionList([]));
                        setLoading(false);
                    }
                })
                .catch(err => {
                    setAlert(0);
                    setLoading(false);
                })
        }
    }

    function renderQuestionList(data) {
        return data.map((item, index) => {
            return (
                <QuestionItem key={index} item={item} changeAnswer={changeAnswer} />
            )
        });
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
            <Header back={true} setMenu={(show) => handleShowMenu(show)} />
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
                    type={typeSelect}
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
                alert ?
                    <AlertScreen
                        handleSubmit={() => navigation.navigate('Modulo')}
                        icon={alert == 1 ? "check-circle" : "exclamation-circle"}
                        color={alert == 1 ? Colors.green : Colors.red}
                        alert={alert == 1 ? "Liberado" : "Não Liberado"}
                        message={alert == 1 ? selectedQuestion.DSLIBSIM : selectedQuestion.DSLIBNAO} />
                    :
                    <>
                        <ContentMain>
                            <IconLabel label="Checklist" title={questions.modulo} />
                            <Content
                                flex={1}
                                marginTop="2%"
                                marginLeft="4%">
                                <ContainerScroll
                                    showsVerticalScrollIndicator={false}>
                                    {renderQuestionList(questions.list)}
                                </ContainerScroll>
                            </Content>
                        </ContentMain>
                        <BtnFull
                            disabled={validToFinish}
                            label="Finalizar Checklist"
                            font="20px"
                            onSubmit={finalizarChecklist}
                        />
                    </>
            }
        </Container>
    )
}

export default CheckList;