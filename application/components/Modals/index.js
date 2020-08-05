import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Btn from '../Buttons/';
import { Title, ContainerModal, TextArea, ContainerWrapper } from '../../styles';
import styles from '../../styles/styles';
import Colors from '../../styles/Colors';
import BtnIcon from '../Buttons/BtnIcon';
import ImageItem from '../Camera/ImageItem';
import { setAnswer } from '../../store/Actions/QuestionActions';

export default ModalAlert = ({ closeModal, takePicture, handleQuestion, item, type }) => {
    const questions = useSelector(state => state.questions);
    const dispatch = useDispatch();

    function renderModal() {
        let validFoto = false;
        let validText = false;
        let validInput = false;
        let validAnexo = false;

        if (type == 1) {
            const { SNFOTOPO, SNTEXTPO } = item;
            validFoto = SNFOTOPO == 1 ? questions.images.length > 0 ? true : false : true;
            validText = SNTEXTPO == 1 ? questions.DSTEXTO.length > 0 ? true : false : true;
            validInput = SNTEXTPO == 0 ? false : true;
            validAnexo = SNFOTOPO == 0 ? false : true;
        } else {
            const { SNFOTONE, SNTEXTNE } = item;
            validFoto = SNFOTONE == 1 ? (questions.images.length > 0 ? true : false) : true;
            validText = SNTEXTNE == 1 ? (questions.DSTEXTO.length > 0 ? true : false) : true;
            validInput = SNTEXTNE == 0 ? false : true;
            validAnexo = SNFOTONE == 0 ? false : true;
        }

        console.log(validFoto, validText, item.SNFOTOPO)

        return (
            <ContainerModal backgroundColor={Colors.white}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => closeModal(false)}
                    style={styles.containerIcon}>
                    <Icon name="times" size={35} color={Colors.white} />
                </TouchableOpacity>
                <Title align="left" weight="bold" font="22px">Detalhes Checklist</Title>
                {validInput &&
                    <TextArea
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(text) => dispatch(setAnswer(text))}>
                        {questions.DSTEXTO}
                    </TextArea>
                }
                {validAnexo &&
                    <BtnIcon
                        padding="6px"
                        label="Tirar foto"
                        font="24px"
                        icon="camera"
                        backgroundColor={Colors.regular}
                        color={Colors.white}
                        onSubmit={() => takePicture()}
                    />
                }
                {questions.images.length > 0 &&
                    <ContainerWrapper>
                        {questions.images.map((img, index) => (
                            <ImageItem key={index} item={img} />
                        ))}
                    </ContainerWrapper>
                }
                {validFoto && validText &&
                    <Btn
                        padding="8px"
                        label="Salvar"
                        font="28px"
                        backgroundColor={Colors.green}
                        onSubmit={() => handleQuestion()}
                    />
                }
            </ContainerModal>
        )
    }

    return (
        <View style={styles.containerBlack}>
            <Modal
                isVisible={true}
                swipeDirection="down"
                style={styles.modalAlert}
            >
                {renderModal()}
            </Modal>
        </View>
    )
} 