import React, { useState } from 'react';
import { StatusBar, ImageBackground } from 'react-native';

import { BACKGROUND_SPLASH } from '../../assets/consts';
import styles from '../../styles/styles';
import Logo from '../../components/Logo';
import Btn from '../../components/Buttons';
import Colors from '../../styles/Colors';
import { Title, Container, ContainerFooter, ContainerScroll, SafeContainer } from '../../styles';
import Restore from '../../components/Forms/Restore';

export default Forgot = ({ navigation }) => {
    const [email, setEmail] = useState();

    const handleSubmit = () => {
        alert(email)
    }

    return (
        <ImageBackground
            source={BACKGROUND_SPLASH}
            style={styles.imageBackground}
            imageStyle={{
                resizeMode: 'stretch',
            }}>
            <SafeContainer>
                <ContainerScroll
                    contentContainerStyle={{ flex: 1 }}
                    backgroundColor={Colors.transparent}>
                    <StatusBar hidden />
                    <Logo />
                    <Container
                        marginLeft="6%"
                        marginRight="6%"
                        backgroundColor={Colors.transparent}>
                        <Title font="22px" weight="bold" color={Colors.white} bottom="10px">Recuperar Senha</Title>
                        <Restore />
                    </Container>
                    <ContainerFooter>
                        <Title onPress={() => navigation.goBack()} top="10px" bottom="10px" color={Colors.white}>Voltar para Login</Title>
                    </ContainerFooter>
                </ContainerScroll>
            </SafeContainer>
        </ImageBackground>
    )
}
